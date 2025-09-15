import React from "react";

type ButtonProps = {
  text: string;
};

const buttonStyles = {
  button: {
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer",
    backgroundColor: "#EA4330",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

function Buttons({ text }: ButtonProps) {
  return <button style={buttonStyles.button}>{text}</button>;
}

export default Buttons;
