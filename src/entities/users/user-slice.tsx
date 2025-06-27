import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  email: string;
  name: string;
  language: string;
  headline: string;
  description: Array<string>;
  socials: Array<string>;

  // courses: Array<Course.id>;
  // reviews: Array<Review.id>;
  // purchases: Array<Purchase.id>;
}

export const initialState: UserState = {
  id: "",
  email: "",
  name: "Ronald Richards",
  language: "English",
  headline: "Web developer, UX/UI Designer, and Teacher",
  description: [
    "Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results \n \n Areas of Expertise \n - User Experience (UX) Design \n - User Interface (UI) Design \n - Information Architecture \n - Interaction Design \n - Visual Design \n - Usability Testing \n - Wireframing and Prototyping \n - Design Thinking \n \n Professional Experience Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.",
  ],
  socials: ["twitter.com/johndoe", "instagram.com/johndoe", "byway.com"],
};

export const user = createSlice({
  name: "user",
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

export const { get, update, remove } = user.actions;

export default user.reducer;
