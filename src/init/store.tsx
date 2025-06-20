import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlice from "../entities/categories/category-slice";

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
});

const rootReducer = combineReducers({
  category: categorySlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
