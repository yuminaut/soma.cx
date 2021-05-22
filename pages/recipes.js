import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { ALink } from "../components/Links";

const imgSauerkraut1 = "/img/sauerkraut1.jpeg";
const imgSauerkraut2 = "/img/sauerkraut2.jpg";
const imgKvass1 = "/img/beet1.jpg";
const imgKvass2 = "/img/beet2.jpeg";
const imgReuteri = "/img/reuteri.jpg";

const Recipes = ({ topbar }) => (
  <>
    <div className="page recipes">
      <Head>
        <title>Recipes</title>
      </Head>
      <img src="/img/windows.jpg" className="fullSizeBackground" />
      {topbar}
      <div className="wrapper">
        <div className="box">
          <h1>Recipes</h1>
          <p>Foods that populate your gut with powerful bacteria.</p>
          <ul>
            <li>
              <ALink href="#sauerkraut">Sauerkraut</ALink>
            </li>
            <li>
              <ALink href="#kvass">Beet kvass</ALink>
            </li>
            <li>
              <ALink href="#reuteri">Lactobacillus reuteri yogurt</ALink>
            </li>
          </ul>
        </div>

        <div className="box">
          <a id="sauerkraut"></a>
          <ReactMarkdown children={mdSauerkraut} />
          <div className="images">
            <img src={imgSauerkraut1} alt="Sauerkraut" />
            <img src={imgSauerkraut2} alt="Sauerkraut" />
          </div>
        </div>

        <div className="box">
          <a id="kvass"></a>
          <ReactMarkdown children={mdKvass} />
          <div className="images">
            <img src={imgKvass1} alt="Beet" />
            <img src={imgKvass2} alt="Beet kvass" />
          </div>
        </div>

        <div className="box">
          <a id="reuteri"></a>
          <ReactMarkdown children={mdReuteri} />
          <div className="images">
            <img src={imgReuteri} alt="Lactobacillus reuteri yogurt" />
          </div>
        </div>
      </div>
    </div>
  </>
);

const mdSauerkraut = `
## Sauerkraut

### Ingredients:

- 1 head of cabbage
- 2-4% sea salt by cabbage weight

### Instructions:

1. Prepare and clean as many glass jars as you think you'll need.
2. Chop or shred cabbage and rinse under cold water. Sprinkle with salt.
3. Knead the cabbage with clean hands for about 10 minutes until there is enough
   liquid to cover it.
4. Stuff the cabbage into a glass jar, pressing the cabbage underneath the
   liquid. If necessary, add a bit of water to completely cover the cabbage.
5. Cover the jar with a tight lid, airlock lid, or coffee filter secured with a
   rubber band.
6. Culture at room temperature (60-70°F is preferred) for at least 2 weeks,
   until desired flavor and texture is achieved. If using a tight lid, burp it
   daily to release excess pressure.
7. Once the sauerkraut is finished, put a tight lid on the jar and move to cold
   storage. The sauerkraut's flavor will continue to develop as it ages.
   `;

const mdKvass = `
## Beet kvass

### Ingredients:

- beets
- 2-4% sea salt by beet weight (about 2 tbsp for 1 kg beets)
- clean water
- glass jar
- cheesecloth or thin towel
- 2 tbsp fresh mint leaves or 1 tablespoon dried (optional)
- a few tbsp of juice from sauerkraut or similar fermented vegetable (optional)

### Instructions:

1. Wash beets and peel if they're not organic.
2. Chop the beets into cubes of about 1x1x1 cm.
3. Place the beets into the the jar, filling it about 3/4 way up.
4. Add salt, fermented juice and mint leaves.
5. Fill the jar with clean water.
6. To ferment, cover with a towel or cheesecloth and leave it on the counter or
   in a warm place at room temperature for 2 days.
7. Place in the fridge and consume as desired.
`;

const mdReuteri = `
## Lactobacillus reuteri yogurt

Follow this recipe:

- [https://www.luvele.com/blogs/recipe-blog/new-improved-l-reuteri-yogurt-method](https://www.luvele.com/blogs/recipe-blog/new-improved-l-reuteri-yogurt-method)

A few other recipes:

- [https://www.wheatbellyblog.com/2019/07/how-to-make-l-reuteri-yogurt-step-by-step/](https://www.wheatbellyblog.com/2019/07/how-to-make-l-reuteri-yogurt-step-by-step/)
- [https://organiccrumbs.com/homemade-probiotic-coconut-yogurt-l-reuteri/](https://organiccrumbs.com/homemade-probiotic-coconut-yogurt-l-reuteri/)
- [https://blog.undoctored.com/l-reuteri-yogurt/](https://blog.undoctored.com/l-reuteri-yogurt/)

Research:

- [Evaluation of Lactobacillus reuteri Strains for Pumpkin (Cucurbita pepo L.) Juice Fermentation (2014 Feb 07)](https://scialert.net/fulltext/?doi=biotech.2013.202.208)
- [Lactobacillus reuteri in health and disease (2010)](http://muep.mau.se/handle/2043/10570)
- [(MICE) Probiotic Microbes Sustain Youthful Serum Testosterone Levels and Testicular Size in Aging Mice (2014 Jan 2)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3879365/)
- [(MICE) Probiotic Bacteria Induce a ‘Glow of Health’ (2013 Jan 16)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3547054/)
- [(MICE) Beneficial Bacteria Stimulate Youthful Thyroid Gland Activity](https://www.omicsonline.org/peer-reviewed/pbeneficial-bacteria-stimulate-youthful-thyroid-gland-activityp-26919.html)
`;

export default Recipes;
