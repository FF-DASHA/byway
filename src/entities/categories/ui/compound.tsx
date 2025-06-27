import React from "react";
import CategoriesCard from "./categories-card";

const CategoriesCardContainer = () => {
  return (
    <CategoriesCard.Wrapper>
      <CategoriesCard.ImageElement />
      <CategoriesCard.Info />
    </CategoriesCard.Wrapper>
  );
};

export default CategoriesCardContainer;
