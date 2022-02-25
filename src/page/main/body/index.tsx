import "./body.css";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../../shared/component/button";
import { getNewPoemsAction } from "../../../core/action/poemAction";

const Body = () => {
  const dispatch = useDispatch();

  function getPoems() {
    console.log("passei aqui ");
    dispatch(getNewPoemsAction());
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
