import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import ProductsPage from ".";

const selectProductsPage = (state: AppRootState) => state.productsPage;

export const retriveRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant
);

export const retriveChosenProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.chosenProduct
);

export const retriveProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products
);