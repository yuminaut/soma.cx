import Head from "next/head";

const Copper = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Copper Toxicity</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="copper-toxicity">Copper toxicity</h1>
        <p>
          I still need to research this topic. Check out{" "}
          <a href="https://coppertoxic.com">CopperToxic.com</a>.
        </p>
        <p>
          <b>Research</b>
        </p>
        <ul>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK557456/">
              <i>Copper Toxicity</i> (2020 Apr 17)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6475603/">
              <i>
                Metal Toxicity Links to Alzheimer’s Disease and
                Neuroinflammation
              </i>{" "}
              (2019 Jan 18)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/29491267/">
              <i>
                Absorption Mechanisms of Iron, Copper, and Zinc: An Overview
              </i>{" "}
              (PDF only) (2018)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5535265/">
              <i>The Yin and Yang of Copper During Infection</i> (2016 Jan 20)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Copper;
