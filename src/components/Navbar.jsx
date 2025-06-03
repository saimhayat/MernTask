import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          onClick={handleToggle}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={showMenu}
          aria-label="Toggle navigation"
        >
          {showMenu ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-person-fill"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-cart4"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link Services" href="#"><i className="bi bi-search"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



