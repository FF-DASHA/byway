import React, { FC } from "react";
import { CourseState, initialState } from "../course-slice";
import Image from "next/image";
import img from "./image.jpg";
import styles from "./styles.module.css";

interface Props {
  course?: CourseState;
}

const CourseCard: FC<Props> = ({ course }) => {
  return (
    <div>
      <Image className={styles.img} src={img} alt="Course Cover" />
      <div className={styles.container}>
        <h4 className={styles.title}>{course?.title ?? initialState.title}</h4>
        <p className={styles.description}>
          {course?.description ?? initialState.description}
        </p>
        <span className={styles.price}>
          {course?.price ?? initialState.price}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;
