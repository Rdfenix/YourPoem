import "./body.css";
import React from "react";
import Button from "../../../shared/component/button";

const Body = () => {
  function getPoems() {
    console.log("passei aqui ");
  }
  return (
    <>
      <div className="container">
        <div className="poems-button">
          <Button handleButton={getPoems} nameOfButton="Click here" />
        </div>
      </div>
    </>
  );
};

export default Body;
