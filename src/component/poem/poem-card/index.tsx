import "./poem-card.css";
import React from "react";

interface Props {
  title?: string;
  author?: string;
  poem?: string;
}

const PoemCard = ({ author, title, poem }: Props) => {
  return (
    <div className="card-container">
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
  );
};

export default PoemCard;
