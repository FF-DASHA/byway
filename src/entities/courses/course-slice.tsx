import { createSlice, EntityId } from "@reduxjs/toolkit";
import image from "./ui/image.jpg";
import { StaticImageData } from "next/image";

export interface CourseState {
  id: string;
  title: string;
  description: string;
  cover?: StaticImageData;
  price: number;
}

export const initialState: CourseState = {
  id: "one",
  title: "Beginner’s Guide to Design",
  description: "By Ronald Richards",
  cover: image,
  price: 149.9,
};

export const courseSlice = createSlice({
  name: "course",
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

export const { get, update, remove } = courseSlice.actions;

export default courseSlice.reducer;
