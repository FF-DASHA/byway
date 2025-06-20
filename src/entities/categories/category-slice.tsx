import { createSlice } from "@reduxjs/toolkit";
import image from "./ui/image.jpg";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
export interface CategoryState {
  id: string;
  label: string;
  description: string;
  cover?: StaticImageData;
  // courses: Array<Course.id>
}

export const initialState: CategoryState = {
  id: "one",
  label: "Astrology",
  description: "11 Courses",
  cover: image,
  // courses: Array<Course.id>
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    get: (state) => {
      return state;
    },
    update: (state, action) => {
      Object.assign(state, action.payload);
    },

    remove: (state, action) => {},
  },
});

export const { get, update, remove } = categorySlice.actions;

export default categorySlice.reducer;
