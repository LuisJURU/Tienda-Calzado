// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from ".";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import Paginas from "./components/Paginas";
import {DataProvider} from "./Context/Dataprovider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <Header />
        <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;