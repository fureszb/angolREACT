import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Angol
          </a>
          <div className="d-flex">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Válaszd ki
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rendez" className="nav-link">
                  Helyetesítsd
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gepel" className="nav-link">
                  Gépeld be
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;