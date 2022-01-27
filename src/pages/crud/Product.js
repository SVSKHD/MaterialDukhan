import Layout from "../../components/Layout/Layout";

const ProductCrud = () => {
  return (
    <>
      <Layout>
        <div className="mb-4" />
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <h4>Product Upload Details</h4>
                  <hr />
                </div>
                <div className="col-md-7">
                    <h4>Products List</h4>
                    <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </Layout>
    </>
  );
};
export default ProductCrud;
