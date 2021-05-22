import Head from "next/head";

const NotFound = ({ topbar }) => (
  <>
    <Head>
      <title>404 Not Found</title>
    </Head>
    <img src="/img/404.jpg" className="fullSizeBackground" style={{ opacity: 1 }} />
    {topbar}
    <div className="page not-found">
      <h2>
        404 not found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 404 not found
      </h2>
      <h1>
        404 not found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 404
        not found
      </h1>
      <h1>404 not found &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 404 not found</h1>
    </div>
  </>
);

export default NotFound;
