import logo from "./logo.svg";
import styles from "./App.module.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Learn from "./Learn";
import Menu from "./Menu/index";
import About from "./About/index";
import AboutPerson from "./About/AboutPerson";
import { useState } from "react";

function App() {
  const [users, setusers] = useState([
    {
      name: "John mortazavi nezhad",
      id: 12,
    },
    {
      name: "ali mortazavi nezhad",
      id: 13,
    },
    {
      name: "Reza mortazavi nezhad",
      id: 14,
    },
    {
      name: "Sarah mortazavi nezhad",
      id: 15,
    },
    {
      name: "mohammad mortazavi nezhad",
      id: 16,
    },
  ]);

  const getUser = (id) => users.filter((user) => user.id === id)[0];
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles["app"]}>
            <header>
              <Menu />
            </header>
            <hr />
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<h1>Home page here...</h1>}></Route>
        <Route path="*" element={<h1>Not found page | 404</h1>}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/about" element={<About users={users} />}>
          <Route
            path="/about/:user"
            element={<AboutPerson getUser={getUser} />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
