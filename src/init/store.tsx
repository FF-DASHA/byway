import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { courseSlice } from "../entities/courses/course-slice";
import { user } from "../entities/users/user-slice";
import { categorySlice } from "../entities/categories/category-slice";
// import sessionSlice from "../entities/session/session-slice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    course: courseSlice.reducer,
    user: user.reducer,
    // session: sessionSlice,
  },
});

const rootReducer = combineReducers({
  user: user,
  category: categorySlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
