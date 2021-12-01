import {Helmet} from "react-helmet"

const Seo = ({title , link , keyphrase , keywords , image , url , type, description }) =>{
return(
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={`${link}`} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="keyphrase" content={keyphrase} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={image} />
        <meta property="og:locale" content="en_IN" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        <script type="application/ld+json">
         
        </script>
    

      </Helmet>
    </>
)
}
export default Seo