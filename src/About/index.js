import logo from "./../logo.svg";
import styles from "./../App.module.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

function About({ users }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles["app"]} style={{ display: "flex" }}>
      <header className={styles["app-header"]}>
        <input
          value={searchParams.get("user") || ""}
          onChange={(e) => {
            const filter = e.target.value;
            filter ? setSearchParams({ user: filter }) : setSearchParams({});
            console.log(
              users.filter((user) => user.id === +searchParams.get("user"))
            );
          }}
          type="text"
          placeholder="search users"
        />
        <img src={logo} className={styles["app-logo"]} alt="logo" />
        <p>
          easy to Learn <code> About REACT </code> with us
        </p>
        <Link to="/" className={styles["app-link"]}>
          Home
        </Link>
        <ul>
          {searchParams.get("user")
            ? users
                .filter((user) => user.id === +searchParams.get("user"))
                .map((user) => (
                  <Link
                    key={user.id}
                    className={styles["app-link"]}
                    to={`/about/${user.id}?user=${searchParams.get("user")}`}
                  >
                    <li>{user.name}</li>
                  </Link>
                ))
            : users.map((user) => (
                <Link
                  key={user.id}
                  className={styles["app-link"]}
                  to={`/about/${user.id}`}
                >
                  <li>{user.name}</li>
                </Link>
              ))}
        </ul>
      </header>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default About;
