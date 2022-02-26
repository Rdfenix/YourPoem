import "./body.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/component/button";
import { getNewPoemsAction } from "../../../core/action/poemAction";
import { Poem } from "../../../shared/interface/poem";
import PoemList from "../../../component/poem/poem-list";

interface StateReducer {
  PoemReducer: Poem[];
}

const Body = () => {
  const poems = useSelector((state: StateReducer) => state?.PoemReducer);

  const dispatch = useDispatch();

  function getPoems() {
    dispatch(getNewPoemsAction());
  }
  return (
    <>
      <div className="container">
        <header className="poems-button">
          <Button handleButton={getPoems} nameOfButton="Click here" />
        </header>
        <PoemList poems={poems} />
      </div>
    </>
  );
};

export default Body;
