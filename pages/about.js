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
        <h2>roadmap</h2>
        <p>
          I am focused on expanding the prototype into a foundation for a
          decentralized communication network. My vision is to let you browse
          and connect to multiple user-hosted chat servers, either anonymously
          or by a single unique identitfier – up to you.
        </p>
        <p>
          Usability and performance are of high concern, and I take all user
          feedback seriously. The chat will always be free to use and I plan to
          release software that lets you host your own dedicated chat server.
        </p>
        <p>
          Donations are highly appreciated as they help support development as
          well as server costs. Thank you!
        </p>
        <p className="donate-coin">
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
        <p className="donate-coin">
          CELO:{" "}
          <span
            style={{
              fontWeight: "bold",
              fontFamily: "var(--font-mono)",
            }}
          >
            0x287fd8ef4867aC8a4C4Fe7d21008E11589209Ec1
          </span>{" "}
          /{" "}
          <ALink
            href="/img/0x287fd8ef4867aC8a4C4Fe7d21008E11589209Ec1.png"
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
