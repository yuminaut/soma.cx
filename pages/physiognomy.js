import Head from "next/head";
import ReactMarkdown from "react-markdown";

const Physiognomy = ({ topbar }) => (
  <div className="page default-page">
    <Head>
      <title>Physiognomy</title>
    </Head>
    {topbar}
    <div className="wrapper">
      <ReactMarkdown children={md} />
    </div>
  </div>
);

const md = `
# Physiognomy

(TODO: All these links should be archived!)

- https://en.wikipedia.org/wiki/Physiognomonics
- https://archive.org/details/worksaristotle00arisuoft/page/n51/mode/2up
- https://www.light.org/Instantaneous-Character-Reading-SL121.cfm
- https://www.light.org/Instantaneous-Reading-from-Profile-SL123.cfm
`;

export default Physiognomy;
