import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=Name="navbar navbar-expand-lg bg-body-tertiary">
      <div className=Name="container">
        <a className=Name="navbar-brand" href="#">Navbar</a>
        <button
          className=Name="navbar-toggler"
          onClick={handleToggle}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={showMenu}
          aria-label="Toggle navigation"
        >
          {showMenu ? (
            <i className=Name="bi bi-x-lg"></i>
          ) : (
            <span className=Name="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className=Name={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className=Name="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className=Name="nav-item">
              <a className=Name="nav-link" href="#"><i className=Name="bi bi-person-fill"></i></a>
            </li>
            <li className=Name="nav-item">
              <a className=Name="nav-link" href="#"><i className=Name="bi bi-cart4"></i></a>
            </li>
            <li className=Name="nav-item">
              <a className=Name="nav-link Services" href="#"><i className=Name="bi bi-search"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



