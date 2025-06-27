"use client";
import React, { FC, useState } from "react";
interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  className?: string;
  title?: string;
}

const TextArea: FC<Props> = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  const defaultStyle: React.CSSProperties = {
    overflow: "hidden",
    padding: "12px 24px",
    width: "840px",
    height: "520px",
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: focus ? "rgba(28, 32, 36, 0.92)" : "black",
    backgroundColor: "#FCFCFD",
    borderColor: "transparent",
    borderRadius: "24px",
  };
  return (
    <textarea style={defaultStyle} {...props} onFocus={() => setFocus(true)} />
  );
};

export default TextArea;
