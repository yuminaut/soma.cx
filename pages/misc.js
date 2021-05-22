import Head from "next/head";
import ReactMarkdown from "react-markdown";

const Misc = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Misc</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <ReactMarkdown children={md} />
    </div>
  </div>
);

const md = `
# Misc

Unorganized content.

- Hair care
- Skin care
- Physiognomy
- Breast Enlargement
- Drink warm water, not cold
- Gut-brain axis & gut microbiota


## Hair care

- Egg shampoo as needed
- Magnesium chloride to improve blood flow and remove calcium buildup
- Prevent hygral fatigue
  - https://organigrowhairco.com/blogs/news/hygral-fatigue-what-it-is-and-how-to-prevent-it
  - Use coconut oil to prevent water entering hair
  - Wash hair less often


## Skin care


## Physiognomy

(TODO: All these links should be archived!)

- https://en.wikipedia.org/wiki/Physiognomonics
- https://archive.org/details/worksaristotle00arisuoft/page/n51/mode/2up
- https://www.light.org/Instantaneous-Character-Reading-SL121.cfm
- https://www.light.org/Instantaneous-Reading-from-Profile-SL123.cfm
- https://twitter.com/S1nge_/status/1366768121579786245

## Breast Enlargement

- [Breast Enlargement Botanicals (PDF)](/pdf/Breast-Enlargement-Botanicals.pdf)
- [More herbs](https://www.breastnexus.com/showthread.php?tid=21602) /
  [Archive 1st page](https://archive.is/FLMRf)
  - [Backup](/pdf/breast-enlargement-herbs.txt)
- [breast.is](https://breast.is/)
- [http://busty.jugem.jp/](http://busty.jugem.jp/)


## Drink warm water, not cold

Cold water (especially with ice) restricts blood vessels lining the gut,
increases mucus production, and neutralizes digestive enzymes. Warm or lukewarm
water is better for digestion and nutrient absorption.

This is supported by tradition, for instance the Chinese and the Ayurvedic.

There's also some research on it:

- [_Effects of drinking hot water, cold water, and chicken soup on nasal mucus velocity and nasal airflow resistance_](https://pubmed.ncbi.nlm.nih.gov/359266/)
- [_Effects of hot tea, coffee and water ingestion on physiological responses and mood: the role of caffeine, water and beverage type_](https://link.springer.com/article/10.1007%2Fs002130050438?LI=true)
- [_Water ingestion increases sympathetic vasoconstrictor discharge in normal human subjects_](https://pubmed.ncbi.nlm.nih.gov/11222121/)
- [_Response of esophagus to high and low temperatures in patients with achalasia_](https://pubmed.ncbi.nlm.nih.gov/23105999/)

Try to have warm with your food instead and see for yourself.


## Gut-brain axis & gut microbiota

Rather than me poorly trying to explain this, you'd do well to research this
on your own. I will just point you in the right direction.

There's considerable research indicating that there is a bidirectional
communication going on between your gut and your brain—this is termed the
_gut-brain axis_. In a healthy individual the gut and the brain work together
smoothly, but in an individual with gut dysbiosis this communication is
disrupted and all sorts of chronic diseases appear, including irritable bowel
syndrome, depression, autism spectrum disorder, irritable bowel syndrome,
Alzheimer's disease, other neuropsychiatric disorders, and chronic inflammation
in general.

Inside your gut, your intestines, live trillions of bacteria (microbiota).
Some of these have a parasitic relationship with you—hijacking your system for
their own gain at your expense—while others function symbiotically.

What you want to do is to stop introducting and feeding parasitic microbiota,
and start introducting and feeding symbiotic microbiota. This can be done in
a number of ways but the simplest one is via diet. In order to starve the former
I suggest following a diet similar to the one I have outlined on my nutrition
page, and in order to introduce the latter I suggest regularly eating probiotic
food, such as sauerkraut or kefir
([more here](https://en.wikipedia.org/wiki/List_of_fermented_foods)). Just
beware of _pasteurized_ fermented foods; pasteurization kills most bacteria!
But assert the quality of the food and its preparation, don't get sick.

### Research

Do your own research and draw your own conclusions. Visit
[PubMed](https://pubmed.ncbi.nlm.nih.gov/) or
[PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/) (the latter has full text
articles) and search for e.g. "gut microbiota", "gut-brain axis", or any of
those two plus your subject of interest e.g. "gut microbiota depression".

I'll link a few interesting articles here below.

**Reviews, ordered by most recent first**

- [Gut Microbiome: Profound Implications for Diet and Disease (2019 Jul 16)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6682904/)
- [Gut Microbiota and Their Neuroinflammatory Implications in Alzheimer’s Disease (2018 Nov 14)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6266223/)
- [Neurotransmitter modulation by the gut microbiota (2018 Aug 15)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6005194/)
- [The gut microbiota and healthy aging (2018 Jul 19)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6191326/)
- [The role of the microbiome for human health: from basic science to clinical applications (2018 May 10)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5962619/)
- [Human Gut Microbiota and Gastrointestinal Cancer (2018 Feb 21)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6000254/)
- [Influence of gut microbiota on neuropsychiatric disorders (2017 Aug 14)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5558112/)
- [Gut-Brain Axis and Behavior (2017 Mar 27)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6103442/)
- [Gut Microbiota-brain Axis (2016 Oct 5)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5040025/)
- [Gut microbiota in autism and mood disorders (2016 Jan 7)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4698498/)
- [Gut/brain axis and the microbiota (2015 Mar 2)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4362231/)

**Randomized control trials**

- [Intermittent fasting confers protection in CNS autoimmunity by altering the gut microbiota (2018 Jun 5)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6460288/)
- And much more... filter your search by "Randomized control trial" in PubMed.
`;

export default Misc;
