import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./frontend/components/header";
import Footer from "./frontend/components/footer";
import Accueil from "./frontend/pages/accueil";
import Compte from "./frontend/pages/compte";
import Submit from "./frontend/pages/submit";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Compte" element={<Compte />} />
        <Route path="/Enregistrement" element={<Submit />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
