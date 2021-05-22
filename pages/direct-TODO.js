/* eslint-disable no-unused-vars */

import React, { memo, useEffect, useRef, useState } from "react";
import Head from "next/head";
import io from "socket.io-client";
import { Howl } from "howler";

const newMessageSound = new Howl({
  src: ["/audio/gesture-192.mp3"],
  volume: 0.5,
});

import { isEmpty, onSecretChange } from "../util.js";
import { useRouter } from "next/router";
import { SLink } from "../components/Links.js";

const iconDefault = "/favicon.ico";
const iconNotif = "/favicon-notif.ico";

const ChatRT = () => {
  // const [scroll, setScroll] = useState({});
  // const saveScroll = () => {
  //   if (messagesRef === null) return;
  //   const box = messagesRef.current;
  //   setScroll({
  //     height: box.scrollHeight,
  //     offset: box.offsetHeight,
  //     top: box.scrollTop,
  //   });
  // };

  const [icon, setIcon] = useState(iconDefault);
  const [socket, setSocket] = useState(null);
  const [id, setId] = useState(null);
  const [connections, setConnections] = useState({});

  const [secret, setSecret] = useState("");
  const [saveSecret, setSaveSecret] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [cozyMode, setCozyMode] = useState(false);

  const [chat, setChat] = useState({});
  const [keys, setKeys] = useState([]);

  const [connClass, setConnClass] = useState("");

  const handle = (socket, event, listener) => {
    return socket.off(event).on(event, listener);
  };

  const url = "https://chat.soma.cx";
  // const url = "http://localhost:3742";

  useEffect(() => {
    setSocket(
      io(url, {
        path: "/socket.io.rt/", // this is important and must be mathched in server and nginx
        // withCredentials: true,
        // extraHeaders: {
        //   "Access-Control-Allow-Origin": "chat.soma.cx",
        // },
      })
    );

    if (localStorage.getItem("cozyMode") === "true") {
      setCozyMode(true);
    }

    window.addEventListener("focus", () => setIcon(iconDefault));
    return () => {
      window.removeEventListener("focus", () => setIcon(iconDefault));
    };
  }, []);

  // hack to get height to work properly on both desktop and mobile
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/direct") {
      document.documentElement.style.setProperty("height", "100%");
    }
  }, [router]);

  useEffect(() => {
    if (cozyMode) {
      localStorage.setItem("cozyMode", "true");
    } else {
      localStorage.removeItem("cozyMode");
    }
  }, [cozyMode]);

  /* ----------------------------- Event setup ----------------------------- */

  useEffect(() => {
    if (socket === null) return;

    handle(socket, "connected", ({ id, keys, chat }) => {
      console.log("You connected with connection ID =", id);
      setId(id);
      setKeys(keys);
      setChat(chat);

      if (localStorage.getItem("saveSecret") == "true") {
        setSaveSecret(true);
        const secret = localStorage.getItem("secret");
        if (secret !== null) {
          setSecret(secret);
          socket.emit("secret blur", { secret });
          console.log("SENDING", secret);
        }
      }
    });

    handle(socket, "client alive?", () => {
      socket.emit("client alive");
    });

    handle(socket, "user connected", ({ id, connections }) => {
      console.log("User connected:", id);
      setConnections(connections);
    });

    handle(socket, "user left", ({ id, connections }) => {
      console.log("User left:", id);
      setConnections(connections);
    });

    handle(socket, "change secret", (user) => {
      setUserInfo(user);
    });

    handle(socket, "secret blur", ({ user, connections }) => {
      setConnections(connections);
    });

    handle(socket, "begin message", (packet) => {
      setKeys((keys) => [...keys, packet.time]);
      setChat((chat) => ({ ...chat, [packet.time]: packet }));
    });

    handle(socket, "change message", (packet) => {
      setChat((chat) => ({ ...chat, [packet.time]: packet }));
    });

    handle(socket, "remove message", ({ time }) => {
      setKeys((keys) => {
        const index = keys.indexOf(time); // should probably key on more than just time, maybe id+time?

        // does not exist
        if (index === -1) {
          return keys;
        }

        const cpy = [...keys];
        cpy.splice(index, 1);
        return cpy;
      });
      setChat((chat) => {
        let { [time]: _, ...rest } = chat;
        return rest;
      });
    });

    handle(socket, "wipe old messages", ({ chat, keys }) => {
      setKeys(keys);
      setChat(chat);
    });

    return () => {
      socket.emit("leave");
    };
  }, [socket]);

  useEffect(() => {
    if (socket === null) return;
    handle(socket, "send message", (packet) => {
      setChat((chat) => ({ ...chat, [packet.time]: packet }));

      if (!document.hasFocus()) {
        setIcon(iconNotif);
      }
      if (
        id in connections &&
        packet.content.includes("@" + connections[id].trip)
      ) {
        newMessageSound.play();
        console.log(`${packet.trip} tagged you (${connections[id].trip}).`);
      }
    });
  }, [socket, id, connections]);

  useEffect(() => {
    if (socket === null || secret === null) return;
    socket.emit("change secret", { secret });
  }, [socket, secret]);

  useEffect(() => {
    if (saveSecret) {
      setInteracted(true);
      localStorage.setItem("saveSecret", "true");
      localStorage.setItem("secret", secret);
      if (secret.length === 0) {
        localStorage.removeItem("secret");
      }
    }
  }, [saveSecret, secret]);

  useEffect(() => {
    if (interacted && !saveSecret) {
      localStorage.removeItem("saveSecret");
      localStorage.removeItem("secret");
    }
  }, [saveSecret, interacted]);

  /* ----------------------------- Other code ----------------------------- */

  // const [box, setBox] = useState(null);
  const abs = (x) => (x < 0 ? -x : x);
  const messagesRef = useRef(null);

  useEffect(() => {
    const box = messagesRef.current;
    if (box === null) {
      return;
    }
    // setBox(box);
    const scrollBottom =
      box.scrollHeight - abs(box.scrollTop) - box.offsetHeight;

    // console.log("box.scrollHeight =", box.scrollHeight);
    // console.log("box.scrollTop =", box.scrollTop);
    // console.log("box.offsetHeight =", box.offsetHeight);
    // console.log("scrollBottom =", scrollBottom);

    // console.log(scroll.height, box.scrollHeight);
    // if (scroll !== null && scroll.height !== box.scrollHeight) {
    // console.log(scroll.top, box.scrollTop);
    // setTimeout(() => {
    //   // box.scrollBy(0, scroll.top - box.scrollTop);
    //   box.scrollBy(0, (scroll.height - box.scrollHeight) / 4);
    // }, 400);
    // }

    if (box.scrollTop < 0 && box.scrollTop > -50) {
      // iOS Safari
      box.scrollTo({ left: 0, top: 1, behavior: "smooth" });
      box.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else if (scrollBottom < 50) {
      const t = box.scrollHeight + box.offsetHeight + 500;
      box.scrollTo({ left: 0, top: t + 1, behavior: "smooth" });
      box.scrollTo({ left: 0, top: t, behavior: "smooth" });
    }
  }, [keys, chat]);

  if (
    socket === null ||
    socket.connected === false ||
    !(id in connections) ||
    userInfo === null ||
    saveSecret === null
  ) {
    return (
      <div className="chat-main">
        <div className="loading">Chat is loading...</div>
      </div>
    );
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
        <link id="favicon" rel="icon" type="image/png" href={icon} />
      </Head>
      <div className="chat-main">
        <div className="chat fadeInChat">
          <div className="header">
            <div className="txt">
              <SLink href="/home" target="_blank">
                soma.cx
              </SLink>{" "}
              | hyper-real-time chat |{" "}
              <SLink href="/about" target="_blank">
                about/donate
              </SLink>
            </div>
            <div className="generator">
              <div className="namesave">
                <div className="nametrip">
                  <span style={{ color: userInfo.color }}>{userInfo.name}</span>{" "}
                  {userInfo.trip}
                </div>
                <div className="checkboxAndInput">
                  {/* <Checkbox label="Save" checked={saveSecret} onChange={() => setSaveSecret(!saveSecret)} /> */}
                  <input
                    className="secretInput preventToggle"
                    placeholder="name#secret"
                    onChange={(e) => {
                      onSecretChange(e, setSecret);
                    }}
                    onBlur={() => {
                      socket.emit("secret blur", { secret });
                    }}
                    value={secret}
                  />
                </div>
              </div>
            </div>
            <div
              className="connButton"
              onClick={() => {
                if (connClass === "") {
                  setConnClass("connOpen");
                } else {
                  setConnClass("");
                }
              }}
            >
              📡
            </div>
          </div>
          {/* <div className="test">
          box.scrollHeight&nbsp;= {box !== null ? box.scrollHeight : ""}
          <br />
          box.scrollTop&nbsp;&nbsp;&nbsp;&nbsp;= {box !== null ? box.scrollTop : ""}
          <br />
          box.offsetHeight&nbsp;= {box !== null ? box.offsetHeight : ""}
          <br />
          scrollBottom&nbsp; = {box !== null ? box.scrollHeight - abs(box.scrollTop) - box.offsetHeight : ""}
          <br />
          scroll.height&nbsp; = {scroll !== null ? scroll.height : ""}
          <br />
          scroll.top&nbsp; = {scroll !== null ? scroll.top : ""}
        </div> */}
          <div className="theFlex">
            <div className="messages" ref={messagesRef}>
              {[...keys].reverse().map((key, i, array) => {
                const value = chat[key];
                // Should not be needed, but maybe depends on if keys or chat updates first
                if (value === undefined) {
                  return;
                }
                const prevKey = array[i + 1];
                const prevValue =
                  prevKey !== undefined ? chat[prevKey] : undefined;
                const prevUser =
                  prevValue !== undefined ? prevValue["trip"] : undefined;
                const followUpTimeMs = 10 * 60 * 1000;
                let followUp =
                  prevUser !== undefined && prevUser === value["trip"];
                if (
                  prevValue !== undefined &&
                  value["time"] - prevValue["time"] > followUpTimeMs
                ) {
                  followUp = false;
                }

                return (
                  <Message
                    key={`${id}:${value["time"]}`}
                    message={value}
                    followUp={followUp}
                    cozyMode={cozyMode}
                  />
                );
              })}
            </div>
            <Connections
              connClass={connClass}
              connections={connections}
              saveSecret={saveSecret}
              setSaveSecret={setSaveSecret}
              cozyMode={cozyMode}
              setCozyMode={setCozyMode}
            />
          </div>
          <YourMessage socket={socket} />
        </div>
      </div>
    </>
  );
};

