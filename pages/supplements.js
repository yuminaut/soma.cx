import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { ALink, SLink } from "../components/Links";

const Supplements = ({ topbar }) => (
  <div className="page supplements">
    <Head>
      <title>Supplements</title>
    </Head>
    <img
      src="/img/bg/anatomy1.jpeg"
      className="fullSizeBackground"
      style={{ opacity: 0.2 }}
    />
    {topbar}
    <div className="wrapper">
      <div className="box">
        <h1>Supplements</h1>
        <p>
          Notes on various supplements. Also see the{" "}
          <SLink href="/nutrition">nutrition</SLink> page.
        </p>
        <ul>
          <li>
            <ALink href="#traditional">Traditional supplements</ALink>
          </li>
          <li>
            <ALink href="#new">Synthetic supplements</ALink>
          </li>
          <li>
            <ALink href="#magnesium">✅ Magnesium</ALink>
          </li>
          <li>
            <ALink href="#vitamin-c">🚫 Vitamin C</ALink>
          </li>
          {/* <li>
            <ALink href="#vitamin-d">🚫 Vitamin D</ALink>
          </li> */}
          <li>
            <ALink href="#omega-3">🚫 Omega-3</ALink>
          </li>
          {/* <li>
            <ALink href="#zinc">🚫 Zinc</ALink>
          </li> */}
          <li>
            <ALink href="#iron">🚫 Iron</ALink>
          </li>
        </ul>
      </div>

      <div className="box">
        <a id="traditional"></a>
        <ReactMarkdown children={mdTraditional} />
      </div>

      <div className="box">
        <a id="new"></a>
        <ReactMarkdown children={mdNew} />
      </div>

      <div className="box good">
        <a id="magnesium"></a>
        <ReactMarkdown children={mdMagnesium} />
      </div>

      <div className="box bad">
        <a id="vitamin-c"></a>
        <ReactMarkdown children={mdVitaminC} />
      </div>

      {/* <div className="box bad">
        <a id="vitamin-d"></a>
        <ReactMarkdown children={mdVitaminD} />
      </div> */}

      <div className="box bad">
        <a id="omega-3"></a>
        <ReactMarkdown children={mdOmega3} />
      </div>

      {/* <div className="box bad">
        <a id="zinc"></a>
        <ReactMarkdown children={mdZinc} />
      </div> */}

      <div className="box bad">
        <a id="iron"></a>
        <ReactMarkdown children={mdIron} />
      </div>
    </div>
  </div>
);

const mdTraditional = `
## Traditional supplements

These are "supplements" that have been around for a long time and so can be
deemed safe. Note that, traditionally, there has been no real distinction
between supplements and food as medicine. A good diet should already provide
most necessary minerals, vitamins, amino acids and so on.

- Organ meats – nature's multivitamin
- Olive oil – antioxidant, anti-inflammatory
- Magnesium/potassium/sodium chloride – electrolytes
- Pine needles – vitamin A and vitamin C
- Royal jelly – B vitamins, antioxidants, anti-inflammatory
- Baking soda
`;

const mdNew = `
## Synthetic supplements

Lab-made supplements. The ones listed are probably safe, but proceed with
caution.

- Magnesium glycinate
- L-theanine – taken with magnesium glycinate in equal amounts
- Boron – 3 to 5 mg daily, or 10 mg 3 days a week
- Taurine
- Inositol
- Creatine
- Glutamine - good if you suffer from IBS
`;

// - Blue lotus ?
// - Dried fruit, like pomegranate seeds
// - Wood ash for calcium, strontium, iron, copper, zinc, magnesium
// - Garlic in small amounts for gut flora, blood pressure and immunity benefits
// - Herbs and spices from traditional medicine (e.g. European, Chinese,
//   Ayurvedic), such as:
//   - Stinging nettle tea
//   - Dandelion – liver health
//   - (Uncategorized): Mushroom powder/tincture, thyme, chamomile, valerian,
//   yarrow, elderflower, serpentina, shilajit, maca, ashwaganda, CBD (?)

const mdMagnesium = `
## Magnesium

One of the most important minerals to supplement.

- Aim for 11 mg *elemental* magnesium per kg of bodyweight
  - Magnesium glycinate pills
  - Magnesium chloride (hexahydrate), sometimes called bittern or nigari salt
    - Contains 12% elemental magnesium by weight.
    - Orally: 5-10 g dissolved in water per day (spread out).
    - Topically: dissolve 100-200 g in 0.5L spray bottle, apply on skin.
- May have a laxative effect; build up the dosage slowly
`;

const mdVitaminC = `
## Vitamin C

Avoid – see [here](https://twitter.com/Grimhood/status/1291086529163534336).
Instead, get vitamin C from fruit and liver, *not* as ascorbic acid or citric
acid.
`;

const mdVitaminD = `
## Vitamin D

Avoid – supplementation increases calcium, depletes magnesium, potassium and
retinol. Instead, get vitamin D from sunlight and seafood, eggs and cod liver
(oil).

- [The Truth About Vitamin D (PDF)](https://docs.google.com/file/d/0BweFjwhHC9atek9IV3ZzQk1Wamc/edit)    
  - If you just go outside regularly, and eat foods high in vitamin D, you get
    enough vitamin D, even over the winter.
  - Vitamin D suppresses the immune system, and oral supplementation may cause
    toxicity and other adverse health effects.
  - The amount of cholesterol in your skin is important when it comes to
    synthesizing vitamin D from the sun.
- [Vitamin D testing methodology is flawed](https://twitter.com/Grimhood/status/1301579334478565376)
- [Why Vitamin D is Not Enough (PDF)](https://www.allergyresearchgroup.com/ARGFocus_201008_VitaminsDAK_web.pdf)
- [Vitamin D, the Sunshine Supplement, has Shadowy Boney Behind It](https://archive.is/kpfV0)
- Vitamin D supplements are immunosuppressive, which is why you might feel
  better on it if you have any sort of autoimmune disease or allergy (which
  most people do) - problem is that you're allowing for the disease/allergy to
  progress uninhibited.
  [Link.](http://microbeminded.com/vitamin-d-supplements-are-immunosuppressive/)
- Vitamin D from sun is not the same as from supplementation, the latter being
  toxic. Megadosing vitamin D is madness and even "normaldosing" it is
  unnecessary.
  [Link.](https://www.ahajournals.org/doi/10.1161/CIRCRESAHA.118.311585)
- [High-dose vitamin D supplementation may harm bone health](https://www.healio.com/news/endocrinology/20190916/highdose-vitamin-d-supplementation-may-harm-bone-health)
- You need magnesium, not Vitamin D supplements.
  [Link.](https://bmcmedicine.biomedcentral.com/articles/10.1186/1741-7015-11-187)
`;

const mdOmega3 = `
## Omega-3

Avoid - capsules / fish oil easily turns rancid. Instead, get omega-3 (DHA/EPA)
from seafood and bivalves, preferably wild caught.
`;

const mdZinc = `
## Zinc

Avoid – can create copper/iron imbalance. Instead, get zinc from red meat and
bivalves.
`;

const mdIron = `
## Iron

Avoid - all supplements and plant sources of
[iron](https://twitter.com/search?q=from%3Agrimhood%20free%20iron&amp;src=typed_query)
have low bioavailability, and thus accumulates in your blood to a greater extent
than heme iron. Get your iron from meat instead. Also see the section about iron
in the [modern dangers](/threats) page.
`;

export default Supplements;
