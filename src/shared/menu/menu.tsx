"use client";
import React, { FC } from "react";

// обёрка всего меню
export interface PropsMenu {
  value?: boolean;
  setValue?: (value: boolean) => boolean | void;
  toggleMenu?: () => void;
  menuOpen?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties; 
  onClick?: () => void;     
}

export const NavWrapper: FC<PropsMenu> = ({ children }) => {
  return <div>{children}</div>;
};

const Nav: FC<PropsMenu> = (props) => {
  return (
    <>
        {props.children}
    </>
  );
};

const List: FC<PropsMenu> = ({ children }) => {
  return <div>{children}</div>;
};

const Item: FC<PropsMenu & React.HTMLProps<HTMLDivElement>> = ({ children, style, onClick }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        width: "360px",
        height: "53px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#1C2024",
        borderRadius: "24px",
        border: "1px solid #1C2024",
        ...style, 
      }}
      onClick={onClick} 
    >
      {children}
    </div>
  );
};


export const NavList = [
  {
    id: "one",
    text: "Another link",
  },
  {
    id: "two",
    text: "Navigation menu item",
  },
];

const Menu = {
  Nav,
  List,
  Item,
};

export default Menu;
