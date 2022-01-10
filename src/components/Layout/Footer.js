import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCategories } from "../functions/Categories";

const Footer = () => {

  const Data = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Faq",
      path: "/faq",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  useEffect(() => {
    loadCategories();
  }, []);
  const loadCategories = () => {
    setLoading(true);
    getCategories().then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
  };
  const [Categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = new Date().getFullYear();
  return (
    <footer class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <small class="d-block mb-3 text-muted text-decoration-none">
            <b>&copy; {data}</b>
          </small>
        </div>
        <div class="col-6 col-md">
          <h3>Products</h3>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Cool stuff
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Random feature
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Team feature
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Stuff for developers
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Another one
              </a>
            </li>
            <li>
              <a class="text-muted text-decoration-none" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h3>Categories</h3>
          <ul class="list-unstyled text-small">
            {Categories.map((c, i) => (
              <li key={i}>
                <a class="text-muted text-decoration-none " href={c.slug}>
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="col-6 col-md">
          <h3>Navigate</h3>
          <ul class="list-unstyled text-small">
          {Data.map((m,i)=>(
            <li key={i}>
            <a class="text-muted text-decoration-none " href={m.path}>
              {m.name}
            </a>
          </li>
          ))}
           </ul>
        </div>
        <div class="col-6 col-md">
          <h3>Contact</h3>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-light">
              <Link
                className="text-decoration-none"
                to="https://api.whatsapp.com/send?phone=917288018339&text=Hello We want Some More Details in the Products"
                target="_blank"
              >
                <FaWhatsapp size={35} />
              </Link>
            </button>
            <button type="button" class="btn btn-light">
              <Link
                className="text-decoration-none"
                to="tel:+917288018339"
                target="_blank"
              >
                <FaPhone size={35} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
