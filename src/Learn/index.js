import logo from "./../logo.svg";
import styles from "./../App.module.css";
import { Link, Outlet } from "react-router-dom";

function Learn() {
  return (
    <div className={styles["app"]}>
      <Outlet />
      <header className={styles["app-header"]}>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
        <p>
          Learn <code> REACT </code> with no stress
        </p>
        <Link to="/" className={styles["app-link"]}>
          Home
        </Link>
      </header>
    </div>
  );
}

export default Learn;
