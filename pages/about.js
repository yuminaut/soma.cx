import Head from "next/head";
import { ALink, SLink } from "../components/Links.js";

const About = ({ topbar }) => (
  <>
    <div className="page about">
      <Head>
        <title>About somachat</title>
      </Head>
      <img
        src={"/img/bg/halo-3.jpeg"}
        className="fullSizeBackground"
        style={{ opacity: 0.2 }}
      />
      {/* {topbar} */}
      <div className="wrapper">
        <h1>about somachat</h1>
        <p>
          I created the initial version of{" "}
          <SLink href="/direct">somachat</SLink> during the end of 2020 and was
          overwhelmed by the positive response, which has continually motivated
          me to keep improving it.
        </p>
        <h2>the future of somachat</h2>
        <p>
          I am currently focus on expanding the prototype into a foundation for
          a decentralized communication network. My vision is to let you browse
          and connect to multiple user-hosted chat servers, either fully
          anonymously or as recognized by a single unique identitfier – up to
          you.
        </p>
        <p>
          Along with that I am always serious about improving usability and
          performance, and take all user feedback seriously. The chat will
          always be free to use and I plan to release software that lets you
          host your own dedicated chat server.
        </p>
        <p>
          Donations are highly appreciated to help support my development as
          well as server costs. Thank you!
        </p>
        <p className="donate-btc">
          BTC:{" "}
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "var(--font-mono)",
            }}
          >
            35dZZK71K4h1fV5B8dBL6RwydES5ujPY1d
          </span>{" "}
          /{" "}
          <ALink
            href="/img/35dZZK71K4h1fV5B8dBL6RwydES5ujPY1d.png"
            target="_blank"
          >
            QR Code
          </ALink>
        </p>
      </div>
    </div>
  </>
);

export default About;
