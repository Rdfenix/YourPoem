import "./card-detail.css";
import React, { useState, useEffect } from "react";

import closeIcon from "../../../shared/assets/icon/close.png";

interface Props {
  title?: string;
  author?: string;
  lines?: string[];
  openCard?: boolean;
  handleClose: Function;
}

const CardDetail = ({ title, author, lines, handleClose }: Props) => {
  const [classAnimationStyle, setClassAnimationStyle] = useState(
    "card-detail-wrapper"
  );

  const [closeWasClicked, setCloseWasClicked] = useState(false);
  // workaround to resolve the control in the first parente element
  const parentElement: any = document.getElementsByClassName("app-container");

  useEffect(() => {
    setTimeout(() => {
      if (!closeWasClicked) {
        setClassAnimationStyle("card-detail-wrapper active");
        parentElement[0].style.overflow = "hidden";
      } else {
        setClassAnimationStyle("card-detail-wrapper close");
        parentElement[0].style.overflow = "auto";
      }
    }, 900);
  }, [closeWasClicked, parentElement]);

  function closeCardDetail() {
    setCloseWasClicked(true);

    setTimeout(() => {
      handleClose();
    }, 1500);
  }

  return (
    <div className="card-detail-container">
      <div className={classAnimationStyle}>
        <header className="card-detail-header">
          <div className="title-and-close">
            <span>{title}</span>
            <button className="close-button" onClick={() => closeCardDetail()}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <span>{author}</span>
        </header>
        <section className="card-detail-body">
          {lines?.map((line, index) => (
            <span key={index.toString()}>{line}</span>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CardDetail;
