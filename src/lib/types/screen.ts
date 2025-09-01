import ChosenProduct from "../../app/screens/productsPage/ChosenProduct";
import { Member } from "./member";
import { Product } from "./products";

//** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

//** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//** PRODUCTS PAGE **/
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

//** ORDERS PAGE **/
