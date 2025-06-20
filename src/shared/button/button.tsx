"use client";
import React, { FC } from "react";
interface Props {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string
}

const Wrapper: FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const ButtonElement: FC<Props> = ({ text, className, children, onClick }) => {
  const defaultStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "self-start",
    justifyContent: "center",
    padding: "8px 24px",
    gap: "8px",
    height: "48px",

    fontFamily: "Fira Sans Condensed",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",

    color: "rgba(237, 238, 240, 0.96)",
    backgroundColor: "#111113",
    borderRadius: "24px",
  };
  return (
    <button style={defaultStyle} className={className} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

const Icon: React.FC<Props> = ({ className, icon }) => {
  return <a className={className}>{icon}</a>;
};

const Button = {
  Wrapper,
  ButtonElement,
  Icon,
};

export default Button;
