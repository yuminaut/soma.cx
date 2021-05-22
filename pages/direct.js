import React from "react";
import Head from "next/head";

const ChatRT = () => {
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
      <div className="chat-main">
        <div style={{ textAlign: "center" }}>
          <p>The chat is down, and will be down for the time being.</p>
          <p>I'm working on a new version.</p>
          <p>
            Follow{" "}
            <a
              href="https://twitter.com/milkonaut"
              target="_blank"
              rel="noreferrer"
            >
              @milkonaut
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/Hot_Tomme"
              target="_blank"
              rel="noreferrer"
            >
              @Hot_Tomme
            </a>{" "}
            on Twitter for updates.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatRT;
