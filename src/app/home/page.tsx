import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import people from "./img/img-people.png";
import man1 from "./img/img-man.png";
import man2 from "./img/img-man2.png";
import categoriesImg from "../../entities/categories/ui/image.jpg";
import CategoriesCard from "../../entities/categories/ui/categories-card";
import { categoriesArr } from "../../entities/categories/ui/categories-list";
import CourseList from "../../entities/courses/ui/course-card-render";
import UserList from "../../entities/users/ui/user-card-render";
import ButtonContainer from "../../shared/button/compount";
import { Title } from "../../shared/title/title";


const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.flexContainer}>
          <div className={styles.info}>
            <Title
              className={styles.title}
              text={"Unlock Your Potential with Byway"}
            />
            <p className={styles.text}>
              Welcome to Byway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and
              we're here to guide you on your journey to success.{" "}
            </p>
            <ButtonContainer
              className={""}
              text={"Start your instructor journey"}
            />
          </div>
          <Image src={people} alt={""} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.flexContainer}>
          <div>
            <Title className={styles.subtitle} text="250+" />
            <p className={styles.smallText}>Courses by our best mentors</p>
          </div>
          <div>
            <Title className={styles.subtitle} text="100+" />
            <p className={styles.smallText}>Experienced mentors</p>
          </div>
          <div>
            <Title className={styles.subtitle} text="2000+" />
            <p className={styles.smallText}>Users learning something new</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.topFlex}>
          <Title className={styles.title} text="Top Categories" />
          <ButtonContainer className={""} text={"See all"} />
        </div>
        <div className={styles.flexContainer}>
          {categoriesArr.map((category) => (
            <CategoriesCard.Wrapper key={category.id}>
              <CategoriesCard.ImageElement src={categoriesImg} />
              <CategoriesCard.Info>
                <h2>{category.label}</h2>
                <p>{category.description}</p>
              </CategoriesCard.Info>
            </CategoriesCard.Wrapper>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.topFlex}>
          <Title className={styles.title} text="Top Courses" />
          <ButtonContainer className={""} text={"See all"} />
        </div>
        <CourseList />
      </section>

      <section className={styles.section}>
        <div className={styles.topFlex}>
          <Title className={styles.title} text="Top Instructors" />
          <ButtonContainer className={""} text={"See all"} />
        </div>
        <UserList/>
      </section>

      <section className={styles.section}>
        <div className={styles.flexContainer}>
          <Image src={man1} alt={""} />
          <div className={styles.info}>
            <Title className={styles.title} text={"Become an Instructor"} />
            <p className={styles.textInstructor}>
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </p>
            <ButtonContainer
              className={""}
              text={"Start your instructor journey"}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.flexContainer}>
          <div className={styles.info}>
            <Title
              className={styles.title}
              text={"Transform your life through education"}
            />
            <p className={styles.textInstructor}>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <ButtonContainer className={""} text={"Checkout courses"} />
          </div>
          <Image src={man2} alt={""} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
