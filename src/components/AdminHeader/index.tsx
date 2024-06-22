import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt="" />
          <h1 className="sitename">QuickStart</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin/questions">Question Management</NavLink>
            </li>
            <li>
              <NavLink to="/admin/configs">Config Management</NavLink>
            </li>
            <li>
              <NavLink to="/admin/play-history">Play History</NavLink>
            </li>
            {/* <li>
              <a href="index.html#pricing">Pricing</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="index.html#contact">Contact</a>
            </li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        {/* <a className="btn-getstarted" href="index.html#about">
          Get Started
        </a> */}
      </div>
    </header>
  );
};

export default AdminHeader;
