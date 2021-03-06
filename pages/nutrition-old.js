import Head from "next/head";
import { BackHome } from "../components/BackButtons.js";
import { SLink } from "../components/Links.js";

const Nutrition = ({ topbar }) => (
  <>
    <Head>
      <title>Nutrition</title>
    </Head>
    <div className="page nutrition">
      <BackHome />
      <div className="wrapper">
        <h1 id="nutrition">Nutrition</h1>
        <ul>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#what-to-eat">What to eat</a>
            <ul>
              <li>
                <a href="#food">Food</a>
              </li>
              <li>
                <a href="#fats-oils">Fats/oils</a>
              </li>
              <li>
                <a href="#supplements">Supplements</a>
              </li>
              <li>
                <a href="#miscellaneous">Miscellaneous</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#what-to-avoid">What to avoid</a>
          </li>
          <li>
            <a href="#allergy-relief">Allergy relief</a>
            <ul>
              <li>
                <a href="#foods-that-alleviate-symptoms">Foods that alleviate symptoms</a>
              </li>
              <li>
                <a href="#foods-that-worsen-symptoms">Foods that worsen symptoms</a>
              </li>
            </ul>
          </li>
        </ul>

        <h2 id="introduction">Introduction</h2>
        <p>
          Following the guidelines in this document should fix most major nutritional deficiencies and decrease
          inflammation – but do your own research, adjust to your own needs.
        </p>
        <p>
          Keep in mind that the source of your food matters. Also, usually there are alternatives to the items below
          that are local to your country or culture. If so, try to eat that. Eat like your ancestors have done for
          thousands of years, if possible.
        </p>
        <p>
          Use a service like{" "}
          <a href="https://cronometer.com" rel="noreferrer" target="_blank">
            cronometer.com
          </a>{" "}
          to figure out potential deficiencies.
        </p>

        <h2 id="what-to-eat">What to eat</h2>

        <h3 id="food">Food</h3>
        <ul>
          <li>
            <strong>Meat</strong> - game, grass-fed red meats, poultry
          </li>
          <li>
            <strong>Seafood</strong> - fish, shellfish, bivalves
          </li>
          <li>
            <strong>Liver</strong> - limit to 300-500g per week
          </li>
          <li>
            <strong>Egg</strong> - raw yolk, cooked white
          </li>
          <li>
            <strong>Egg</strong> - fully raw,{" "}
            <a href="https://twitter.com/Grimhood/status/1285170461165277187" rel="noreferrer" target="_blank">
              do not mix with sugars
            </a>
          </li>
          <li>
            <strong>Lacto-fermented foods</strong>
            <ul>
              <li>
                Important for <a href="#TODO">gut health</a>.
              </li>
              <li>Must be unpasteurized!</li>
              <li>
                Examples are <SLink href="/recipes#sauerkraut">sauerkraut</SLink>,{" "}
                <SLink href="/recipes#kvass">beet kvass</SLink>, kefir and kimchi.
              </li>
            </ul>
          </li>
          <li>
            <strong>Milk</strong> - preferably unpasteurized, high fat, possibly even goat milk if locally available
          </li>
          <li>
            <strong>Fruit</strong>
            <ul>
              <li>
                No smoothies or juices; we are made to consume fruits <em>whole</em>.
              </li>
              <li>
                Choose fruits depending on what micronutrients you are lacking in your diet. For instance, citrus fruits
                are high in vitamin C, pineapple is high in vitamin C and manganese.
              </li>
            </ul>
          </li>
        </ul>

        <h3 id="fats-oils">Fats/oils</h3>
        <ul>
          <li>
            <strong>Butter</strong> - for cooking
          </li>
          <li>
            <strong>Tallow</strong> - for cooking
          </li>
          <li>
            <strong>Extra virgin coconut oil (EVCO)</strong> - for cooking
          </li>
          <li>
            <strong>Extra virgin olive oil (EVOO)</strong> - for cooking, but heat carefully
          </li>
          <li>
            <strong>Black seed oil</strong> - not for cooking; see below
          </li>
          <li>
            <strong>Flax seed oil</strong> - not for cooking
          </li>
        </ul>

        <h3 id="supplements">Supplements</h3>
        <p>
          Not all of these are &quot;necessary&quot; and many can be obtained in good doses from food. Magnesium is the
          most important one to supplement.
        </p>
        <p>
          Meat contains all essential amino acids. Bone broth is high in collagen and thus glycine. Glutamine will
          repair your gut lining—good if you suffer from IBS. Salt your food liberally. Eat liver and wild caught
          seafood.
        </p>
        <ul>
          <li>
            <strong>Magnesium</strong> - 11 mg elemental magnesium per kg of bodyweight
            <ul>
              <li>Magnesium glycinate pills</li>
              <li>
                Magnesium chloride (hexahydrate), sometimes called bittern or nigari salt
                <ul>
                  <li>12% elemental magnesium by weight.</li>
                  <li>Orally: 5-10 g dissolved in water per day (spread out).</li>
                  <li>Topically: dissolve 100-200 g in 0.5L spray bottle, apply on skin.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Glycine</strong> - recovery, sleep quality, vivid dreams; supplement or eat bone broth
          </li>
          <li>
            <strong>Glutamine</strong> - gut health
          </li>
          <li>
            <strong>Boron</strong> - 3-5 mg daily, or 10 mg 3 days a week
          </li>
          <li>
            <strong>Sodium chloride</strong> - rock salt, (Celtic) sea salt;{" "}
            <a
              href="https://www.theguardian.com/environment/2017/sep/08/sea-salt-around-world-contaminated-by-plastic-studies"
              rel="noreferrer"
              target="_blank"
            >
              be mindful of source
            </a>
          </li>
          <li>
            <strong>Potassium chloride</strong>
          </li>
          <li>
            <strong>Creatine</strong> - for performance,{" "}
            <a href="https://examine.com/supplements/creatine/" rel="noreferrer" target="_blank">
              well researched
            </a>
          </li>
          <li>
            <strong>Black Seed Oil</strong> -{" "}
            <a href="https://twitter.com/Grimhood/status/1254703513134751746" rel="noreferrer" target="_blank">
              research
            </a>
            ;{" "}
            <a
              href="https://www.iherb.com/pr/Heritage-Store-Black-Seed-Oil-16-fl-oz-480-ml/71956"
              rel="noreferrer"
              target="_blank"
            >
              buy on iHerb
            </a>
          </li>
        </ul>

        <h4>A note on supplements</h4>
        <p>
          There are some commonly used supplements I do <strong>NOT</strong> recommend. They are:
        </p>
        <ul>
          <li>
            <strong>Vitamin C</strong> - See{" "}
            <a href="https://twitter.com/Grimhood/status/1291086529163534336" rel="noreferrer" target="_blank">
              here
            </a>
            . Instead, get vitamin C from fruit and liver, <em>not</em> as ascorbic acid or citric acid.
          </li>
          <li>
            <strong>Vitamin D</strong> - Increases calcium, depletes magnesium, potassium and retinol. Instead, get
            vitamin D from sunlight and seafood, eggs and cod liver [oil]. More info here:{" "}
            <a href="/pdf/The-Truth-About-Vitamin-D.pdf" rel="noreferrer" target="_blank">
              The Truth about Vitamin D
            </a>
            .
          </li>
          <li>
            <strong>Iron</strong> - All supplements and plant sources of iron have low bioavailability, and thus
            accumulates in your blood to a greater extent than heme iron. Avoid{" "}
            <a
              href="https://twitter.com/search?q=from%3Agrimhood%20free%20iron&amp;src=typed_query"
              rel="noreferrer"
              target="_blank"
            >
              iron
            </a>{" "}
            supplements and get your iron from meat instead. Also see the section about iron in the{" "}
            <a href="/threats#iron-toxicity">modern dangers</a> page.
          </li>
          <li>
            <strong>Omega-3</strong> - Capsules / fish oil easily turns rancid. Instead, get omega-3 (DHA/EPA) from
            seafood and bivalves, preferably wild caught.
          </li>
          <li>
            <strong>Zinc</strong> - Can create copper/iron imbalance. Instead, get zinc from red meat and bivalves.
          </li>
        </ul>

        <h3 id="miscellaneous">Miscellaneous</h3>
        <ul>
          <li>
            <strong>Raw apple cider vinegar (with &quot;mother&quot;)</strong> - antioxidant, antimicrobial
          </li>
          <li>
            <strong>Raw honey</strong> - anti-allergenic, and more; do not heat
          </li>
          <li>
            <strong>Lemon</strong> - immunity
          </li>
          <li>
            <strong>Ginger</strong> - immunity
          </li>
          <li>
            <strong>Cayenne</strong> - I heard this is good, but do your own research
          </li>
          <li>
            <strong>Turmeric</strong> - same as above
          </li>
          <li>
            <strong>
              Garlic,{" "}
              <a
                href="https://skillet.lifehacker.com/use-papery-garlic-skins-to-give-broth-big-flavor-1797726954"
                rel="noreferrer"
                target="_blank"
              >
                garlic skin broth
              </a>
            </strong>{" "}
            - immunity
          </li>
          <li>
            <strong>Red onion</strong> - with food
          </li>
        </ul>

        <h2 id="what-to-avoid">What to avoid</h2>
        <ul>
          <li>Sucrose, and artificial sweeteners</li>
          <li>Soy</li>
          <li>Corn, and all its derivatives</li>
          <li>Grains (gluten/bread, legumes/beans, nuts included)</li>
          <li>Industrialized vegetable/seed oils</li>
          <li>Low quality commercial animals</li>
          <li>Alcohol</li>
          <li>Caffeine</li>
          <li>Smoke</li>
          <li>Flouride</li>
          <li>
            Vegetables high in{" "}
            <a href="https://sallyknorton.com/oxalate-science/oxalate-basics/" rel="noreferrer" target="_blank">
              oxalate
            </a>
          </li>
        </ul>

        <h2 id="allergy-relief">Allergy relief</h2>

        <h3 id="foods-that-alleviate-symptoms">Foods that alleviate symptoms</h3>
        <ul>
          <li>Anything that improves gut health</li>
          <li>
            <strong>Black seed oil</strong> - cold pressed, obtained without solvent extraction
          </li>
          <li>
            <strong>Flax seed oil</strong> - ditto
          </li>
          <li>
            <strong>Coconut oil</strong> - cold pressed, extra virgin
          </li>
          <li>
            <strong>Honey</strong> - preferably local
          </li>
          <li>
            <strong>Sea salt</strong> - gray, unprocessed, non-iodinated
          </li>
          <li>
            <strong>Chamomile</strong>
          </li>
        </ul>

        <h3 id="foods-that-worsen-symptoms">Foods that worsen symptoms</h3>
        <p>
          See section{" "}
          <a href="#what-to-avoid">
            <em>What to avoid</em>
          </a>{" "}
          above; additionally, avoid:
        </p>
        <ul>
          <li>
            <strong>Mushrooms</strong>
          </li>
          <li>
            <strong>Everything made with yeast (includes beer)</strong>
          </li>
          <li>
            <strong>Carbonated soda</strong>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Nutrition;
