import Head from "next/head";
import { BackHome } from "../components/BackButtons.js";
import { ALink, SLink } from "../components/Links.js";

const chem = "/pdf/Common_Chemicals_Cheatsheet.pdf";

const Docs = () => (
  <>
    <Head>
      <title>Docs</title>
    </Head>
    <div className="page docs">
      <BackHome />
      <div className="docs-links">
        <p>
          <b>various docs</b>
        </p>
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              <SLink href={link.url}>{link.name}</SLink>
            </li>
          ))}
          {/* <li>
            <ALink href={chem} alt="chemicals" target="_blank" rel="noreferrer">
              Common chemicals and supplies in and around your home (PDF)
            </ALink>
          </li> */}
        </ul>
      </div>
    </div>
  </>
);

const links = [
  { url: "/travel", name: "Notes on travel" },
  { url: "/physiognomy", name: "Notes on physiognomy" },
  { url: "/antivegan/index.html", name: "Anti-vegan" },
  { url: "/buildings", name: "Buildings are Sentient and Evil" },
  {
    url: "http://lwhasten.com/edved.html",
    name: "🔗 Eddas and Vedas: Comparative Mythology and the Aryan Invasion Hypothesis",
  },
  {
    url: "http://cura.free.fr/xv/14boutet.html",
    name: "🔗 Druidical Astrology",
  },
  {
    url: "http://osterholm.net/swedes.html",
    name: "🔗 A History of the Swedish People",
  },
  // {
  //   url: "https://saturniancosmology.org/index.php",
  //   name: "🔗 Saturnian Cosmology",
  // },
  // { url: "https://sacred-texts.com/hin/manu.htm", name: "🔗 The Laws of Manu" },
];

export default Docs;
