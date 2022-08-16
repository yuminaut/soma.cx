import React, { memo, useEffect, useState } from "react";
import Head from "next/head";
import io from "socket.io-client";
import SHA256 from "crypto-js/sha256";
import tripcode from "tripcode";

const toTrip = (str) => tripcode(SHA256(str).toString().slice(0, 8));

const isEmpty = (str) => str.replace(/^\s+/, "").replace(/\s+$/, "") === "";

const nametrip = (id, secret) => {
  let name = "anon";
  let trip = isEmpty(secret) ? toTrip(id) : toTrip(secret);
  if (secret.includes("#")) {
    let [left, ...rest] = secret.split("#");
    let right = rest.join("#");
    name = isEmpty(left) ? name : left;
    trip = isEmpty(right) ? toTrip(id) : toTrip(right);
  }
  return { name, trip };
};

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [id, setId] = useState("");
  const [chat, setChat] = useState([]);
  const [connections, setConnections] = useState({});
  const [secret, setSecret] = useState("");

  useEffect(() => {
    setSocket(
      io("https://chat.soma.cx", {
        path: "/socket.io/", // this is important and must be mathched in server and nginx
        withCredentials: true,
      })
    );
  }, []);

  useEffect(() => {
    if (socket === null) {
      return;
    }

    socket.on("connected", ({ id, chat, connections }) => {
      console.log("You connected with connection ID =", id);
      setId(id);
      setConnections(connections);
      setChat(chat);
    });

    socket.on("user left", ({ id, connections }) => {
      console.log(`User ${id} left.`);
      setConnections(connections);
    });

    socket.on("message", ({ packet, connections }) => {
      setChat((chat) => [...chat, packet]);
      setConnections(connections);
    });

    socket.on("wipe old messages", ({ chat }) => {
      setChat([...chat]);
    });

    return () => {
      socket.emit("leave");
    };
  }, [socket]);

  const onSecretChange = (e) => {
    let v = e.target.value;
    const lim = 10;
    if (
      v[v.length - 1] === "#" &&
      !v.slice(0, v.length - 1).includes("#") &&
      v.length - 1 > lim
    ) {
      let tmp = v.split("");
      tmp.splice(lim, tmp.length - lim);
      v = tmp.join("") + "#";
    }
    if (v.includes("#")) {
      let [name] = v.split("#");
      if (name.length > lim) {
        return;
      }
    }
    setSecret(v);
  };

  const { name, trip } = nametrip(id, secret);

  if (!socket || socket.connected === false) {
    return <div style={{ padding: "1em" }}>Chat is down...</div>;
  }

  return (
    <>
      <Head>
        <title>somachat</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
          key="direct"
        />
      </Head>
      <div className="chat">
        <div className="header">
          <div className="txt">/chat - tripcode chat</div>
          <div className="generator">
            <div>
              <span style={{ color: toHex(trip) }}>{name}</span> {trip}&nbsp;
            </div>
            <input
              className="secretInput preventToggle"
              placeholder="name#secret (optional)"
              onChange={onSecretChange}
              value={secret}
            />
          </div>
        </div>
        <br />
        <div className="theFlex">
          <div className="messages">
            {[...chat].reverse().map((message) => (
              <Message key={`${id}:${message.time}`} message={message} />
            ))}
          </div>
          <Connections connections={connections} />
        </div>
        <YourMessage
          onMessageSubmit={(e, content) => {
            socket.emit("message", { secret, content });
          }}
        />
      </div>
    </>
  );
};

const ddd = "-".repeat(
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .length
);

const re = /((?:ftp|http|https):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:.?+=&%@!-/]))?)/;

const renderLinks = (text) => {
  let parts = text.split(re);
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <a
        key={"link" + i}
        href={`${parts[i]}`}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#bbf", fontWeight: "bold" }}
      >
        {parts[i]}
      </a>
    );
  }
  return parts;
};

