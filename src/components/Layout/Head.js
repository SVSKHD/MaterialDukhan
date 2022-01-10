const Head = () => {
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
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
           Material Dukan
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {Data.map((m, i) => (
                <li key={i} class="nav-item">
                  <a class="nav-link active" aria-current="page" href={m.path}>
                    {m.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head;
