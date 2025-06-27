"use client";
import React, { FC } from "react";
interface Props {
  text?: string;
  className?: string;
}

export const Title: FC<Props> = ({ text, className }) => {
  const defaultStyle: React.CSSProperties = {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "40px",
    lineHeight: "48px",
    color: "rgba(28, 32, 36, 0.92)",
  };
  return <h1 className={`${defaultStyle} ${className}`}>{text}</h1>;
};
