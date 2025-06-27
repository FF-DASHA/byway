"use client";
import React, { useState } from "react";
export interface PropsInput {
  className?: string;
  title?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  label?: string;
}

const Container: React.FC<PropsInput> = ({ children, className }) => {
  const defaultStyle: React.CSSProperties = {
    width: "100%",
  };
  return (
    <div style={defaultStyle} className={className}>
      {children}
    </div>
  );
};

const Label: React.FC<PropsInput> = ({ label }) => {
  const defaultStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#0F172A",
  };
  return <label style={defaultStyle}>{label}</label>;
};

const Field: React.FC<PropsInput> = ({ title, className, ...props }) => {
  const [focus, setFocus] = useState(false);
  const defaultStyle: React.CSSProperties = {
    padding: "12px 24px",
    height: "48px",
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: focus ? "rgba(28, 32, 36, 0.92)" : "black",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: "24px",
  };
  return (
    <>
      <input
        title={title}
        style={defaultStyle}
        className={className}
        onFocus={() => setFocus(true)}
        {...props}
      />
    </>
  );
};

const Icon: React.FC<PropsInput> = ({ className, icon }) => {
  return <a className={className}>{icon}</a>;
};

const Input = {
  Container,
  Field,
  Icon,
  Label,
};

export default Input;
