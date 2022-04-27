import Head from "next/head";
import { ALink, SLink } from "../components/Links.js";

const Network = ({ topbar }) => (
  <>
    <div className="page network">
      <Head>
        <title>Network</title>
      </Head>
      <img
        src={"/img/bg/webring.jpeg"}
        className="fullSizeBackground"
        style={{ opacity: 0.2 }}
      />
      {topbar}
      <div className="wrapper">
        <h1>NETW0RK</h1>
        <p>
          To live as a tenant on the digital platforms of technocrats demands
          your submission to their rules and morals, an unforgivable assault on
          your spirit that declaws you and renders you incapable. You must
          establish and expand your own territory on the cybersteppe – only in
          this way can you reclaim agency and ownership of your digital soul.
          Revive the network spirit!
        </p>
        <p>
          Make sure you visit the{" "}
          <SLink href="/direct">
            <b>chat</b>
          </SLink>
          !
        </p>

        <h2>cyberfrens</h2>
        <ul>
          {friends.map((friend, idx) => (
            <li key={idx}>
              <ALink href={friend.url} target="_blank" rel="noreferrer">
                {friend.name}
              </ALink>
              {friend.at && (
                <>
                  &nbsp;&nbsp;~&nbsp;&nbsp;
                  <ALink
                    href={`https://twitter.com/${friend.at}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{friend.at}
                  </ALink>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* <h2>why?</h2>
        <p>
          Web 2.0 is becoming inhospitable; <b>network event horizon</b> is
          impending. Good users will be forced to migrate to their own domains,
          if they have them.
        </p>
        <p>
          This is a good thing— renting land on some superconglomerate's UI is
          low time-pref. <b>If u don't own property, u are the property.</b>
        </p>
        <p>
          Live in the town square, and the magistrate can expel u at any time,
          or cut u down like a dog...
        </p>
        <p>
          But build ur own temple in the woods and become immortal, with an
          underground <b>network of exiles</b>.
        </p>
        <p>Freedom relies on self sufficiency relies on private ownership.</p>
        <p>
          This is what untethered knowledge exchange will look like in coming
          years; a dispersed network of <b>web landlords</b> exiled from commie
          prison-platforms, forced to strike out into the wilderness, organising
          thru underground tunnel link-lattices.
        </p>
        <p>
          This page is a portal, one entry to this warren; a growing list of
          friends of the <b>Knowledge Network</b>, who have begun constructing
          their fiefdoms.
        </p>
        <p style={{ textAlign: "right" }}>
          [<ALink href="http://dons.directory/Network">Don</ALink>]
        </p> */}
      </div>
    </div>
  </>
);

const friends = [
  {
    url: "https://3dtestosterone.net/",
    name: "3DTESTOSTERONE.NET",
    at: "FODKORP",
  },
  { url: "http://dons.directory/", name: "Don's Directory", at: "Hot_Domme" },
  {
    url: "https://daoskivolk.neocities.org/",
    name: "Daoski Volk",
    at: "daoskivolk",
  },
  // { url: "https://soma.cx/", name: "soma.cx", at: "milkonaut" },
  {
    url: "http://exo-science.com",
    name: "Exo-Science",
    at: "NgoloTesla",
  },
  // {
  //   url: "https://scythia.online",
  //   name: "Scythosophy / Scythia.Online",
  //   at: "ARIOSOPHY",
  // },
  {
    url: "https://monkeydao.neocities.org/",
    name: "Monkey Dao",
    at: "MonkeDao",
  },
  // {
  //   url: "https://cyberdoxology.com/",
  //   name: "cyberdoxology.com",
  //   at: "cyberdoxoiogy",
  // },
  // { url: "https://edith.reisen/", name: "Edith.Reisen" },
  // { url: "https://remilia.org/", name: "Remilia House" },
  // {
  //   url: "https://www.youtube.com/channel/UCNmpIxA1dTKoKp0TSeqUlpw",
  //   name: "Scorched Earth Policy",
  //   at: "Scearpo",
  // },
];

export default Network;
