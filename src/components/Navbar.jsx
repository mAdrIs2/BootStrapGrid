const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary-dark p-3">
      <div className="container-fluid">
        <a className="navbar-brand link-light fs-3 " href="#">
          BootStrap Grid
        </a>
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-5 fs-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
