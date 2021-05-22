import Head from "next/head";
import { useEffect, useState } from "react";
import { BackHome } from "../components/BackButtons.js";

const TheNightSong = ({ audio }) => {
  const [wasPaused, setWasPaused] = useState(true);

  useEffect(() => {
    if (audio === null) return;
    setWasPaused(audio.paused);
  }, [audio, setWasPaused]);

  useEffect(() => {
    if (audio !== null && !audio.paused) {
      audio.pause();
    }
    return () => {
      if (!wasPaused && audio !== null && audio.paused) {
        audio.play();
      }
    };
  }, [audio, wasPaused]);

  const player = () => {
    return document.getElementById("audioNightSong");
  };
  const play = () => {
    const a = player();
    if (a && a.paused) a.play();
  };
  const pause = () => {
    const a = player();
    if (a && !a.paused) a.pause();
  };

  return (
    <div className="page night">
      <Head>
        <title>The Night Song</title>
      </Head>
      <BackHome />
      <audio id="audioNightSong" src="/audio/air.mp3" autoPlay>
        Your browser can not play audio.
      </audio>
      <img
        src="/img/stars.jpg"
        className="fullSizeBackground"
        style={{ opacity: 1 }}
      />
      <div className="wrapper">
        <h1>The Night Song</h1>
        <h2>Friedrich Nietzsche</h2>
        <div style={{ textAlign: "center" }}>
          <a onClick={play}>Play music</a>&nbsp; - &nbsp;
          <a onClick={pause}>Pause music</a>
        </div>

        <p>
          Night has come; now all fountains speak more loudly. And my soul too
          is a fountain.
        </p>

        <p>
          Night has come; only now all the songs of lovers awaken. And my soul
          too is the song of a lover.
        </p>

        <p>
          Something unstilled, unstillable is within me; it wants to be voiced.
          A craving for love is within me; it speaks the language of love.
        </p>

        <p>
          Light am I; ah, that I were night! But this is my loneliness that I am
          girt with light. Ah, that I were dark and nocturnal! How I would suck
          at the breasts of light! And even you would I bless, you little
          sparkling stars and glowworms up there, and be overjoyed with your
          gifts of light.
        </p>

        <p>
          But I live in my own light; I drink back into myself the flames that
          break out of me. I do not know the happiness of those who receive; and
          I have often dreamed that even stealing must be more blessed than
          receiving. This is my poverty, that my hand never rests from giving;
          this is my envy, that I see waiting eyes and the lit-up nights of
          longing. Oh, wretchedness of all givers! Oh, darkening of my sun! Oh,
          craving to crave! Oh, ravenous hunger in satiation!
        </p>

        <p>
          They receive from me, but do I touch their souls? There is a cleft
          between giving and receiving; and the narrowest cleft is the last to
          be bridged. A hunger grows out of my beauty: I should like to hurt
          those for whom I shine; I should like to rob those to whom I give;
          thus do I hunger for malice. To withdraw my hand when the other hand
          already reaches out to it; to linger like the waterfall, which lingers
          evenwhile it plunges; thus do I hunger for malice. Such revenge my
          fullness plots: such spite wells up out of my loneliness. My happiness
          in giving died in giving; my virtue tired of itself in its overflow.
        </p>

        <p>
          The danger of those who always give is that they lose their sense of
          shame; and the heart and hand of those who always mete out becomes
          callous from always meting out. My eye no longer wells over at the
          shame of those who beg; my hand has grown too hard for the trembling
          of filled hands. Where have the tears of my eyes gone and the down of
          my heart? Oh, the loneliness of all givers! Oh, the taciturnity of all
          who shine!
        </p>

        <p>
          Many suns revolve in the void: to all that is dark they speak with
          their light--to me they are silent. Oh, this is the enmity of the
          light against what shines: merciless it moves in its orbit. Injust in
          its heart against all that shines, cold against suns--thus moves every
          sun.
        </p>

        <p>
          They suns fly like a storm in their orbits: that is their motion. They
          follow their inexorable will: that is their coldness.
        </p>

        <p>
          Oh, it is only you, you dark ones, you nocturnal ones, who create
          warmth out of that which shines. It is only you who drink milk and
          refreshment out of the udders of light.
        </p>

        <p>
          Alas, ice is all around me, my hand is burned by the icy. Alas, thirst
          is within me that languishes after your thirst.
        </p>

        <p>
          Night has come: alas, that I must be light! And thirst for the
          nocturnal! And loneliness!
        </p>

        <p>
          Night has come: now my craving breaks out of me like a well; to speak
          I crave.
        </p>

        <p>
          Night has come; now all fountains speak more loudly. Any my soul too
          is a fountain.
        </p>

        <p>
          Night has come; now all the songs of lovers awaken. And my soul too is
          the song of a lover.
        </p>

        <p>Thus sang Zarathustra.</p>

        <p className="night-source">
          <i>(Thus Spoke Zarathustra, W. Kaufmann transl.)</i>
        </p>
      </div>
    </div>
  );
};

export default TheNightSong;
