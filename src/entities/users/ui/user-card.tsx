"use client";
import { FC } from "react";
import { UserState } from "../user-slice";
import Image from "next/image";
import avatar from "./image.png";
import styles from "./styles.module.css";

interface Props {
  user?: UserState;
  name?: string;
  headline?: string;
}

const UserCard: FC<Props> = ({ name, headline }) => {
  return (
    <div className={styles.wrapperRender}>
      <Image className={styles.img} src={avatar} alt="Avatar" />
      <h1 className={styles.name}>{name ?? "Ronald Richards"}</h1>
      <p className={styles.headline}>{headline ?? "UI/UX Designer"}</p>
    </div>
  );
};

export default UserCard;
