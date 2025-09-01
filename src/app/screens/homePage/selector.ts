import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrivePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes
);

export const retriveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retriveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
