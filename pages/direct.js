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
          <p>
            New version is available at{" "}
            <a href="https://chat.soma.cx" target="_blank" rel="noreferrer">
              chat.soma.cx
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatRT;
