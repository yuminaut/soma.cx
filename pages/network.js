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
        {/* <p>
          Make sure you visit the{" "}
          <SLink href="/direct">
            <b>chat</b>
          </SLink>
          !
        </p> */}

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
      </div>
    </div>
  </>
);

const friends = [
  {
    url: "http://exo-science.com",
    name: "Exo-Science",
    at: "NgoloTesla",
  },
  // {
  //   url: "http://2-coin.net",
  //   name: "2-coin",
  //   at: "MonadicMode",
  // },
  {
    url: "https://daoskivolk.neocities.org/",
    name: "Daoski Volk",
    at: "daoskivolk",
  },
  {
    url: "https://3dtestosterone.net/",
    name: "3DTESTOSTERONE.NET",
    at: "FODKORP",
  },
];

export default Network;
