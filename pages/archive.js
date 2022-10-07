import Head from "next/head";

const girl = (
  <img
    src="/img/smoke-cool.png"
    style={{
      width: "320px",
      height: "320px",
      maxWidth: "100%",
      display: "block",
      margin: "0 auto",
    }}
  />
);

const Archive = ({ topbar }) => {
  return (
    <div className="page archive">
      <Head>
        <title>Archive</title>
      </Head>
      {topbar}

      <div className="wrapper">
        <h1>ARCHIVE</h1>

        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          Various authors.
        </p>

        {girl}

        <br />
        {/* <h2>aphorisms</h2> */}
        <div className="short">
          {items.map((item, idx) => (
            <>
              {idx > 0 ? <div className="separator">~</div> : ""}
              <div key={idx} className="archive-item">
                {/* <div className="date">{item.date}</div> */}
                <div className="text">{item.text}</div>
              </div>
            </>
          ))}
        </div>

        <p className="separator">~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ </p>

        {/* 13-08-2020 */}
        <p>Poem by a friend of mine.</p>
        <p style={{ textIndent: 0, fontStyle: "italic" }}>
          In past ages
          <br />
          I'd have burnt villages
          <br />
          Slaughtered men
          <br />
          And collected from the ashes
          <br />
          The flowers that bloom
          <br />
          Just for You
        </p>

        <p className="separator">~</p>

        {/* 16-08-2020 */}
        <p>
          Picture this: we're walking together at sunset on the Beach, me, a
          powerful man who never skips chest day and you a qt crippled autistic
          redhead. You trip but as you fall I reach out and catch you with one
          hand.
        </p>
        <p>
          You don't hit the ground but your breath still leaves you as you look
          up, eyes locked onto my powerful bosom. "Are you ok?" I ask, sweat
          glistening off my impeccable pectorals. You barely manage to stutter
          out a meek "yes" for you are very autistic and I am bountifully
          handsome.
        </p>

        {/* <p className="separator">~</p> */}

        {/* 28-11-2020 */}
        {/* <p>
          I sometimes get in my car and scream as loud and hard as I can to
          awaken Gotho-Scythian blood memory while blasting cheesy 80s J-pop in
          the background and driving way too fast through the fog.
        </p> */}

        <p className="separator">~</p>

        {/* 12-12-2020 */}
        <p style={{ textIndent: 0, fontStyle: "italic" }}>
          Sing across, my joy,
          <br />
          The rivers of fear
          <br />
          And spaces between friends
        </p>

        {/* <p className="separator">~</p> */}

        {/* 04-01-2021 */}
        {/* <p>
          I believe that when u are fat, everything u say/think is underlaid by
          the fact that u are fat— any advice given or idea raised comes with
          the asterisk of obesity, signalling that u hate beauty and have made
          ur body a monument to ugliness, and are dying as a consequence.
        </p> */}

        <p className="separator">~</p>

        {/* 04-01-2021 */}
        <p>
          Ugliness – a symptom of death fear along with the urge to optimize
          away from it; consider modern safe family cars, extensive traffic
          rules, glossy sportswear T-shirts, straight seated posture, urban grid
          design, cigarette warning labels, communal housing, modern warfare.
        </p>
        <p>
          We don't even need to go as far as to proclaim that ugliness is fear
          of physical death; it is enough to say that it stems from the fear of
          the potential of any sort of harm: social, physical, mental.
        </p>
        <p>
          Minimalism – in many cases it stems from the fear of aesthetic harm,
          combatted through avoidance of potentially offensive visual elements,
          leading to something soulless and ultimately ugly. It should ideally
          be a way to enhance the already beautiful, and be applied only to a
          moderate extent, not as an ideology encompassing everything aesthetic
          and metaphysical.
        </p>
        <p>
          Fear of social exclusion leading to rejection of one's own unique
          features; this affects women much more than men because social
          coherence matters more to them, and is manifested in the application
          of "foundation as a clean slate" makeup.
        </p>

        <p className="separator">~</p>
        {/* 06-01-2021 */}
        <p>
          Being in the gym for too long makes me sick. The smell of McPUFA™
          Sweat, industrial chemicals from unceasing disinfection paranoia,
          unveiled lardmasses and bearded IPA drinking balding men, a fat
          mouthbreathing snapback wearing Mexican guy dousing himself in
          disinfectant as if it were Axe body spray (only to go home and chomp
          down on fifty Dorito burritos), along with the treadmill noise, I
          can't stand it for more than 45m.
        </p>

        <p className="separator">~</p>

        {/* 07-01-2021 */}
        <p>
          Slavoj Žižek beautifully said "if one is to remain faithful to one's
          love, one should not elevate it into the direct focus of one's love,
          one should renounce its centrality". This is true; faith to one's love
          can only be proven when it exists in contrast to the rest of the
          world.
        </p>
        <p>
          Only a corrupt God, a narcissistic woman or an evil ideology demands
          absolute devotion, absolute centrality, demands to be the world
          itself. And what becomes of the lover? Reduced to a slavelike state,
          his total devotion turns meaningless by the very fact that it is
          total.
        </p>
        <p>
          A woman wishes to be a conflict; loved <i>in</i> the world, not{" "}
          <i>as</i> the world.
        </p>

        <p className="separator">~</p>

        {/* 09-01-2021 */}
        <p>
          Concepts to research: DIY networking, wireless ad hoc network. I
          envision bands of Aryan pirates roving around in chariots (i.e. vans)
          participating as nodes in a P2P network, anon location but verifiable
          identity; your van holds the data you care about spreading. Think
          about it.
        </p>
        <p>
          Your van is your "website", and participants in the network
          automatically and periodically save a timestamped copy of your website
          when inside your proximity radius using a distributed hash table
          protocol (Kademlia, I2P) – extreme persistence and robustness. Think
          about it.
        </p>
        <p>
          Safe option: discreet white van, goes by unnoticed. Fun option: paint
          swastikas on the van and mount turrets on it. Give it huge monster
          truck rear wheels to take on any terrain. Install extremely powerful
          speakers. Mad Max style.
        </p>

        <p className="separator">~</p>

        {/* 24-01-2021 */}
        <p>
          Every time you save a photo of an e-girl and add it to her dedicated
          folder you lay a flower upon her digital shrine, decorating her cyber
          altar and as such effectively encoding her in binary code as a deity,
          a cyber goddess; every visit is a prayer, a beautiful act of worship.
        </p>

        <p className="separator">~</p>

        {/* 24-01-2021 */}
        <p>
          Those men who buy guides to be alpha chad are memeing themselves into
          a beta egregore; first their ego has accepted the identity of beta,
          then they seem approval of a self proclaimed alpha male, pleasing an
          online personality, orbiting him and mimicking him, just like the beta
          does to the alpha.
        </p>

        <p className="separator">~</p>

        {/* 09-02-2021 */}
        <p>
          Surprised to find "Will to Slavery" an uncoined term as it perfectly
          denotes the widely occurring drive to wilful surrender to authority of
          agency—the opposite of Nietzsche's "Will to Power".
        </p>

        <p className="separator">~</p>

        {/* 09-02-2021 */}
        <p>
          Some people are able to serve as nothing but a pool of yin to eject
          your yang into, they have nothing to sharpen yourself against, their
          entire purpose is simply to act as a polar opposite to conduct your
          discharge of masculine energy and memetic power.
        </p>

        {/* <p className="separator">~</p> */}

        {/* 09-02-2021 */}
        {/* <p>
          There are impressions that completely bypass your mind and speak via
          your heart directly to your soul – among these are Bach's music, the
          sunset, and the touch of a beautiful woman; why these impressions
          touch us is a mystery, but it is in that very mystery we can find
          solace.
        </p> */}

        {/* <p className="separator">~</p> */}

        {/* 12-02-2021 */}
        {/* <p>
          The assumption is that social media came to as an intentional creation
          based on the vision of engineers, but consider the inverse—the
          engineers serve as no more than a host of social media as an
          unintentionally brought to life parasite feeding on your dopamine. Do
          you understand?
        </p> */}

        <p className="separator">~</p>

        {/* 25-02-2021 */}
        <p>
          I join my morning zoom classes clad in nothing but shorts and a silver
          necklace, window open sunbeams shining off of my impeccable chest,
          cigarette hanging from my mouth.
        </p>
        <p>
          Every 10 minutes I get up to do a set of chinups on my doorway bar
          which is visible in the background. On my bed a heap of clothing which
          I haven't put in the closet because house chores are for women.
        </p>

        <p className="separator">~</p>

        {/* 03-02-2021 */}
        <p>
          Nothing wrong with making outrageous but intuitively beautiful claims
          + attempting to understand them post hoc— Such is the recipe for any
          knowledge worth knowing. Reason’s proper role is as a means of
          explaining beauty, not arriving at it. Beauty + Truth are coterminous,
          anyway.
        </p>

        <p className="separator">~</p>

        {/* 16-03-2021 */}
        {/* <p>
          Scientist attempts to justify existence of life (or form of order) in
          spite of thermodynamic principles by stating that it increased overall
          entropy, but how did that ordered system appear in the first place?
          How was that energy hump crossed?
        </p>
        <p>
          If you expand the second law of thermodynamics to its logical
          conclusion then nothing should exist at all, as being itself is the
          simplest form of order.
        </p>
        <p>This “law” is just another emergent property of being.</p>

        <p className="separator">~</p> */}

        {/* 18-03-2021 */}
        <p>
          No babe, I'm not a conspiracy theorist it's called a manifesting
          board. No, Hitler escaping to Agartha through a hole in Antarctica is
          NOT a "conspiracy theory" its real here look at that old Nazi map. Yes
          that is a picture of you hanging on the manifestation board.
        </p>

        <p className="separator">~</p>

        {/* 11-04-2021 */}
        <p>
          The contrived scam of dating before marriage aligns with the emerging
          ubiquity of spiritless apathy and non-investment in precisely the
          things which redeem life and furnish it with purpose. Rent your car,
          your house, your lover— and cancel anytime.
        </p>
        <p>
          Ppl are made fearful of committing to things that define + tether them
          forever— but things undefined are nothing; and things untethered float
          away. They die with nothing to show, hoarding potential, never
          transmuted into actuality— they discover too late, it expires upon
          death.
        </p>
        <p>
          dating phenomena is both a function and a cause of material
          instability, and is based on the obvious lie that marriage is somehow
          fiscally perilous. Why would it be imprudent to form a pact of
          financial collaboration with a trusted associate, aimed at building a
          shared legacy?
        </p>
        <p>
          To redeem a tragedy one renders it in myth; but the media marketing
          arm of the dating-industrial complex hasnt even the confidence in its
          product to pretend that rootless fornication can ever amount to a
          satisfying conclusion. Modern romance stories are about victory over
          dating.
        </p>
        <p>
          Make no mistake— marriage is the payoff; dating is ritual
          disappointment. Women in particularl arrive at their spouses
          physically redlined and emotionally bedraggled. Always, the
          invocations of freedom… but who wants freedom from love?
        </p>
      </div>
    </div>
  );
};

