import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { CategoryState, initialState } from "../category-slice";
import img from "./image.jpg";

interface Props {
  categories?: CategoryState;
  src?: StaticImageData;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper: FC<Props> = ({ children, className }) => {
  const defaultStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    width: "500px",
    backgroundColor: "#F0F0F3",
  };
  return (
    <div style={defaultStyle} className={className}>
      {children}
    </div>
  );
};

const ImageElement: FC<Props> = ({ categories, src }) => {
  const defaultStyle: React.CSSProperties = {
    marginBottom: "24px",
  };
  return <Image style={defaultStyle} src={img} alt="Course Cover" />;
};

const Info: FC<Props> = ({ className, categories }) => {
  const styleLabel: React.CSSProperties = {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "29px",
    color: "#111113",
  };
  const styleDescription: React.CSSProperties = {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "rgba(28, 32, 36, 0.74)",
  };
  return (
    <div className={className}>
      <h4 style={styleLabel}>{categories?.label ?? initialState.label}</h4>
      <p style={styleDescription}>
        {categories?.description ?? initialState.description}
      </p>
    </div>
  );
};

const CategoriesCard = {
  Wrapper,
  ImageElement,
  Info,
};

export default CategoriesCard;
