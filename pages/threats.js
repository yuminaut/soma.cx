import Head from "next/head";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import { SLink } from "../components/Links.js";

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
        <p>There are many threats to health that most are unaware of:</p>
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
        </ul>
        <p>... and a few more:</p>
        <h3>Schampoo</h3>
        <p>
          The sulfates in shampoo, while removing dirt from your hair and scalp,
          also strip them of natural oils. This dries out your hair and makes it
          frizzy and brittle.
        </p>
        <p>
          Your scalp also absorbs whatever industrial chemicals the shampoo
          contains.
        </p>
        <p>
          The <a href="https://www.reddit.com/r/NoPoo/wiki/index">/r/NoPoo</a>{" "}
          ("no shampoo") wiki on Reddit has good information on this topic.
        </p>

        <h3>Sunglasses</h3>
        <p>
          Sunglasses worsen vision and weaken the signals that enforce a healthy
          circadian rhythm.
        </p>
        <p>
          <a href="https://medium.com/@veritasnaut/sunglasses-are-killing-you-dbadb93f935d">
            More info
          </a>
        </p>
      </div>
    </div>
  );
};

export default Threats;
