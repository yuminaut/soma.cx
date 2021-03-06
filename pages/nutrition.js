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
      <ul>
        <li>
          <a href="#introduction">Introduction</a>
        </li>
        <li>
          <a href="#what-to-eat">What to eat</a>
        </li>
        <li>
          <a href="#what-to-avoid">What to avoid</a>
        </li>
        <li>
          <a href="#supplements">Supplements</a>
        </li>
      </ul>

      <h2 id="introduction">Introduction</h2>
      <p>
        The aim of this document is to outline a nutritionally complete diet
        based in European tradition. If you don't have European ancestry the
        advice might not apply, so find local alternatives, eat as your
        ancestors would have.
      </p>
      <p>
        Following the guidelines in this document should fix most major
        nutritional deficiencies and decrease inflammation, but do your own
        research and adjust to your own needs.
      </p>
      <p>
        Keep in mind that the source of your food matters; happy animals and
        happy farmers produce better food.
      </p>
      <p>
        Use a service like{" "}
        <a href="https://cronometer.com" rel="noreferrer" target="_blank">
          cronometer.com
        </a>{" "}
        to figure out potential deficiencies.
      </p>

      <h2 id="what-to-eat">What to eat</h2>
      <ul>
        <li>
          <b>Meat</b> - grass-fed red meats, game meat
        </li>
        <li>
          <b>Liver, organ food</b>
        </li>
        <li>
          <b>Bone broth, soups</b>
        </li>
        <li>
          <b>Seafood</b> - fish, shellfish, bivalves (like oysters)
        </li>
        <li>
          <b>Cooked eggs</b> - keep the yolk runny
        </li>
        <li>
          <a
            href="https://www.mdpi.com/2072-6643/11/3/684/htm"
            rel="noreferrer"
            target="_blank"
          >
            <b>Raw eggs</b>
          </a>
        </li>
        <li>
          <b>Lacto-fermented foods</b>
          <ul>
            <li>
              Examples are <SLink href="/recipes#sauerkraut">sauerkraut</SLink>,{" "}
              <SLink href="/recipes#kvass">beet kvass</SLink>, kefir and kimchi.
            </li>
            <li>
              Important for <a href="#TODO">gut health</a>.
            </li>
          </ul>
        </li>
        <li>
          <b>Milk/dairy</b> - preferably unpasteurized, high fat, local
        </li>
        <li>
          <b>Raw honey/honeycomb</b> - antibacterial, antifungal, antioxidant
        </li>
        <li>
          <b>Fruit</b>
          <ul>
            <li>
              Choose fruits depending on what micronutrients your diet lacks.
              Citrus fruits are high in vitamin C, pineapple is high in vitamin
              C and manganese. Grapefruit is great.
            </li>
          </ul>
        </li>
        <li>
          <b>Seaweed soup</b> - mainly for iodine
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
          <b>Sugar</b> (
          <a href="http://raypeat.com/articles/articles/glycemia.shtml">
            yes, really
          </a>{" "}
          ??? but don't eat processed crap)
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
      <p>
        I'm no extremist when it comes to diet, but in general you'd do best to
        avoid the following due to their toxic, antinutritional and inflammatory
        properties:
      </p>
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
        <li>Soy</li>
        <li>Artificial sweeteners</li>
        <li>Corn and all derivatives, such as HFCS</li>
        <li>Grains (gluten/bread, legumes/beans, nuts included)</li>
        <li>Industrialized vegetable/seed oils</li>
        <li>Low quality commercial animals</li>
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
        <li>Alcohol (probably OK in moderation)</li>
        <li>
          Smoking (<i>possibly</i> OK in moderation)
        </li>
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
