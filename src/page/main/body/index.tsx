import "./body.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../shared/component/button";
import { getNewPoemsAction } from "../../../core/action/poemAction";
import PoemCard from "../../../component/poem/poem-card";
import { Poem } from "../../../shared/interface/poem";

interface StateReducer {
  PoemReducer: Poem[];
}

const Body = () => {
  const poems = useSelector((state: StateReducer) => state?.PoemReducer);

  console.log(poems);

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
        <div className="header-of-list">
          <div className="sortable-items">
            <div className="title-area">
              <span>Title</span>
            </div>
            <div className="author-area">
              <span>Author</span>
            </div>
          </div>
        </div>
        <section className="poems-area">
          {poems.map((poem) => {
            return (
              <PoemCard
                key={poem.title}
                author={poem.author}
                title={poem.title}
                poem={poem.lines[0]}
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Body;
