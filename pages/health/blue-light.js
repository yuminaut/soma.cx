import Head from "next/head";

const BlueLight = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Blue light</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="blue-light">Blue light</h1>
        <p>
          Avoid blue light from artificial light sources and monitors as much as
          possible.
        </p>
        <ul>
          <li>
            Blue light is a contributing factor in myopia (near-sightedness) and
            macular degeneration (vision loss).
          </li>
          <li>Blue light can cause eye strain and headaches.</li>
          <li>
            High-energy blue light and lack of sunlight likely causes free iron
            to accumulate in and around your eyes, which is very bad. See:{" "}
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2718721/">
              Iron Homeostasis and Eye Disease
            </a>
            .
          </li>
          <li>
            Exposure to blue light at night inhibits melatonin production which
            disrupts your circadian rhythm and poor sleep, which leads to a
            number of health problems.
          </li>
          <li>
            There are likely many other negative effects of blue light that I
            don't feel confident mentioning here.
          </li>
        </ul>
        <p>
          Avoid the damage caused by blue light by installing a blue light
          filter on your computer and phone (such as{" "}
          <a href="https://justgetflux.com/">f.lux</a>
          ), avoiding screens as much as possible, and getting plenty of
          sunlight.
        </p>
        <p>
          <b>Research</b>
        </p>
        <p>
          There's a lot of{" "}
          <a href="https://www.ncbi.nlm.nih.gov/pmc/?term=blue+light+eye+damage">
            research on blue light and eye damage
          </a>
          , check it out for yourself. Here are some articles:
        </p>
        <ul>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6721470/">
              <i>
                Mitochondria as Potential Targets and Initiators of the Blue
                Light Hazard to the Retina{" "}
              </i>{" "}
              (2019 Aug 21)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5854379/">
              <i>
                Removal of the blue component of light significantly decreases
                retinal damage after high intensity exposure{" "}
              </i>{" "}
              (2018 Mar 15)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5233810/">
              <i>
                Violet Light Exposure Can Be a Preventive Strategy Against
                Myopia Progression
              </i>{" "}
              (2016 Dec 16)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/">
              <i>
                Effects of blue light on the circadian system and eye physiology
              </i>{" "}
              (2016 Jan 24)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4763136/">
              <i>
                Low-energy light bulbs, computers, tablets and the blue light
                hazard
              </i>{" "}
              (2016 Jan 15)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/25863264/">
              <i>
                Retinal damage induced by commercial light emitting diodes
                (LEDs)
              </i>{" "}
              (2015 Apr 8)
            </a>
          </li>
          <li>
            <a href="https://pubmed.ncbi.nlm.nih.gov/23509952/">
              <i>
                Acute exposure to evening blue-enriched light impacts on human
                sleep
              </i>{" "}
              (2013 Mar 20)
            </a>
          </li>
          <li>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3144654/">
              <i>Retinal light toxicity</i> (2010 Oct 29)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlueLight;
