import "./poem-card.css";
import React from "react";
import { useDispatch } from "react-redux";

import starIcon from "./../../../shared/assets/icon/star.png";
import { setFavoriteToCardAction } from "../../../core/action/poemAction";

interface Props {
  title?: string;
  author?: string;
  poem?: string;
  favorite?: boolean;
}

const PoemCard = ({ author, title, poem, favorite }: Props) => {
  const dispatch = useDispatch();

  function openCardDetail() {
    console.log("open detail");
  }

  function favoriteCard() {
    const data: any = { title, author };
    dispatch(setFavoriteToCardAction(data));
  }

  const cssClassFavorite = favorite
    ? "favorite-button favorite-card"
    : "favorite-button";

  return (
    <div className="card-container">
      <div className="card-button-area">
        <button className={cssClassFavorite} onClick={() => favoriteCard()}>
          <img src={starIcon} alt="like" />
        </button>
      </div>
      <div className="card-wrapper" onClick={() => openCardDetail()}>
        <div className="card-header">
          <div className="card-title">
            <span>{title}</span>
          </div>
          <div className="card-author">
            <span>{author}</span>
          </div>
        </div>
        <div className="card-body">
          <span>{poem}</span>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;
