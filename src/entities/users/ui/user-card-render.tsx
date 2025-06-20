"use client";
import { FC } from "react";
import Image from "next/image";
import avatar from "./image.png";
import styles from "./styles.module.css";

export const UserArr = [
  {
    id: "one",
    image: avatar,
    name: "Ronald Richards",
    headline: "UI/UX Designer",
  },
  {
    id: "two",
    image: avatar,
    name: "Ronald Richards",
    headline: "UI/UX Designer",
  },
  {
    id: "three",
    image: avatar,
    name: "Ronald Richards",
    headline: "UI/UX Designer",
  },
  {
    id: "four",
    image: avatar,
    name: "Ronald Richards",
    headline: "UI/UX Designer",
  },
];

const UserList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {UserArr.map((user) => (
        <div className={styles.container} key={user.id}>
          <Image className={styles.img} src={user.image} alt="Avatar" />
          <h1 className={styles.name}>{user.name}</h1>
          <p className={styles.headline}>{user.headline}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
