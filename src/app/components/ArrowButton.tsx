// components/ArrowButton.tsx
import React from "react";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full ${
        direction === "left" ? "left-2" : "right-2"
      }`}
      onClick={onClick}
    >
      {direction === "left" ? "◀" : "▶"}
    </button>
  );
};

export default ArrowButton;
