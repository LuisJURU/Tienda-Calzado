// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from ".";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import Paginas from "./components/Paginas"; // Importación por defecto

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Paginas />
      </Router>
    </div>
  );
}

export default App;