const Message = memo(({ message: { name, trip, content, time, active } }) => {
  const [timeString, setTimestring] = useState(ddd);
  useEffect(() => {
    setTimestring(
      new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [time]);

  const [lines, setLines] = useState([]);
  useEffect(() => {
    setLines(
      content
        .replace(/^\s+|\s+$/g, "") // trim whitespace around
        .replace(/ {2}/g, " \u00a0") // change double space to space+nbsp
        .split("\n")
        .map(renderLinks)
    );
  }, [content]);

  const [hex, setHex] = useState("#FFFFFF");
  useEffect(() => {
    setHex(toHex(trip));
  }, [trip]);

  const displayName = name && name.length > 0 ? name : trip;

  // https://stackoverflow.com/questions/638648/getting-linebreaks-in-pre-tags

  const tooltip = (
    <span className="tooltip" style={{ color: hex }}>
      <span style={{ background: active ? `${hex}55` : "inherit" }}>
        {displayName}
      </span>
      <span className="tooltiptext">{trip}</span>
    </span>
  );

  return (
    <div className="message">
      <div className="meta">
        <span className="time">{timeString}</span> {tooltip}&nbsp;
      </div>
      <div className="content">
        {lines.map((line, idx) => (
          <div key={idx} className="text">
            {line}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
});

const YourMessage = ({ onMessageSubmit }) => {
  const [content, setContent] = useState("");

  const onMsgChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <textarea
      className="messageInput preventToggle"
      placeholder="Say something"
      value={content}
      onChange={onMsgChange}
      onKeyDown={(e) => {
        // const k = e.key !== undefined ? e.key : e.keyIdentifier !== undefined ? e.keyIdentifier : e.keyCode;
        if (e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();

          if (isEmpty(content)) {
            return;
          }
          setContent("");

          onMessageSubmit(e, content);
        }
      }}
    />
  );
};

const Connections = ({ connections }) => (
  <div className="connectionsBox">
    <div
      style={{
        textAlign: "center",
        borderBottom: "thin solid green",
        paddingBottom: "0.5em",
        marginBottom: "0.5em",
      }}
    >
      Connections
    </div>
    {Object.keys(connections).map((id, idx) => {
      const c = connections[id];
      return (
        <div className="connection" key={idx}>
          <div className="connectionName" style={{ color: toHex(c.trip) }}>
            {c.name}
          </div>
          <div className="connectionTrip">{c.trip}</div>
        </div>
      );
    })}
  </div>
);

const toHex = (str) => {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    value = value | 0x50; // added by me
    color += ("00" + value.toString(16)).substr(-2);
  }
  return color;
};

export default Chat;

// const OldMessage = ({ message: { name, trip, content, time, avatar } }) => {
//   const timeString = new Date(time * 1000).toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const len = timeString.length + name.length;
//   const spacing = "\u00a0".repeat(len) + `\u00a0│\u00a0`;
//   // const trimmed = content.replace(/^\s+|\s+$/g, ""); // trim whitespace around
//   const trimmed = content.replace(/ /g, "\u00a0");
//   const lines = trimmed.split("\n");
//   const begin = lines.length > 1 ? "┌" : "╶";
//   const last = (i) => (i === lines.length - 1 ? spacing.replace("│", "└") : spacing);

//   const msg = (
//     <>
//       <span style={{ color: "#007700" }}>{timeString}</span>{" "}
//       <span className="tooltip" style={{ color: toHex(trip) }}>
//         {name && name.length > 0 ? name : trip}
//         {begin} <span className="tooltiptext">{trip}</span>
//       </span>{" "}
//       {/* <img style={{ height: "16px", verticalAlign: "middle" }} src={`data:image/svg+xml;utf8,${avatar}`} alt="avatar" /> */}
//     </>
//   );

//   return (
//     <div>
//       {lines.map((line, idx) => (
//         <div key={idx}>
//           {idx === 0 ? msg : <span style={{ color: toHex(trip) }}>{last(idx)}</span>}
//           <>
//             <span>{line}</span>
//             <br />
//           </>
//         </div>
//       ))}
//     </div>
//   );
// };
