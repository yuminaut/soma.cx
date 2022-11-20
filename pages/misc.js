import Head from "next/head";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

const Misc = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Misc</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <ReactMarkdown
        children={md}
        allowDangerousHtml
        // remarkPlugins={[remarkGfm]}
      />
    </div>
  </div>
);

const md = `
# Misc

Unorganized content.

- [Hair care](#hair-care)
- [Skin care](#skin-care)
- [Prefer warm/hot liquids over cold liquids](#liquids)


## Hair care
<a id="hair-care" />

- Alternative to shampoo: egg
- Magnesium chloride on scalp to improve blood flow and remove calcium buildup
- Prevent hygral fatigue
  - https://organigrowhairco.com/blogs/news/hygral-fatigue-what-it-is-and-how-to-prevent-it
  - Use coconut oil to prevent water entering hair
  - Wash hair less often


## Skin care
<a id="skin-care" />

Healthy skin is mostly a matter of diet and hormonal balance. Far too complex
for me to go into right now. Avoid industrial skin care products and
polyunsaturated fatty acids.


## Prefer warm/hot liquids over cold liquids
<a id="liquids" />

Cold liquids (especially with ice) restricts blood vessels lining the gut,
increases mucus production, and neutralizes digestive enzymes. Warm or lukewarm
liquids are better for digestion and nutrient absorption.

This is supported by tradition, for instance the Chinese and the Ayurvedic.

There's also some research on it:

- [_Effects of drinking hot water, cold water, and chicken soup on nasal mucus velocity and nasal airflow resistance_](https://pubmed.ncbi.nlm.nih.gov/359266/)
- [_Effects of hot tea, coffee and water ingestion on physiological responses and mood: the role of caffeine, water and beverage type_](https://link.springer.com/article/10.1007%2Fs002130050438?LI=true)
- [_Water ingestion increases sympathetic vasoconstrictor discharge in normal human subjects_](https://pubmed.ncbi.nlm.nih.gov/11222121/)
- [_Response of esophagus to high and low temperatures in patients with achalasia_](https://pubmed.ncbi.nlm.nih.gov/23105999/)

Try to have warm liquids with your food instead and see for yourself (but don't
drink too much or you'll inhibit digestion).
`;

export default Misc;
