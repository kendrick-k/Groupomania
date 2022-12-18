import { useState } from "react";
import "../styles/connexion.css";
import { Link } from "react-router-dom";

function Connexion({ addChoreLog }) {
  const [email, setEmail] = useState();
  const [psw, setPsw] = useState();
  const handleSubmit = (e) => {
    addChoreLog([email, psw]);
    e.preventDefault();
  };

  return (
    <div className="a">
      <div className="connect">Se connecter</div>
      <div className="fond">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label className="display">E-mail:</label>
          <br />
          <input
            className="margin"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className="display">Mot de passe:</label>
          <br />
          <input
            className="margin"
            name="psw"
            type="text"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
          <br />
          <input type="submit" value="Connexion" />
        </form>
      </div>
      <Link className="link" to="/Enregistrement">
        Si vous n'étes pas encore inscrit veuillez cliquer ici
      </Link>
    </div>
  );
}

export default Connexion;
