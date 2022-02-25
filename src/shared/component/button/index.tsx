import "./button.css";
import React from "react";

interface Props {
  handleButton: Function;
  nameOfButton: string;
}

const Button = ({ handleButton, nameOfButton }: Props) => {
  return (
    <>
      <button className="default-button" onClick={() => handleButton()}>
        {nameOfButton}
      </button>
    </>
  );
};

export default Button;
