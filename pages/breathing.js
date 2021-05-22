import Head from "next/head";
import { SLink } from "../components/Links.js";

const Breathing = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Breathing</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <h1>Breathing</h1>
      <p>
        A little bit about breathing: mouthbreathing, nosebreathing, breathing
        exercises.
      </p>
      <p>
        Here's a good article to get you started on breathing:{" "}
        <a href="https://medium.com/@BreatheLess/how-to-breathe-right-420d054e3047">
          How to Breathe Right
        </a>
        .
      </p>
      <h2>Sections</h2>
      <ul>
        <li>
          <a href="#mouthbreathing">Mouthbreathing</a>
        </li>
        <li>
          <a href="#buteyko">The Buteyko method</a>
          <ul></ul>
        </li>
        {/* <li>
          <a href="#other">Other</a>
        </li> */}
      </ul>
      <h2 id="mouthbreathing">Mouthbreathing</h2>
      <p>
        Mouthbreathing means using your mouth instead of your nose to breathe.
        The habit usually begins as an infant and it causes a myriad of health
        problems later on in life.
      </p>
      <p>
        Mouthbreathing makes you expend too much CO<sub>2</sub> which causes
        hypocapnia and tissue hypoxia. As opposed to what is commonly believed,
        CO<sub>2</sub> is much more than a waste product of respiration; in
        fact, it's vital for your body to function properly.
      </p>
      <p>
        Not solely, but to a significant degree, mouthbreathing is responsible
        for many common health problems today, including narrow airways, nasal
        congestion, runny nose, allergies, asthma, bad breath, dry cough,
        snoring, fatigue, hiccups, acid reflux, heartburn, poor palate
        development, recessive chin, Long Face Syndrome, fibromyalgia,
        pneumonia, bronchitis, and more.
      </p>
      <p>
        Another point worthy of notice is that your nose heats up the air you
        breathe and filters it. This can protect you from airborne allergenic
        particles, dust, viruses, bacteria, and so on.
      </p>
      <p>
        See also this Twitter thread on the{" "}
        <a href="https://twitter.com/BreatheLesss/status/1227514360920186880">
          effects of mouth breathing
        </a>
        , and check out{" "}
        <a href="https://mailchi.mp/5b20e36b9db7/breatheless">this page</a>.
      </p>
      <ul>
        <li>
          <b>Ages 0–12:</b> Mouth breathing affects your craniofacial structure,
          narrowing the upper airways, creating chronic obstruction.{" "}
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4295456/"
            rel="noreferrer"
            target="_blank"
          >
            Study
          </a>
          .
        </li>
        <li>
          <b>Ages 12–18:</b> The habit of mouth breathing continues. Worse
          athletic performance and more susceptible to allergies, asthma, weak
          respiratory system, and ADHD.{" "}
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4047298/">
            Study
          </a>
          .
        </li>
        <li>
          <b>Ages 18–40:</b> At this point, the individual is a chronic
          mouthbreather. Sleep apnea, lethargy, fatigue, low testosterone, and a
          myriad of other issues might arise.{" "}
          <a href="https://sleepapneanw.com/blog/pediatric-sleep-apnea/mouth-breathing-obstructive-sleep-apnea/">
            Article
          </a>
          .
        </li>
        <li>
          <b>Age 40+:</b> Breathing through your mouth expels too much precious
          CO<sub>2</sub>, responsible for the transfer of oxygen to the tissues
          (see the{" "}
          <a href="https://en.wikipedia.org/wiki/Bohr_effect">Bohr Effect</a>
          ). The result is tissue hypoxia.
        </li>
      </ul>
      <h3 id="stop-mouthbreathing">So how do you stop mouthbreathing?</h3>
      <ul>
        <li>
          Breathe through your nose using your diaphragm. Breathing should be
          quiet and effortless.
        </li>
        <li>
          Do breathing excercises to normalize your breathing pattern – see
          below.
        </li>
        <li>
          Reduce inflammation through <SLink href="/nutrition">diet</SLink>.
        </li>
        <li>
          More tips in{" "}
          <a href="https://twitter.com/BreatheLesss/status/1270328461350092801">
            this Twitter thread
          </a>
          .
        </li>
      </ul>
      <h2 id="buteyko">The Buteyko method</h2>
      <p>
        The Buteyko method is about normalizing your unconscious breathing
        pattern as a step toward optimal health. For an introduction to the
        Buteyko method, please see the links below.
      </p>
      <ul>
        <li>
          <a href="https://old.reddit.com/r/buteyko/comments/c8px11/start_here_intro_faq_of_rbuteyko/">
            /r/Buteyko Intro &amp; FAQ
          </a>
        </li>
        <li>
          <a href="/pdf/Buteyko-Breathing-Guide.pdf">Buteyko Breathing Guide</a>{" "}
          (very concise explanation)
        </li>
      </ul>
      <p>
        Another good resource is <i>The Buteyko Breathing Manual</i>, which you
        will have to look for online.
      </p>
      {/* <h3 id="exercises-from-the-buteyko-manual">Exercises from the Buteyko Manual</h3>
    <ul>
      <li>
        Exercise 1 – Reducing depth of breathing through relaxation
        <ul>
          <li>Approach 1 – Awareness of the breathing process</li>
          <li>Approach 2 – Extraordinary sense of well-being</li>
          <li>Approach 3 – Just hint at reduction of airflow</li>
        </ul>
      </li>
      <li>Exercise 2 – Holding your breath</li>
      <li>Exercise 3 – Holding your breath during physical exercise</li>
      <li>Exercise 4 – Many short breath-holds throughout the day</li>
    </ul> */}
      <h3 id="buteyko-breathing">How to do Buteyko breathing</h3>
      <ol>
        <li>
          <b>Normal Breath In Through Nose</b>.<br />
          Sit down in an upright posture and take a normal, calm breath through
          your nose. Do not take a deep breath.
        </li>
        <li>
          <b>Normal Breath Out Through Nose</b>.<br />
          Exhale as you normally would through your nose. Use the diaphragm to
          push all air out of the lungs (stomach should move, chest should not).
        </li>
        <li>
          <b>Shorter Breath In Through Nose</b>.<br />
          Now, take a shorter, more shallow and light (~1-2 seconds) inhalation
          through the nose and stop.
        </li>
        <li>
          <b>Long Breath Out Through Nose</b>.<br />
          Slowly release the breath over 5 seconds, using your diaphragm to
          empty out your lungs. Hold breath after complete exhale for 5 seconds.
        </li>
        <li>
          <b>Repeat Steps 1-4</b>.<br /> Take a normal, calm breath again
          through the nose (step 1), and repeat the entire process for several
          minutes.
        </li>
      </ol>
      <br />
      There are many Buteyko exercises; another one is described{" "}
      <a href="https://twitter.com/BreatheLesss/status/1239500252677275648">
        here
      </a>
      as well as below:
      <ul>
        <li>2-3 x 15-20 minutes per day.</li>
        <li>80%-90% Inhale - Slow Exhale (2s) - Xs pause</li>
        <li>
          Adjust X (0-20+) to maintain:
          <ul>
            <li>Light Air Hunger / Moderate Air Hunger / Strong Air Hunger</li>
            <li>Start with LAH for the first 2 weeks. Focus on relaxation.</li>
          </ul>
        </li>
        <li>This is the RF (Reduced Frequency) Buteyko method.</li>
        <li>Do it on an empty stomach</li>
        <li>Wait 1-2 hours between each session</li>
        <li>Make sure you're not overheating</li>
        <li>Exhale by relaxing the respiratory muscle (SUPER IMPORTANT!)</li>
        <li>Nosebreathing obviously</li>
        <li>You can do up to 3 hours if you wish</li>
        <li>Combine this with "BreatheLess Walking"</li>
        <li>
          The goal is to raise your Control Pause (CP).
          <ul>
            <li>
              Test before and after (wait 5 minutes after the session). If
              you've done the exercise right, your CP should've been raised by
              2-3 seconds at least (more like 6-10s).
            </li>
          </ul>
        </li>
      </ul>
      {/* <h2 id="other">Other</h2>
      <ul>
        <li>Apnea Walking</li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=q4WsOd7yB-s"
            rel="noreferrer"
            target="_blank"
          >
            Improving CO<sub>2</sub> Tolerance with Static Apnea Tables
          </a>
        </li>
        <li>
          <a
            href="https://www.trainingmask.com/clinicals/using-co2-tolerance-to-improve-exercise-capacity/"
            rel="noreferrer"
            target="_blank"
          >
            Using CO<sub>2</sub> Tolerance to Improve Exercise Capacity
          </a>
        </li>
      </ul> */}
    </div>
  </div>
);

export default Breathing;