const items = [
  {
    date: "05-01-2021",
    text: `Nothing worth doing is as easy it as may seem at first.`,
  },
  // {
  //   date: "02-11-2020",
  //   text: `"Follow your dreams" is meant to be taken literally; dreams act as guides and warnings.`,
  // },
  {
    date: "01-11-2020",
    text: `White lies are still lies, and lying makes one ugly.`,
  },
  {
    date: "19-10-2020",
    text: `Beware of mistaking evil and stupidity for one another.`,
  },
  {
    date: "15-10-2020",
    text: `Utilitarianism – a misunderstanding of the meaning of suffering.`,
  },
  // {
  //   date: "13-10-2020",
  //   text: `Relaxation is only relaxation if it's a goal in itself. If relaxation is a means, it's not relaxation.`,
  // },
  {
    date: "05-10-2020",
    text: `Thinking much but walking little eventually produces ugly thoughts.`,
  },
  {
    date: "05-10-2020",
    text: `Joy and kindness makes beautiful.`,
  },
  {
    date: "03-10-2020",
    text: `Compassion has to be earned.`,
  },
  {
    date: "03-10-2020",
    text: `To hold a grudge is to be enslaved.`,
  },
  // {
  //   date: "02-10-2020",
  //   text: `The most powerful mode of communication is via the aphorism that does not seek to justify itself.`,
  // },
  {
    date: "17-09-2020",
    text: `Ask not for a smaller spirit, but for a larger life.`,
  },
  {
    date: "17-09-2020",
    text: `Are you Good, or are you just weak?`,
  },
  {
    date: "01-09-2020",
    text: `Always be kind to those close to you.`,
  },
];

export default Archive;
