import { useState } from "react";
import "../styles/connexion.css";

function Submit({ addChoreLog }) {
  const [names, setNames] = useState();
  const [email, setEmail] = useState();
  const [psw, setPsw] = useState();
  const handleSubmit = (e) => {
    addChoreLog([names, email, psw]);
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Nom d'utilisateur:</label>
      <br />
      <input
        name="names"
        type="text"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <br />
      <label>E-mail:</label>
      <br />
      <input
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Mot de passe:</label>
      <br />
      <input
        name="psw"
        type="text"
        value={psw}
        onChange={(e) => setPsw(e.target.value)}
      />
      <br />
      <input type="submit" value="Enregistrer" />
    </form>
  );
}

export default Submit;
