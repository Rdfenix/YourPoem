import "./index.css";
import React from "react";
import Header from "./header";
import Button from "../../shared/component/button";

const App = () => {
  function getPoems() {
    console.log("passei aqui ");
  }

  return (
    <section>
      <Header />
      <div className="container">
        <div className="poems-button">
          <Button handleButton={getPoems} nameOfButton="Click here" />
        </div>
      </div>
    </section>
  );
};

export default App;
