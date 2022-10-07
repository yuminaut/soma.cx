import Head from "next/head";
import { useEffect, useState } from "react";
import { BigFlicker } from "../components";
import { Iceberg } from "../components/Iceberg";
import { ALink, SLink } from "../components/Links.js";
const skull = "/img/skull.gif";

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomBg = () => {
  return randomElement([
    "/img/bg/lain1.gif",
    // "/img/bg/lain2.gif",
    "/img/bg/lain1.jpg",
    "/img/bg/brain2.gif",
    "/img/bg/hacker1.gif",
    "/img/bg/schumann.jpeg",
    "/img/bg/bebop1.jpg",
    // "/img/bg/hacker1.png",
    // "/img/bg/cyberpunk.jpg",
  ]);
};

export const Home = ({ topbar }) => {
  const [bg, setBg] = useState("/img/bg/black.png");
  useEffect(() => {
    setBg(randomBg());
  }, []);
  return (
    <div className="page home">
      <Head>
        <title>soma.cx</title>
      </Head>
      <img src={bg} className="fullSizeBackground" style={{ opacity: 0.3 }} />
      {topbar}
      <div className="wrapper">
        {/* <p> Welcome inside my brain... you are under control of my neural network now, ha ha ha...{" "} <img src={skull} id="skull" alt="skull" /> Just kidding, my thoughts are compiled to HTML and transmitted to your brain via a custom HBI protocol... direct access would be too dangerous! </p> */}
        <div className="home-links">
          <dl>
            <dt>SOMATIC TRANSMUTATION</dt>
            <dd>{healthLinks}</dd>
            <dt>EXP</dt>
            <dd>{miscLinks}</dd>
            <dt>LAYER 0</dt>
            <dd>{textLinks}</dd>
          </dl>
        </div>
        <p className="text-align-right">
          Dig <BigFlicker>a</BigFlicker>round a little...{" "}
          <img src={skull} id="skull" alt="skull" />
        </p>
        {/* <Iceberg /> */}
      </div>
    </div>
  );
};

const collapse = (xs) =>
  xs
    .map((st, i) =>
      st.external ? (
        <ALink key={i} href={st.href} target="_blank" rel="noreferrer">
          {st.title}
        </ALink>
      ) : (
        <SLink key={i} href={st.href}>
          {st.title}
        </SLink>
      )
    )
    .reduce((prev, curr, j) => [
      prev,
      <span key={xs.length + j} style={{ color: "#fafafa88" }}>
        {" ~ "}
      </span>,
      curr,
    ]);

const textLinks = collapse([
  { href: "/archive", title: "archive" },
  // { href: "/birdsong", title: "birdsong" },
  { href: "/docs", title: "docs" },
  // { href: "/favorites", title: "favorites" },
  { href: "/links", title: "links" },
  // { href: "/network", title: "network" },
]);

const healthLinks = collapse([
  { href: "/nutrition", title: "nutrition" },
  { href: "/supplements", title: "supplements" },
  { href: "/breathing", title: "breathing" },
  // { href: "/recipes", title: "recipes" },
  { href: "/threats", title: "threats" },
  { href: "/remedies", title: "remedies" },
  { href: "/misc", title: "misc" },
]);

const miscLinks = collapse([
  { href: "https://chat.soma.cx", title: "chat", external: true },
  // { href: "/thenightsong", title: "the night song" },
  { href: "/khoomei", title: "khoomei" },
  { href: "/steppe.html", title: "steppe" },
]);

export default Home;
