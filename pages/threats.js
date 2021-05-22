import Head from "next/head";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import { SLink } from "../components/Links.js";

const Section = ({ id, md }) => (
  <div className="box">
    <a id={id}></a>
    <ReactMarkdownWithHtml allowDangerousHtml children={md} />
  </div>
);

const Threats = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Threats and Dangers in the Modern World</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="modern-dangers">Threats and Dangers in the Modern World</h1>
        <p>
          On this page you'll find notes about often overlooked long-term
          dangers in the modern world.
        </p>
        <p>
          Keep in mind that much of the advice below is only effective if you
          follow my <SLink href="/nutrition">nutrition advice</SLink>. For
          instance, if you avoid using suncreen but your diet is poor, you will
          likely burn yourself.
        </p>

        <h2 id="sections">Sections</h2>
        <ul>
          <li>
            <a href="#blue-light">Blue light</a>
          </li>
          <li>
            <a href="#sunscreen">Sunscreen</a>
          </li>
          <li>
            <a href="#sunglasses">Sunglasses</a>
          </li>
          <li>
            <a href="#shampoo">Shampoo</a>
          </li>
          <li>
            <a href="#porn">Porn</a>
          </li>
          <li>
            <a href="#mouthbreathing">Mouthbreathing</a>
          </li>
          <li>
            <a href="#iron-toxicity">Iron toxicity</a>
          </li>
          <li>
            <a href="#copper-toxicity">Copper toxicity</a>
          </li>
          <li>
            <a href="#pill-iud">For women: contraceptive pills and IUDs</a>
          </li>
        </ul>

        <h2 id="blue-light">Blue light</h2>
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
        <h2 id="sunscreen">Sunscreen</h2>
        <p>Do not use sunscreen.</p>
        <p>
          Commercial sunscreen is full of endocrine disrupting chemicals that
          get absorbed by your skin, and end up{" "}
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
        <h2 id="sunglasses">Sunglasses</h2>
        <p>
          Do not use sunglasses (unless you need them to drive safely or to look
          cool).
        </p>
        <p>
          You don't need them. They will just make your vision worse and weaken
          the signals that enforce a healthy circadian rhythm.
        </p>
        <p>
          <a href="https://medium.com/@veritasnaut/sunglasses-are-killing-you-dbadb93f935d">
            More info
          </a>
        </p>
        <h2 id="shampoo">Shampoo</h2>
        <p>Do not use shampoo.</p>
        <p>
          The sulfates in shampoo, while removing dirt from your hair and scalp,
          also strip them of natural oils. This dries out your hair and makes it
          frizzy and brittle.
        </p>
        <p>
          Your scalp also absorbs whatever industrial chemicals the shampoo
          contains.
        </p>
        <p>
          <a href="https://www.reddit.com/r/NoPoo/wiki/index">More info</a>
        </p>
        <h2 id="porn">Porn</h2>
        <p>Do not watch porn.</p>
        <p>Do I even need to mention this one?</p>
        <p>
          <a href="https://twitter.com/thuletide/status/1249437488579579905">
            More info in case you're not convinced
          </a>
          .
        </p>
        <h2 id="mouthbreathing">Mouthbreathing</h2>
        <p>
          Mouthbreathing means using your mouth instead of your nose to breathe.
          The habit usually begins as an infant and it causes a myriad of health
          problems later on in life.
        </p>
        <p>
          More extensive information is available on the{" "}
          <SLink href="/breathing">breathing page</SLink>. You might be
          mouthbreathing without being aware of it. Check out the page.
        </p>
        <h2 id="iron-toxicity">Iron toxicity</h2>
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
          body. Also see the
          <SLink href="/nutrition">nutrition</SLink> page.
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
          <li>
            <a href="https://twitter.com/Grimhood/status/1306941811684851714">
              Free iron contributes to hair loss{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Grimhood/status/1307230388440317953">
              Free iron contributes to hair graying{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Grimhood/status/1307944527060070400">
              Iron - cereal example{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Grimhood/status/1307785622933762049">
              Anemia
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Grimhood/status/1298516456787697664">
              Women and anemia
            </a>
          </li>
        </ul>
        <h2 id="copper-toxicity">Copper toxicity</h2>
        <p>
          I still need to research this subject. The gist of it is that iron
          toxicity (see above) can lead to copper toxicity. Check out these
          links in the meantime:
        </p>
        <ul>
          <li>
            <a href="https://coppertoxic.com">CopperToxic.com</a>
          </li>
          <li>
            <a href="https://www.multiflora-herbs.com/blogs/news/the-dark-side-of-copper">
              Understanding copper toxicity
            </a>
          </li>
        </ul>
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
        <h2 id="for-women-contraceptive-pills-and-iuds">
          For women: contraceptive pills and IUDs
        </h2>
        <p>
          I don't know much about this but I've read some worrying things. Check
          out{" "}
          <a href="https://twitter.com/Grimhood/status/1308544875332136960">
            this thread{" "}
          </a>{" "}
          and follow the retweets.
        </p>
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

const mdIntro = `
# Modern health threats

On this page you'll find notes about often overlooked long-term dangers in the modern world.

## Sections

- [Blue light](#blue-light)
- [Sunscreen](#sunscreen)
- [Sunglasses](#sunglasses)
- [Shampoo](#shampoo)
- [Porn](#porn)
- [Mouthbreathing](#mouthbreathing)
- [Iron toxicity](#iron-toxicity)
- [Copper toxicity](#copper-toxicity)
- [For women: contraceptive pills and IUDs](#pill-iud)
`;

const mdBlueLight = `
## Blue light

Avoid blue light from artificial light sources and monitors as much as possible.

- Blue light is a contributing factor in myopia (near-sightedness) and macular degeneration (vision loss).
- Blue light can cause eye strain and headaches.
- High-energy blue light and lack of sunlight likely causes free iron to accumulate in and around your eyes, which is very bad. See: [Iron Homeostasis and Eye Disease](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2718721/).
- Exposure to blue light at night inhibits melatonin production which disrupts your circadian rhythm and poor sleep, which leads to a number of health problems.
- There are likely many other negative effects of blue light that I don't feel confident mentioning here.

Avoid the damage caused by blue light by installing a blue light filter on your computer and phone (such as [f.lux](https://justgetflux.com/)), avoiding screens as much as possible, and getting plenty of sunlight.

**Research**

There's a lot of [research on blue light and eye damage](https://www.ncbi.nlm.nih.gov/pmc/?term=blue+light+eye+damage), check it out for yourself. Here are some articles:

- [_Mitochondria as Potential Targets and Initiators of the Blue Light Hazard to the Retina_ (2019 Aug 21)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6721470/)
- [_Removal of the blue component of light significantly decreases retinal damage after high intensity exposure_ (2018 Mar 15)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5854379/)
- [_Violet Light Exposure Can Be a Preventive Strategy Against Myopia Progression_ (2016 Dec 16)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5233810/)
- [_Effects of blue light on the circadian system and eye physiology_ (2016 Jan 24)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4734149/)
- [_Low-energy light bulbs, computers, tablets and the blue light hazard_ (2016 Jan 15)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4763136/)
- [_Retinal damage induced by commercial light emitting diodes (LEDs)_ (2015 Apr 8)](https://pubmed.ncbi.nlm.nih.gov/25863264/)
- [_Acute exposure to evening blue-enriched light impacts on human sleep_ (2013 Mar 20)](https://pubmed.ncbi.nlm.nih.gov/23509952/)
- [_Retinal light toxicity_ (2010 Oct 29)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3144654/)
`;

const mdSunscreen = `
## Sunscreen

Do not use sunscreen.

Commercial sunscreen is full of endocrine disrupting chemicals that get absorbed by your skin, and end up [accumulating in your body at high levels](https://www.pharmacist.com/article/sunscreen-chemicals-accumulate-body-high-levels), plus most sunscreens [have not been toxologically tested](https://www.mitohealth.ca/most-sunscreens-are-terrible/).

But we don't even need to turn to science in order to reject sunscreen. Commercial sunscreen has been around for less than 100 years which isn't nearly enough time to learn about the long term effects.

**But what then instead?**

- Build up tolerance.
- Drink a lot of water.
- Wear a hat and protective clothing (such as light loose fitting shirt).
- Don't expose yourself for long periods of time; take frequent "breaks" from the sun.
- Use a natural sunscreen such as zinc oxide paste or coconut oil.
- Avoid sucrose, PUFAs and other inflammatory foods.

**Research**

- [_Sun lotion chemicals as endocrine disruptors_ (2015 Jan 30)](https://pubmed.ncbi.nlm.nih.gov/25885102/)
- [_Endocrine-disrupting chemicals: associated disorders and mechanisms of action_ (2012 Sep 6)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3443608/)
- [_Endocrine disruptors and asthma-associated chemicals in consumer products_ (2012 Mar 8)](https://pubmed.ncbi.nlm.nih.gov/22398195/)
- [_Neurotoxic effect of active ingredients in sunscreen products, a contemporary review_ (2017 May 27)](https://pubmed.ncbi.nlm.nih.gov/28959646/)
`;

const mdSunglasses = `
## Sunglasses

Do not use sunglasses (unless you need them to drive safely or to look cool).

You don't need them. They will just make your vision worse and weaken the signals that enforce a healthy circadian rhythm.

[More info](https://medium.com/@veritasnaut/sunglasses-are-killing-you-dbadb93f935d) 
`;

const mdShampoo = `
## Shampoo

Do not use shampoo.

The sulfates in shampoo, while removing dirt from your hair and scalp, also strip them of natural oils. This dries out your hair and makes it frizzy and brittle.

Your scalp also absorbs whatever industrial chemicals the shampoo contains.

[More info](https://www.reddit.com/r/NoPoo/wiki/index)
`;

const mdPorn = `
## Porn

Do not watch porn.

Do I even need to mention this one?

[More info in case you're not convinced](https://twitter.com/thuletide/status/1249437488579579905).
`;

const mdMoutbreathing = `
## Mouthbreathing

Mouthbreathing means using your mouth instead of your nose to breathe. The habit usually begins as an infant and it causes a myriad of health problems later on in life.

More extensive information is available on the breathing page. You might be mouthbreathing without being aware of it. Check out the page.
`;

const mdIronToxicity = `
## Iron toxicity

Beware of consuming non-heme iron, found in many plant foods. It has a low bioavailability, so most of it (from upward of 60%) gets stored in organs and tissue as "labile iron" acting as a catalyst for oxidative damage to your cells. This is what iron toxicity means.

Like pretty much everyone today, you probably have accumulated lots of such iron over the years, especially if you are a male or a postmenopausal woman (if you are a young woman, the monthly blood loss via menstruation helps remove free labile iron, although iron toxicity is still a risk).

So what can you do?

Focus on getting more magnesium (which you need to supplement) and retinol (_preformed_ vitamin A) and bioavailable copper, found mainly in animal fats and foods. Liver is a great source of retinol and bioavailabel copper. These work to remove excess iron from your body. Also see the nutrition page.

For more info, check out the following links.

**Research**

- [_Iron Toxicity_ (2020 Jun 30)](https://www.ncbi.nlm.nih.gov/books/NBK459224/)
- [_Programmed Cell-Death by Ferroptosis: Antioxidants as Mitigators_ (2019 Oct 8)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6801403/)
- [_New insights into the role of iron in inflammation and atherosclerosis_ (2019 Aug 12)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6796517/)
- [_Iron and oxidizing species in oxidative stress and Alzheimer's disease_ (2019 Jun 20)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6880687/)
- [_Pathological roles of iron in cardiovascular disease_ (2019 Apr 17)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6469984/)
- [_The Aging of Iron Man_ (2018 Mar 12)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5857593/)
- [_Overview of Iron Metabolism in Health and Disease_ (2017 Mar 15)](https://onlinelibrary.wiley.com/doi/full/10.1111/hdi.12542)
- [_Iron and Inflammation – the Gut Reaction_ (2017 Feb 22)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5321802/)
- [_Iron mediated toxicity and programmed cell death: A review and a re-examination of existing paradigms_ (2016 Dec)](https://www.sciencedirect.com/science/article/pii/S0167488916303275)
- [_Non-transferrin bound iron: a key role in iron overload and iron toxicity_ (2011 Aug 9)](https://pubmed.ncbi.nlm.nih.gov/21855608/)

**Other**

- [Free iron as a cause of inflammation](https://www.multiflora-herbs.com/blogs/news/free-iron-as-a-cause-of-inflammation)
- [Free iron contributes to hair loss](https://twitter.com/Grimhood/status/1306941811684851714)
- [Free iron contributes to hair graying](https://twitter.com/Grimhood/status/1307230388440317953)
- [Iron - cereal example](https://twitter.com/Grimhood/status/1307944527060070400)
- [Anemia](https://twitter.com/Grimhood/status/1307785622933762049)
- [Women and anemia](https://twitter.com/Grimhood/status/1298516456787697664)
`;

const mdCopperToxicity = `
## Copper toxicity

I still need to research this subject. The gist of it is that iron toxicity (see above) can lead to copper toxicity. Check out these links in the meantime:

- [CopperToxic.com](https://coppertoxic.com)
- [Understanding copper toxicity](https://www.multiflora-herbs.com/blogs/news/the-dark-side-of-copper)

**Research**

- [_Copper Toxicity_ (2020 Apr 17)](https://www.ncbi.nlm.nih.gov/books/NBK557456/)
- [_Metal Toxicity Links to Alzheimer’s Disease and Neuroinflammation_ (2019 Jan 18)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6475603/)
- [_Absorption Mechanisms of Iron, Copper, and Zinc: An Overview_ (PDF only) (2018)](https://pubmed.ncbi.nlm.nih.gov/29491267/)
- [_The Yin and Yang of Copper During Infection_ (2016 Jan 20)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5535265/)
`;

const mdIud = `
## For women: contraceptive pills and IUDs

I don't know much about this but I've read some worrying things. Check out [this thread](https://twitter.com/Grimhood/status/1308544875332136960) and follow the retweets.
`;

export default Threats;
