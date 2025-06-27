import React, { FC, useState } from "react";
import Menu, { PropsMenu } from "./menu";

export const ListEditProfile = [
  { id: "one", text: "Courses" },
  { id: "two", text: "Purchases" },
  { id: "three", text: "Shopping cart" },
  { id: "four", text: "Wishlist" },
  { id: "five", text: "Log out" },
];

const MenuCompound = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  return (
    <>
      <Menu.List>
        {ListEditProfile.map((item) => (
          <Menu.Item
            key={item.id}
            style={{
              backgroundColor: selectedItemId === item.id ? "black" : "white",
              color: selectedItemId === item.id ? "white" : "#1C2024",
            }}
            onClick={() => setSelectedItemId(item.id)}
          >
            {item.text}
          </Menu.Item>
        ))}
      </Menu.List>
    </>
  );
};

const Item: FC<PropsMenu & React.HTMLProps<HTMLDivElement>> = ({
  children,
  style,
  onClick,
}) => {
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

Menu.Item = Item;

export default MenuCompound;
