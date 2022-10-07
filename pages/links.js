import Head from "next/head";
import { ALink } from "../components/Links.js";

const Links = ({ topbar }) => (
  <>
    <div className="page links">
      <Head>
        <title>Links</title>
      </Head>
      <img
        src={"/img/bg/links.jpeg"}
        className="fullSizeBackground"
        style={{ opacity: 0.1 }}
      />
      {topbar}
      <div className="wrapper">
        <h1>LINKS</h1>

        <h2>Privacy, Security &amp; Communication</h2>
        <h4>Anonymity, decentralization</h4>
        <ul>
          <li>
            <ALink href="https://www.torproject.org/">Tor Project</ALink> –
            anonymity-enabling proxy network
          </li>
          <li>
            <ALink href="https://freenetproject.org/index.html">Freenet</ALink>{" "}
            – anonymous P2P publishing/communication network
          </li>
          <li>
            <ALink href="https://geti2p.net/en/">I2P</ALink> – anonymous P2P
            network
          </li>
          <li>
            <ALink href="https://www.opennic.org/">OpenNIC</ALink> – alternative
            DNS network
          </li>
          <li>
            <ALink href="https://www.namecoin.org/">Namecoin</ALink> –
            decentralized DNS and more, on a blockchain
          </li>
          <li>Bitcoin etc. – payment alternative</li>
          <li>
            <ALink href="https://kycnot.me/">KYC? Not me!</ALink> –
            cryptocurrency marketplaces that don't ask for personal info
          </li>
        </ul>

        <h4>Alternative telecommunications networks</h4>
        <ul>
          <li>
            <ALink href="https://freifunk.net/en/">freifunk.net</ALink> –
            Germany
          </li>
          <li>
            <ALink href="https://www.nycmesh.net/">nycmesh.net</ALink> – New
            York City
          </li>
          <li>
            <ALink href="https://guifi.net/en">guifi.net</ALink> – Catalonia
          </li>
        </ul>

        <h4>Resources, further reading</h4>
        <ul>
          <li>
            <ALink href="https://digdeeper.neocities.org/index.html">
              Dig Deeper
            </ALink>{" "}
            – good exploration of digital privacy and security
            <ul>
              <li>
                digdeep4orxw6psc33yxa2dgmuycj74zi6334xhxjlgppw6odvkzkiad.onion
              </li>
              <li>digdeepn2s7uw3oy.onion</li>
            </ul>
          </li>
        </ul>

        <h2>Achieving user agency</h2>
        <ul>
          <li>Have an offline life and community.</li>
          <li>Participate in the WiredNet (CONSTRUCTION IN PROGRESS).</li>
          <li>Create your own website and participate in web rings.</li>
          <li>Move away from oppressive web 3.0 social media platforms.</li>
          <li>
            Learn how the{" "}
            <ALink href="https://signal.org/docs/">Signal protocol</ALink> or
            similar protocols work; learn how to write or at least choose
            communication software.
            <ul>
              <li>
                <ALink href="/pdf/signal/xeddsa.pdf" target="_blank">
                  XEdDSA and VXEdDSA
                </ALink>
              </li>
              <li>
                <ALink href="/pdf/signal/x3dh.pdf" target="_blank">
                  X3DH
                </ALink>
              </li>
              <li>
                <ALink href="/pdf/signal/doubleratchet.pdf" target="_blank">
                  Double Ratchet
                </ALink>
              </li>
              <li>
                <ALink href="/pdf/signal/sesame.pdf" target="_blank">
                  Sesame
                </ALink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Links;
