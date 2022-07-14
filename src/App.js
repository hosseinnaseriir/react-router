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


// git log -> log the history of commits 
// git branch RER-40CreateLogin -> (RER=> name of project(defined by jira))
//  (-40 => number of task from RER project) -> (CreateLogin -> (title of task on jira))
// git checkout RER-40CreateLogin -> we have a new branch from master
// git add - commit
// git commit => i > INSERT => set a title and description(with an enter between title and desc) to our commit -> :wq
// git commit --amend for edit latest commit
//  git fetch
// git pull --rebase
// git rebase -i origin/master
