import Head from "next/head";
import { BackHome } from "../components/BackButtons.js";

const Aphorisms = () => (
  <>
    <Head>
      <title>Thoughts &amp; Aphorisms</title>
    </Head>
    <div className="page aphorisms">
      <BackHome />
      <div className="wrapper">
        <h1>Thoughts &amp; Aphorisms</h1>
        {items.map((item, idx) => (
          <Item key={idx} date={item.date} text={item.text} />
        ))}
      </div>
    </div>
  </>
);

const Item = ({ date, text }) => (
  <div className="aphorism">
    <div className="date">{date}</div>
    <div className="text">{text}</div>
  </div>
);

const items = [
  {
    date: "02-11-2020",
    text: `"Follow your dreams" is meant to be taken literally, as dreams act as guides and warnings.`,
  },
  {
    date: "01-11-2020",
    text: `White lies are still lies, and lying makes one ugly.`,
  },
  {
    date: "19-10-2020",
    text: `Beware of mistaking evil and stupidity for one another.`,
  },
  {
    date: "15-10-2020",
    text: `Utilitarianism stems from a misunderstanding of the meaning of suffering.`,
  },
  {
    date: "13-10-2020",
    text: `Relaxation is only relaxation if it's a goal in itself. If relaxation is a means, it's not relaxation.`,
  },
  {
    date: "05-10-2020",
    text: `Thinking much but walking little eventually produces ugly thoughts.`,
  },
  {
    date: "05-10-2020",
    text: `Joy and kindness makes beautiful.`,
  },
  {
    date: "03-10-2020",
    text: `Compassion has to be earned.`,
  },
  {
    date: "03-10-2020",
    text: `To hold a grudge is to be enslaved.`,
  },
  {
    date: "02-10-2020",
    text: `The most powerful mode of communication is via the aphorism that does not seek to justify itself.`,
  },
  {
    date: "17-09-2020",
    text: `Ask not for a smaller spirit, but for a larger life.`,
  },
  {
    date: "17-09-2020",
    text: `Are you Good, or are you just weak?`,
  },
  {
    date: "01-09-2020",
    text: `Always be kind to those close to you.`,
  },
];

export default Aphorisms;