const Checkbox = ({ label, checked, onChange, ...rest }) => (
  <div className="checkbox" {...rest}>
    <label>
      <input
        type="checkbox"
        value={label}
        checked={checked}
        onChange={onChange}
      />
      &nbsp;{label}
    </label>
  </div>
);

const setCharAt = (str, index, chr) => {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
};

const fix = (str) => {
  if (str.startsWith(" ")) {
    str = setCharAt(str, 0, "\u00a0");
  }
  if (str.endsWith(" ")) {
    str = setCharAt(str, str.length - 1, "\u00a0");
  }
  return str;
};

const ddd = "-".repeat(
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .length
);

const re = /(?<!\S)((?:ftp|http|https):\/\/(?:\w+:{0,1}\w*@)?(?:\S+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:.?+=&%@!-/]))?)/;

const renderLinks = (text) => {
  let parts = text.split(re);
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <a key={"link" + i} href={`${parts[i]}`} target="_blank" rel="noreferrer">
        {parts[i]}
      </a>
    );
  }
  return parts;
};

const Message = memo(
  ({
    message: { name, trip, color, content, time, active },
    followUp,
    cozyMode,
  }) => {
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
          .map(fix)
          .map(renderLinks)
      );
    }, [content]);

    const displayName = name && name.length > 0 ? name : trip;

    // https://stackoverflow.com/questions/638648/getting-linebreaks-in-pre-tags

    const tooltip = (
      // TODO className shouldn't be "tooltip", it should be name or something
      <span className="tooltip" style={{ color }}>
        <span
          className="name"
          style={{ background: active ? `${color}55` : "inherit" }}
        >
          {displayName}
        </span>
        <span className="tooltiptext">{trip}</span>
      </span>
    );

    const mobileTrip = <span className="mobile-trip">[{trip}] </span>;

    return (
      <MessageBetter
        cozyMode={cozyMode}
        followUp={followUp}
        timeString={timeString}
        tooltip={tooltip}
        mobileTrip={mobileTrip}
        lines={lines}
      />
    );
  }
);

