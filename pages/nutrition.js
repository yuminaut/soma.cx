import Head from "next/head";
import { SLink } from "../components/Links.js";

const Nutrition = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Nutrition</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <h1 id="nutrition">Nutrition</h1>

      {/* <h2 id="introduction">Introduction</h2> */}
      <p>
        Following the guidelines in this document should fix most major
        nutritional deficiencies and decrease inflammation, but do your own
        research and adjust to your own needs.
      </p>
      <p>
        Keep in mind that the source of your food matters; happy animals and
        happy farmers produce better food.
      </p>
      {/* <p>
        Use a service like{" "}
        <a href="https://cronometer.com" rel="noreferrer" target="_blank">
          cronometer.com
        </a>{" "}
        to figure out potential deficiencies.
      </p> */}

      <p>
        I recommend and refer to Ray Peat's writings and interviews on most
        things related to health.
      </p>
      <ul>
        <li>
          <a href="http://raypeat.com" rel="noreferrer" target="_blank">
            Ray Peat's website
          </a>
        </li>
        <li>
          <a
            href="https://wiki.chadnet.org/ray-peat"
            rel="noreferrer"
            target="_blank"
          >
            ChadNet
          </a>{" "}
          (backup and collection of Ray Peat resources)
        </li>
        <li>
          <a
            href="https://www.functionalps.com/blog/"
            rel="noreferrer"
            target="_blank"
          >
            Functional Performance Systems
          </a>
        </li>
        <li>
          <a
            href="https://www.toxinless.com/peat/"
            rel="noreferrer"
            target="_blank"
          >
            Toxinless
          </a>
        </li>
      </ul>
      <p>
        Avoid fad diets like keto,{" "}
        <a
          href="https://www.functionalps.com/blog/2010/12/12/low-carb-diet-death-to-metabolism/"
          rel="noreferrer"
          target="_blank"
        >
          low carb
        </a>
        , carnivore, primal, multi-day fasting, intermittent fasting,
        one-meal-a-day, etc.
      </p>

      <h2 id="what-to-eat">What to eat</h2>
      <ul>
        <li>
          <b>Fruit, fruit juices</b> - sweet, ripe, preferable without pulp
        </li>
        <li>
          <b>Milk</b> - preferably unpasteurized, local
        </li>
        <li>
          <b>Cheese</b> - preferably made from animal rennet
        </li>
        <li>
          <b>Liver, organ food</b>
        </li>
        <li>
          <b>Bone broth, soups</b>
        </li>
        <li>
          <b>Meat</b> - grass-fed red meats, game meat; limit somewhat
        </li>
        <li>
          <b>Seafood</b> - fish, shellfish, bivalves (like oysters)
        </li>
        <li>
          <b>Eggs</b>
          <ul>
            <li>If cooked, keep the yolk intact and don't overcook it.</li>
            <li>
              <a
                href="https://www.mdpi.com/2072-6643/11/3/684/htm"
                rel="noreferrer"
                target="_blank"
              >
                Raw
              </a>{" "}
              has some benefits.
            </li>
            <li>Choose eggs from hens that mostly peck outside.</li>
          </ul>
        </li>

        <li>
          <b>Raw honey/honeycomb</b> - antibacterial, antifungal, antioxidant
        </li>
        <li>
          <b>Seaweed soup</b> - mainly for iodine
        </li>
        <li>
          <b>Lacto-fermented foods</b>
          <ul>
            <li>Traditional in many cultures.</li>
            <li>Can assist in displacing "bad" gut bacteria.</li>
            <li>
              Examples are <SLink href="/recipes#sauerkraut">sauerkraut</SLink>,{" "}
              <SLink href="/recipes#kvass">beet kvass</SLink>, kefir and kimchi.
            </li>
          </ul>
        </li>
        <li>
          <b>Butter, ghee, tallow</b> - for cooking
        </li>
        <li>
          <b>Extra virgin coconut oil</b> - for cooking
        </li>
        <li>
          <b>Extra virgin olive oil</b> - for cooking, but heat carefully
        </li>
      </ul>
      <h3 id="miscellaneous">Miscellaneous</h3>
      <ul>
        <li>
          <b>White sugar</b> (
          <a
            href="http://raypeat.com/articles/articles/glycemia.shtml"
            rel="noreferrer"
            target="_blank"
          >
            yes, really
          </a>
          )
        </li>
        <li>
          <b>Raw apple cider vinegar (with &quot;mother&quot;)</b> -
          antioxidant, antimicrobial
        </li>
        <li>
          <b>Lemon</b> - immunity
        </li>
        <li>
          <b>Ginger</b> - immunity
        </li>
        <li>
          <b>Cayenne</b> - I heard this is good, but do your own research
        </li>
        <li>
          <b>Turmeric</b> - same as above
        </li>
        <li>
          <b>
            Garlic,{" "}
            <a
              href="https://skillet.lifehacker.com/use-papery-garlic-skins-to-give-broth-big-flavor-1797726954"
              rel="noreferrer"
              target="_blank"
            >
              garlic skin broth
            </a>
          </b>{" "}
          - immunity, gut health
        </li>
        <li>
          <b>Onion</b> - with food
        </li>
      </ul>

      <h2 id="what-to-avoid">What to avoid</h2>
      <ul>
        <li>
          PUFA (polyunsaturated fatty acids) - see{" "}
          <a
            href="https://raypeat.com/articles/articles/unsaturated-oils.shtml"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
          {" and "}
          <a
            href="https://raypeat.com/articles/articles/unsaturatedfats.shtml"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
        </li>
        <li>Industrialized vegetable/seed oils</li>
        <li>Grains (gluten/bread, legumes/beans, nuts included)</li>
        <li>Corn and derivatives such as HFCS</li>
        <li>Soy</li>
        <li>Artificial sweeteners</li>
        <li>Low quality animals i.e. "factory farmed" animals</li>
        <li>
          Vegetables high in{" "}
          <a
            href="https://sallyknorton.com/oxalate-science/oxalate-basics/"
            rel="noreferrer"
            target="_blank"
          >
            oxalate
          </a>
        </li>
        <li>Flouride</li>
        <li>Alcohol</li>
        <li>Smoking</li>
      </ul>

      <h2 id="supplements">Supplements</h2>
      <p>
        A good diet should provide most minerals, vitamins, amino acids etc.
        that you need. However some some supplementation might be beneficial due
        to soil depletion, laziness and other factors.
      </p>
      <p>
        Please see <SLink href="/supplements">this page</SLink> for my notes on
        various supplements.
      </p>
    </div>
  </div>
);

export default Nutrition;
