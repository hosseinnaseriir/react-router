import logo from "./../logo.svg";
import { Link, useParams } from "react-router-dom";

function AboutPerson({ getUser }) {
  const params = useParams();

  const user = getUser(+params.user);

  console.log(user);

  return (
    <div>
      <header style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <img src={logo} width="80px" alt="logo" />
        <h1>about {user.name} </h1>
      </header>
    </div>
  );
}

export default AboutPerson;
