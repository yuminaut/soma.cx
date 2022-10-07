import Head from "next/head";
import { SLink } from "../../components/Links";

const Iron = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Iron Toxicity</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="iron-toxicity">Iron Toxicity</h1>
        <p>
          Beware of consuming non-heme iron, found in many plant foods. It has a
          low bioavailability, so most of it (from upward of 60%) gets stored in
          organs and tissue as "labile iron" acting as a catalyst for oxidative
          damage to your cells. This is what iron toxicity means.
        </p>
        <p>
          Like pretty much everyone today, you probably have accumulated lots of
          such iron over the years, especially if you are a male or a
          postmenopausal woman (if you are a young woman, the monthly blood loss
          via menstruation helps remove free labile iron, although iron toxicity
          is still a risk).
        </p>
        <p>So what can you do?</p>
        <p>
          Focus on getting more magnesium (which you need to supplement) and
          retinol (<i>preformed</i> vitamin A) and bioavailable copper, found
          mainly in animal fats and foods. Liver is a great source of retinol
          and bioavailabel copper. These work to remove excess iron from your
          body. Also see the <SLink href="/nutrition">nutrition</SLink> page.
        </p>
        <p>For more info, check out the following links.</p>
        <p>
          <b>Research</b>
        </p>
        <ul>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK459224/">
              <i>Iron Toxicity</i> (2020 Jun 30)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6801403/">
              <i>
                Programmed Cell-Death by Ferroptosis: Antioxidants as Mitigators
              </i>{" "}
              (2019 Oct 8)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6796517/">
              <i>
                New insights into the role of iron in inflammation and
                atherosclerosis
              </i>{" "}
              (2019 Aug 12)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6880687/">
              <i>
                Iron and oxidizing species in oxidative stress and Alzheimer's
                disease
              </i>{" "}
              (2019 Jun 20)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6469984/">
              <i>Pathological roles of iron in cardiovascular disease</i> (2019
              Apr 17)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5857593/">
              <i>The Aging of Iron Man</i> (2018 Mar 12)
            </a>
          </li>
          <li>
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/hdi.12542">
              <i>Overview of Iron Metabolism in Health and Disease</i> (2017 Mar
              15)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5321802/">
              <i>Iron and Inflammation – the Gut Reaction</i> (2017 Feb 22)
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S0167488916303275">
              <i>
                Iron mediated toxicity and programmed cell death: A review and a
                re-examination of existing paradigms{" "}
              </i>{" "}
              (2016 Dec)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/21855608/">
              <i>
                Non-transferrin bound iron: a key role in iron overload and iron
                toxicity
              </i>{" "}
              (2011 Aug 9)
            </a>
          </li>
        </ul>
        <p>
          <b>Other</b>
        </p>
        <ul>
          <li>
            <a href="https://www.multiflora-herbs.com/blogs/news/free-iron-as-a-cause-of-inflammation">
              Free iron as a cause of inflammation
            </a>
          </li>
        </ul>
        {/* <Section id="intro" md={mdIntro} />
        <Section id="blue-light" md={mdBlueLight} />
        <Section id="sunscreen" md={mdSunscreen} />
        <Section id="sunglasses" md={mdSunglasses} />
        <Section id="shampoo" md={mdShampoo} />
        <Section id="porn" md={mdPorn} />
        <Section id="mouthbreathing" md={mdMoutbreathing} />
        <Section id="iron-toxicity" md={mdIronToxicity} />
        <Section id="copper-toxicity" md={mdCopperToxicity} />
        <Section id="pill-iud" md={mdIud} /> */}
      </div>
    </div>
  );
};

export default Iron;