const MessageBetter = ({
  cozyMode,
  followUp,
  timeString,
  tooltip,
  mobileTrip,
  lines,
}) => (
  <div
    className={
      "message" +
      (cozyMode ? " style-mobile" : " style-irc") +
      (followUp ? " followUp" : "")
    }
  >
    <div className="meta">
      <span className="time">{timeString}</span>&nbsp;
      {tooltip}&nbsp;
      {mobileTrip}
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

const YourMessage = ({ socket }) => {
  const [content, setContent] = useState("");

  const onChange = (e) => {
    if (e.target.value.length > 512) {
      e.target.value = e.target.value.slice(0, 512);
    }
    if (content.length === 0) {
      socket.emit("begin message", { content: e.target.value });
    } else if (e.target.value.length === 0) {
      socket.emit("remove message");
    } else {
      socket.emit("change message", { content: e.target.value });
    }
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    // const k = e.key !== undefined ? e.key : e.keyIdentifier !== undefined ? e.keyIdentifier : e.keyCode;
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      if (isEmpty(content)) {
        return;
      }
      setContent("");
      socket.emit("send message");
    }
  };

  return (
    <textarea
      className="messageInput preventToggle"
      placeholder="Say something"
      value={content}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

const Connections = ({
  connections,
  connClass,
  saveSecret,
  setSaveSecret,
  cozyMode,
  setCozyMode,
}) => (
  <div className={`connectionsBox ${connClass}`}>
    <div className="connectionsTitle">Settings</div>
    <div className="settingsBox">
      <div className="settings">
        <Checkbox
          className="keepinfo"
          label="Don't reset user info"
          checked={saveSecret}
          onChange={() => setSaveSecret(!saveSecret)}
        />
        <Checkbox
          className="cozymode"
          label="Non-IRC view"
          checked={cozyMode}
          onChange={() => setCozyMode(!cozyMode)}
        />
      </div>
    </div>
    <div className="connectionsTitle">Connections</div>
    <div className="connections">
      {Object.keys(connections).map((id, idx) => {
        const c = connections[id];
        return (
          <div className="connection" key={idx}>
            <div className="connectionName" style={{ color: c.color }}>
              {c.name}
            </div>
            <div className="connectionTrip">{c.trip}</div>
          </div>
        );
      })}
    </div>
  </div>
);

// const FileInput = ({ value, onChange = () => {}, ...rest }) => (
//   <div>
//     {Boolean(value.length) && (
//       <div>Selected files: {value.map(f => f.name).join(", ")}</div>
//     )}
//     <label>
//       Click to select some files...
//       <input
//         {...rest}
//         style={{ display: "none" }}
//         type="file"
//         onChange={e => {
//           onChange([...e.target.files]);
//         }}
//       />
//     </label>
//   </div>
// );

export default ChatRT;
