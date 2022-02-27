import "./poem-card.css";
import React from "react";

import starIcon from "./../../../shared/assets/icon/star.png";

interface Props {
  title?: string;
  author?: string;
  poem?: string;
  favorite?: boolean;
}

const PoemCard = ({ author, title, poem, favorite }: Props) => {
  function openCardDetail() {
    console.log("open detail");
  }

  function favoriteCard() {
    console.log("favorite card");
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
