import Footer from "./Footer";
import Head from "./Head";
import Helmet from "react-helmet";

const Layout = (props) => {
  return (
    <>
    <Helmet>
        <title>{props.title}</title>
        <link rel="canonical" href={`${props.link}`} />
        <meta name="title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="keyphrase" content={props.keyphrase} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content={props.type} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />
        <meta property="og:image:alt" content={props.image} />
        <meta property="og:locale" content="en_IN" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
    </Helmet>
      <Head />
      <div className="text-center">{props.children}</div>
      <Footer />
    </>
  );
};
export default Layout;
