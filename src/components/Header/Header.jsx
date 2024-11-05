import { Link } from "react-router-dom";

import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.back}>
      <nav className={css.nav}>
        <div className={css.header}>
          <Link to="/" className={css.logo}>
            TravelTrucks
          </Link>
        </div>
        <div>
          <ul className={css.link}>
            <li>
              <Link to="/" className={css.pages}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/catalog" className={css.pages}>
                Catalog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
