import Head from "next/head";
import ReactMarkdown from "react-markdown";

const Parasites = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Parasites</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <ReactMarkdown children={md} />
    </div>
  </div>
);

const md = `
# Parasites

I have no idea how to introduce this subject and how to organize this page, so
I'll just post disjoint bits of information and let you draw your own conclusions.

I'll start with sharing the resources that introduced me to the subject. Both of
them are written and compiled in an incredibly schizophrenic fashion; some of
it is insane but the content is well compiled. Draw your own conclusions.

- [What is the worm pill/parasite pill? The Grand Unified Conspiracy?](https://archive.is/goqjW)
  - [Backup](wormpill.html)
- [The Parasite Pill](https://files.catbox.moe/9rbtxh.pdf) / [Backup](parasites/worm-pill.pdf)



## What's really going on?

It's standard procedure to deworm pets at least once a year. Why not humans?

Taking anthelmintics (antiparasitical drugs, dewormer) is common practice in
for instance Brazil, Mexico, the Dominican Republic, which I learned from people
living there, and it probably holds true for a bunch of other countries too.

Could it be Western hubris thinking that we think we are beyond pests?

Did we forget that "cleanliness is next to godliness"?



## Possible connections


### Parasites and homosexuality

Could parasite infection be a contributing factor in male homosexual behavior?

- ["Homosexuality is caused by parasites" (slightly NSFW)](parasites/parasites-homosexuality.jpeg)
- ["Turpentine Cured Me From Being Gay"](https://youtu.be/HJeL6NKy7yA?t=128)

Possibly a long stretch but some data worth considering:

- [Intestinal parasite increases aggression](https://uchicagomedicine.org/forefront/neurosciences-articles/people-with-rage-are-disorder-twice-as-likely-to-have-a-latent-toxoplasmosis-parasite-infection)
- [High aggression possibly correlated with low disgust response](https://pubmed.ncbi.nlm.nih.gov/21707194/)
- [Low pathogen avoidance is correlated with large number of sexual partners](parasites/pathogen-avoidance-sexual-behavior.jpeg)
  - Partner count statistics for [heterosexuals](parasites/number-partners-hetero.jpeg) / [homosexuals](parasites/number-partners-homo.jpeg)
- [Progesterone increases disgust sensitivity](https://www.sciencedirect.com/science/article/abs/pii/S0018506X10002953?via%3Dihub)


### Parasites and cancer

- [Parasites Causing Cancer](https://files.catbox.moe/wupj3t.pdf) / [Backup](parasites/cancer.pdf)
- [Man claiming dog dewormer cured his cancer](https://www.youtube.com/watch?v=HYILnjc_wuY)


### Parasites and COVID-19

Why is ivermectin such a big deal? Could there be any truth to it?

[What explains this?](https://www.thesun.co.uk/health/16288103/covid-restless-anal-syndrome/)



## Deworming - getting rid of worms/parasites

- [The Complete Herbal by Nicholas Culpeper, M.D.](https://www.gutenberg.org/files/49513/49513-h/49513-h.htm).
  Search for "worm" or "parasite".
  - [Backup](the-complete-herbal.html)
- [Antiparasitic Treatment Protocols](https://files.catbox.moe/ue69ab.pdf) / [Backup](parasites/treatment.pdf)
- [Parasite cleanse protocol](parasites/parasite-cleanse.png)
- [Using garlic to treat parasites](wisihow-parasites.html)



## Misc

- [#OPWORMPILL](https://pastebin.com/raw/biMabHp8) / [Backup](parasites/opwormpill.txt)

![](parasites/iceberg.png)



`;

export default Parasites;
