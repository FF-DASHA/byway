"use client";
import { FC } from "react";
import Image from "next/image";
import imageCourse from "./image.jpg";
import styles from "./styles.module.css";

export const CourseArr = [
  {
    id: "one",
    title: "Beginner’s Guide to Design",
    description: "By Ronald Richards",
    price: "$149.9",
    image: imageCourse,
  },
  {
    id: "two",
    title: "Beginner’s Guide to Design",
    description: "By Ronald Richards",
    price: "$149.9",
    image: imageCourse,
  },
  {
    id: "three",
    title: "Beginner’s Guide to Design",
    description: "By Ronald Richards",
    price: "$149.9",
    image: imageCourse,
  },
  {
    id: "four",
    title: "Beginner’s Guide to Design",
    description: "By Ronald Richards",
    price: "$149.9",
    image: imageCourse,
  },
];

const CourseList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {CourseArr.map((item) => (
        <div key={item.id}>
          <Image className={styles.img} src={item.image} alt="Course Cover" />
          <div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
            <span className={styles.price}>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
