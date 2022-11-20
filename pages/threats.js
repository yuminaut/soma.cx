import Head from "next/head";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import { ALink, SLink } from "../components/Links.js";

const Section = ({ id, md }) => (
  <div className="box">
    <a id={id}></a>
    <ReactMarkdownWithHtml allowDangerousHtml children={md} />
  </div>
);

const Threats = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Threats to health</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="modern-dangers">Threats to health</h1>
        <p>
          There are many threats to health that most are unaware of. Click the
          links below for more info on some of them.
        </p>
        <ul>
          <li>
            <SLink href="health/blue-light">Blue light</SLink>
          </li>
          <li>
            <SLink href="health/iron">Iron toxicity</SLink>
          </li>
          <li>
            <SLink href="health/copper">Copper toxicity</SLink>
          </li>
          <li>
            <SLink href="health/sunscreen">Sunscreen</SLink>
          </li>
          <li>
            <SLink href="health/parasites">Parasites</SLink>
          </li>
          <li>
            <SLink href="breathing">Incorrect breathing</SLink>
          </li>
          <li>
            <SLink href="health/shampoo">Commercial shampoo</SLink>
          </li>
          <li>
            <ALink
              href="https://medium.com/@veritasnaut/sunglasses-are-killing-you-dbadb93f935d"
              target="_blank"
              rel="noreferrer"
            >
              Sunglasses
            </ALink>
          </li>
        </ul>
        {/* <p>... and a few more:</p> */}

        {/* <h3>Sunglasses</h3>
        <p>
          Sunglasses worsen vision and weaken the signals that enforce a healthy
          circadian rhythm.
        </p>
        <p>
          <a href="https://medium.com/@veritasnaut/sunglasses-are-killing-you-dbadb93f935d">
            More info
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Threats;
