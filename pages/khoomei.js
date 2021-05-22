import Head from "next/head";
import { useEffect, useState } from "react";
import { BackHome } from "../components/BackButtons.js";

const khoomei = "/vid/khoomei.mp4";

const Box = ({ children, innerClassName }) => (
  <div className="box1">
    <div className="box2">
      <div className="box3">
        <div className="box4">
          <div className="box5">
            <div
              className={"box6" + (innerClassName ? ` ${innerClassName}` : "")}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Khoomei = ({ audio }) => {
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
    return document.getElementById("audioKhoomei");
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
    <div className="page khoomei">
      <Head>
        <title>Khoomei</title>
      </Head>
      <audio id="audioKhoomei" src="/audio/Ak_Korumnyng_Tynyzhy.mp3" autoPlay>
        Your browser can not play audio.
      </audio>
      <img src="/img/steppe.jpg" className="fullSizeBackground" />
      <BackHome />
      <div className="wrapper">
        <Box>
          <h1>The Traditional Art of Khoomei</h1>
          <div className="playpause">
            <a onClick={play}>Play music</a>&nbsp; - &nbsp;
            <a onClick={pause}>Pause music</a>
          </div>
        </Box>

        <Box innerClassName="poembox">
          <div className="poembox-inner">
            <p className="poem">
              The wind's whistle <br />
              Rises and falls <br />
              Forever untamed <br />
              <br />
              The herd's thunder <br />
              Growls and rolls <br />
              Forever the same <br />
              <br />
              Ride, my horses—Ride! <br />
              Fly, my sadness—Fly! <br />
              Across and beyond <br />
              The plains of Altai
            </p>
          </div>
        </Box>

        <Box innerClassName="videobox">
          <video width="100%" controls>
            <source src={khoomei} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        <Box>
          <h2>Music recommendations</h2>
          <p>
            Here are some of my favorite groups and some song recommendations.
            These aren't just from Mongolia but also the Tuva/Altai regions of
            modern-day Russia.
          </p>
          <ul>
            <li>
              <b>Altai Kai</b> - [
              <a href="https://www.youtube.com/watch?v=2lnxs_DMUDk">
                Kai Kozhong
              </a>
              {", "}
              <a href="https://www.youtube.com/watch?v=-WEJxqS91aA">Kara-suu</a>
              ]
            </li>
            <li>
              <b>Huun-Huur-Tu</b> - [
              <a href="https://www.youtube.com/watch?v=i0djHJBAP3U">Live</a>]
            </li>
            <li>
              <b>Khusugtun</b> - [
              <a href="https://www.youtube.com/watch?v=nxpzIRWcElc">Ballads</a>]
            </li>
            <li>
              <b>Altyn Tuu</b> - [
              <a href="https://www.youtube.com/watch?v=WgD57y4Tkng">
                Word of Batyr
              </a>
              {", "}
              <a href="https://www.youtube.com/watch?v=ZLeMpbRUMso">Kara-suu</a>
              ]
            </li>
            <li>
              <b>Shu-de</b> - [
              <a href="https://www.youtube.com/watch?v=7djjlG8VhKQ">
                Voices from the Distant Steppe
              </a>
              ]
            </li>
            <li>
              <b>Yat-Kha</b> - [
              <a href="https://www.youtube.com/watch?v=GpQkYxING4I">
                Yenisei Punk
              </a>
              ]
            </li>
          </ul>
        </Box>

        <Box>
          <h2>Learning</h2>
          <p>
            It's possible to learn throat singing, or overtone singing. The
            fundamental idea is that you produce a root note with your voice and
            then position your tongue, lips and jaw in such a way that the the
            overtones naturally occurring in your voice are brought forth.
            Slightly varying these positionings then lets you control exacly
            which overtone becomes audibly and which ones do not. For some
            styles of throat singing, different kinds of throat tension will
            also be applied.{" "}
            <a href="https://en.wikipedia.org/wiki/Tuvan_throat_singing">
              Here
            </a>{" "}
            is a good overview of the theory and different styles.
          </p>
          <p>
            After learning the fundamentals it becomes a matter of practicing
            and listening, both to yourself and others; I find that imitation is
            the best teacher in this regard. I won't attempt to teach you here
            how to do it, as I believe the resources below do it better than I
            could. Good luck, my friend!
          </p>
          <ul>
            <li>
              <a href="https://www.youtube.com/user/Glenfuch/videos">
                youtube.com/user/Glenfuch/videos
              </a>{" "}
              - see his <i>How to throat sing</i> series
            </li>
            <li>
              <a href="http://tarbagan.net/nodo/how/how.html">
                tarbagan.net/nodo/how/how.html
              </a>
            </li>
            <li>
              <a href="http://www.fotuva.org/music/emory.html">
                fotuva.org/music/emory.html
              </a>
            </li>
            <li>
              <a href="http://sed.free.fr/khoomei/sygyt.html">
                sed.free.fr/khoomei/sygyt.html
              </a>
            </li>
            <li>
              <a href="https://academo.org/articles/spectrogram/">
                academo.org/articles/spectrogram/
              </a>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Khoomei;
