import Layout from "../components/Layout/Layout";
import Carousel from "react-multi-carousel";

import MD1 from "../images/md (1).jpg";
import MD2 from "../images/md (2).jpg";
import MD3 from "../images/md (3).jpg";
import MD4 from "../images/md (4).jpg";
import MD5 from "../images/md (5).jpg";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  const images = [
    {
      image: MD1,
      alt: "material-Dukan",
    },
    {
      image: MD2,
      alt: "material-Dukan",
    },
    {
      image: MD3,
      alt: "material-Dukan",
    },
    {
      image: MD4,
      alt: "material-Dukan",
    },
    {
      image: MD5,
      alt: "material-Dukan",
    },
  ];
  return (
    <>
      <div>
        <Layout
          title="Home | Material Dukan"
          description="Material Dukan All About your household material and your house construction"
          keywords="Material Dukan , Cement Store , Hardware materials , many more house-hold materials "
          keyphrase="All about House Hold utilities and raw materials for home constructions"
        >
          <div className="container">
            <div className="row m-2">
              <div className="col-md-6">
                <h1 className="display-3 landingpage m-5">Material Dukan</h1>
                <h3>One Place for All Your House hold requirements</h3>
              </div>
              <div className="col-md-6">
                <img
                  src={MD1}
                  className="img-thumbnail shadow-lg"
                  alt="Material Dukan Images"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <hr />
            <h2>Our Products</h2>
            <hr />
            {/* cardslist */}
            <hr />
            <Carousel responsive={responsive}>
              {images.map((path, i) => (
                <div key={i}>
                  <img src={path.image} alt={path.alt} />
                </div>
              ))}
            </Carousel>
            <hr />
          </div>
        </Layout>
      </div>
    </>
  );
};
export default Home;
