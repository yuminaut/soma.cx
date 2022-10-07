import Head from "next/head";
import { SLink } from "../../components/Links";

const Sunscreen = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Sunscreen</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="sunscreen">Sunscreen</h1>
        <p>
          Commercial sunscreen contains a significant amount of endocrine
          disrupting chemicals that get absorbed by your skin, and end up{" "}
          <a href="https://www.pharmacist.com/article/sunscreen-chemicals-accumulate-body-high-levels">
            accumulating in your body at high levels
          </a>
          , plus most sunscreens{" "}
          <a href="https://www.mitohealth.ca/most-sunscreens-are-terrible/">
            have not been toxologically tested
          </a>
          .
        </p>
        <p>
          But we don't even need to turn to science in order to reject
          sunscreen. Commercial sunscreen has been around for less than 100
          years which isn't nearly enough time to learn about the long term
          effects.
        </p>
        <p>
          <b>But what then instead?</b>
        </p>
        <ul>
          <li>Build up tolerance.</li>
          <li>Drink a lot of water.</li>
          <li>
            Wear a hat and protective clothing (such as light loose fitting
            shirt).
          </li>
          <li>
            Don't expose yourself for long periods of time; take frequent
            "breaks" from the sun.
          </li>
          <li>
            Avoid everything under the{" "}
            <SLink href="/nutrition#what-to-avoid">What to avoid</SLink> section
            on the Nutrition page, especially polyunsatured fatty acids.
          </li>
          <li>
            Use a natural sunscreen such as zinc oxide paste or coconut oil.
          </li>
        </ul>
        <p>
          <b>Research</b>
        </p>
        <ul>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/25885102/">
              <i>Sun lotion chemicals as endocrine disruptors</i> (2015 Jan 30)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3443608/">
              <i>
                Endocrine-disrupting chemicals: associated disorders and
                mechanisms of action
              </i>{" "}
              (2012 Sep 6)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/22398195/">
              <i>
                Endocrine disruptors and asthma-associated chemicals in consumer
                products
              </i>{" "}
              (2012 Mar 8)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/28959646/">
              <i>
                Neurotoxic effect of active ingredients in sunscreen products, a
                contemporary review{" "}
              </i>{" "}
              (2017 May 27)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sunscreen;
