import { BackHome } from "../components/BackButtons.js";
import { ALink, SLink } from "../components/Links.js";

const Remedies = () => (
  <>
    <div className="page remedies">
      <BackHome />
      <div className="wrapper">
        <h1 id="remedies">Remedies</h1>
        <p>
          The cause of almost all modern diseases are inflammation, oxidative
          stress and malnutrition (which includes high calorie malnutrition).
        </p>
        <p>
          It's impossible to isolate a single factor as having a single
          cause—rather it's like: "ABCDEF interact together to cause all of
          XYZÅÄÖ". To think that you can find "the silver bullet" is mostly
          masturbatory thinking. This is what Western medicine aims at, but it's
          misguided.
        </p>
        <p>
          Treating depression, anxiety, asthma, eczema, diabetes, allergy, and
          so on, must begin with removing inflammatory factors from your life
          and introducing regenerative ones instead. Start here:
        </p>
        <ul>
          <li>
            <SLink href="/nutrition">Nutrition</SLink>
          </li>
          <li>
            <SLink href="/health/gut">Gut health</SLink>
          </li>
          <li>
            <SLink href="/breathing">Breathing</SLink>
          </li>
          <li>Daily sunlight exposure or at least going for walks outside</li>
        </ul>
        <p>Some more specific pointers:</p>

        <h3 id="myopia">Myopia</h3>
        <ul>
          <li>
            <SLink href="/misc/myopia.html">"How to reverse myopia"</SLink>
          </li>
          <li>
            <a href="https://gettingstronger.org/2014/08/myopia-a-modern-yet-reversible-disease/">
              Myopia - a modern yet reversible disease
            </a>
          </li>
          <li>
            <a href="https://gettingstronger.org/2016/03/faq-for-vision-improvement-by-hormetism/">
              FAQ for vision improvement by Hormetism
            </a>
          </li>
          <li>
            Avoid <SLink href="/health/blue-light">blue light</SLink> as much as
            possible
            <ul>
              <li>
                Use a blue light filter such as{" "}
                <a href="https://justgetflux.com/">f.lux</a>
              </li>
              <li>Spend time in sunlight</li>
            </ul>
          </li>
        </ul>

        <h3 id="asthma-anxiety">Asthma</h3>
        <ul>
          <li>Nutrition and gut health</li>
          <li>Right breathing</li>
          <li>
            Check out the{" "}
            <a
              href="https://raypeatforum.com/community/tags/asthma/"
              rel="noreferrer"
              target="_blank"
            >
              asthma
            </a>{" "}
            tag on the Ray Peat Forum
          </li>
        </ul>

        <h3 id="depression-anxiety-eczema">Depression, anxiety, eczema</h3>
        <ul>
          <li>Nutrition and gut health</li>
          <li>Right breathing</li>
          <li>Daily natural light exposure</li>
          <li>Topical magnesium chloride</li>
        </ul>

        <h3 id="hair-loss-and-graying">Hair loss and graying</h3>
        <p>
          Consider that in all animals except humans, hair loss is a sign of
          disease.
        </p>
        <p>
          Being genetically predisposed to hair loss doesn't mean it has to
          happen. In fact, you can slow, stop, or even reverse hair loss by
          preventing oxidative stress, inflammation, mineral dysregulation, and
          consequent hormonal dysregulation, which are all factors driving hair
          loss.
        </p>
        <p>
          The causes of the above are multiple. Lifestyle stress is a
          significant factor and should be avoided to the best of your ability.
          However keep in mind that a diet that accounts for all micronutrients
          will improve your ability to handle stress.
        </p>
        <p>
          See the section about{" "}
          <SLink href="threats#iron-toxicity">free iron</SLink>.
        </p>
      </div>
    </div>
  </>
);

export default Remedies;
