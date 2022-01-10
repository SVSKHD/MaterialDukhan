import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="Container m-5">
              <div class="form-box">
                <h1>Contact Form</h1>
                <div>
                  <form>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input
                        class="form-control"
                        id="name"
                        type="text"
                        name="Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        class="form-control"
                        id="email"
                        type="email"
                        name="Email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message">Message</label>
                      <textarea
                        class="form-control"
                        id="message"
                        name="Message"
                      ></textarea>
                    </div>
                    <div>
                      <br/>
                      <input
                        class="btn btn-primary"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
        
      </Layout>
    </>
  );
};
export default Contact;
