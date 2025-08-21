import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";
import HomePage from ".";

const selectHomepage = (state: AppRootState) => state.homePage;
export const retrievePopularDishes = createSelector(
  selectHomepage,
  (HomePage) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
  selectHomepage,
  (HomePage) => HomePage.newDishes
);


export const retrieveTopUsers = createSelector(
  selectHomepage,
  (HomePage) => HomePage.topUsers
);