import Head from "next/head";

const Shampoo = ({ topbar }) => {
  return (
    <div className="page default-page threats">
      <Head>
        <title>Commercial shampoo</title>
      </Head>
      {topbar}
      <div className="wrapper">
        <h1 id="shampoo">Commercial shampoo</h1>
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
          The <a href="https://www.reddit.com/r/NoPoo/wiki/index">/r/NoPoo</a>{" "}
          ("no shampoo") wiki on Reddit has good information on this topic.
        </p>
      </div>
    </div>
  );
};

export default Shampoo;
