import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className={css.main}>
        <div className={css.text}>
          <h1 className={css.h1}>Campers of your dreams</h1>
          <h2 className={css.h2}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <div className={css.button}>
          <Link to="/catalog">
            <button className={css.view}>View Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
