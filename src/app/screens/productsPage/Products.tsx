import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  radioClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AspectRatio, Card, CardOverflow } from "@mui/joy";
import { Collections, Padding } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retriveProducts } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/products";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

//** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriver = createSelector(retriveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

const brendsImg = [
  { imagePath: "/img/gurme.webp" },
  { imagePath: "/img/seafood.webp" },
  { imagePath: "/img/sweets.webp" },
  { imagePath: "/img/doner.webp" },
];

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriver);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "creaatedAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  //** HANDLERS **/
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      <Container>
        <Stack flexDirection="column" alignItems="center">
          <Stack className="avatar-big-box">
            <Box className="avatark">Burak Restaurant</Box>
            <Stack className=" type-serrch" direction="row" alignItems="center">
              <input
                type={"search"}
                name={"singleResearch"}
                className="taxt-filed"
                placeholder="Type here"
                // variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key == "Enter") searchProductHandler();
                }}
                // sx={{
                //   "& fieldset": { border: "none" },
                // }}
                // size="small"
              />

              <Button
                className="search"
                variant="contained"
                color="primary"
                endIcon={<SearchIcon />}
                onClick={searchProductHandler}
              >
                Search
              </Button>
            </Stack>
          </Stack>

          <Stack className="dishes-filter-section">
            <Button
              variant={"contained"}
              color={
                productSearch.order === "createdAt" ? "primary" : "secondary"
              }
              className={"order"}
              onClick={() => searchOrderHandler("createdAt")}
            >
              New
            </Button>

            <Button
              variant="contained"
              className="order"
              color={
                productSearch.order === "productPrice" ? "primary" : "secondary"
              }
              onClick={() => searchOrderHandler("productPrice")}
            >
              Price
            </Button>

            <Button
              variant="contained"
              className="order"
              color={
                productSearch.order === "productViews" ? "primary" : "secondary"
              }
              onClick={() => searchOrderHandler("productViews")}
            >
              Views
            </Button>
          </Stack>

          <Stack className={"product-wrapper"}>
            <Box className="orders">
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DISH
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.DISH)}
              >
                DISH
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.SALAD
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
              >
                SALAD
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DRINK
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
              >
                DRINK
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DESERT
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() =>
                  searchCollectionHandler(ProductCollection.DESERT)
                }
              >
                DESSERT
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.OTHER
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
              >
                OTHER
              </Button>
            </Box>

            <Stack className="product-photo">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack
                      key={product._id}
                      className="product-card"
                      onClick={() => chooseDishHandler(product._id)}
                    >
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: ` url(${imagePath})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="product-sale">{sizeVolume}</div>

                        <Button
                          className="shop-btn"
                          onClick={(e) => {
                            onAdd({
                              _id: product._id,
                              quantity: 1,
                              name: product.productName,
                              price: product.productPrice,
                              image: product.productImages[0],
                            });
                            e.stopPropagation();
                          }}
                        >
                          <img
                            src="/icons/shopping-cart.svg"
                            alt="cart"
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "#e3c08d",
                              padding: "5px",
                              borderRadius: "25px",
                            }}
                          />
                        </Button>

                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge
                            badgeContent={product.productViews}
                            color="secondary"
                          >
                            <RemoveRedEyeIcon
                              sx={{
                                fontSize: "22px",
                                color:
                                  product.productViews === 0 ? "gray" : "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>

                        <div className="product-price">
                          <MonetizationOnIcon
                            sx={{
                              color: "#e3c08d",
                              width: "28px",
                              height: "28px",
                            }}
                          />
                          {product.productPrice}$
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no_data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "red",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#cc0000",
                      },
                    },
                  }}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="famliy-brends">
        <Stack className="brends">
          <Box className="brends-text">Our Family Brands</Box>

          <Box className="brends-imgs">
            {brendsImg.map((ele, index) => (
              <Box key={index} className="imagess-wrapper">
                <img
                  className="imaje"
                  src={ele.imagePath}
                  alt={`brand-${index}`}
                />
              </Box>
            ))}
          </Box>
        </Stack>
      </div>

      <div className="address-section">
        <Container>
          <Stack className="address-area">
            <Box className="title">Our address</Box>

            <Box className="map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8653326898995!2d126.9782919154966!3d37.56653597979888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f34f1b4e2f%3A0xf56e19923c8a5407!2sGyeongbokgung%20Palace!5e0!3m2!1sen!2skr!4v1657896543242!5m2!1sen!2skr"
                width="100%"
                height="500"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
