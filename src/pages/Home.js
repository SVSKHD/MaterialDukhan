import Layout from "../components/Layout/Layout";
import MD1 from "../images/md (1).jpg";
const Home = () => {
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
            <div className="row">
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
          <hr/>
          <h2>Our Products</h2>
          <hr/>
          {/* cardslist */}
          <hr/>
          
          <hr/>

          </div>
        </Layout>
      </div>
    </>
  );
};
export default Home;
