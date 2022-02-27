import "./body.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/component/button";
import { getNewPoemsAction } from "../../../core/action/poemAction";
import { StateReducer } from "../../../shared/interface/poem";
import PoemList from "../../../component/poem/poem-list";

const Body = () => {
  const poems = useSelector((state: StateReducer) => state?.PoemReducer);
  const favoritePoems = useSelector(
    (state: StateReducer) => state?.FavoritePoemReducer
  );

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
        <PoemList poems={poems} favorites={favoritePoems} />
      </div>
    </>
  );
};

export default Body;
