import Head from "next/head";

const globe = "/img/globe.gif";

const Tweet = ({ href, children }) => (
  <div className="tweet">
    <div className="text col">{children}</div>
    <div className="link col">
      <a href={href} className="globeLink" target="_blank" rel="noreferrer">
        <img src={globe} alt="link" />
      </a>
    </div>
  </div>
);

const Tweets = ({ topbar }) => (
  <>
    <div className="page tweets">
      <Head>
        <title>Birdsong</title>
      </Head>

      {topbar}

      <Tweet href="https://twitter.com/LandsharkRides/status/1298099587895484423">
        <p>
          You should be happy when you are sleeping in your bed at 5 AM. The
          world outside is more beautiful than ever, because it is empty. You
          are enriching existence with your absence, we all are.
        </p>
      </Tweet>

      {/* <Tweet href="https://twitter.com/FORTUNATECULT/status/1271983026784948227">
        <p>It is better to be rich or to be poor.</p>
        <p>
          The death of the soul comes in the middle classes. Where dreams go to die. The middle class is a place of
          angst and lonlieness. It is a state of consumption with no time and no culture. The middle class is an
          abomination of modernity.
        </p>
        <p>The middle class is the slave class.</p>
      </Tweet> */}

      <Tweet href="https://twitter.com/Hot_Domme/status/1320652225551585280">
        <p>
          Maslow's hierarchy is better conceived as an hourglass; once the
          pyramidion is reached, one can begin ascetic sacrifice... safety,
          food+shelter, prestige, intimacy; the shaman or the wild woodsman has
          none of these, and yet this is precisely the source of his
          self-actualisation...
        </p>
      </Tweet>

      <Tweet href="https://twitter.com/Hot_Domme/status/1320369878272884737">
        <p>
          Much better to know your own body than to know 'the human body' as
          such. Every cell is engraved with the same personalities + memories
          contained in ur blood—every body has a specific language to
          communicate its needs. Ask ur parents the secrets they learned about
          their bodies...
        </p>
      </Tweet>

      <Tweet>
        <p>If loving her is cringe, I don't want to be based...</p>
      </Tweet>
    </div>
  </>
);

export default Tweets;
