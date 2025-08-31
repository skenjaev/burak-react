import React from "react"
import { Container, Button, Box, Stack, colors, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { RemoveRedEye } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from '@mui/material/Pagination';
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setProducts } from "./slice";
import { Product } from "../../lib/types/product";
import { create } from "domain";
import { retrieveProducts } from "./selector";
import "../../../css/products.css";

/** REDUX SLICE & SELECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts, (products) => ({
    products
  }));

const products = [
    { productName: "Cutlet", imagePath: "img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  ];



export default function Products() {
    return (
        <div className={"products"}>
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                   
                    <Stack className={"avatar-big-box"}>
                        <Box className={"product-text"}>Burak Restaurant</Box>
                        <Stack className={"single-search-big-box"}>
                            <input
                               type={"search"}
                               className={"single-search-input"}
                               name={"singleResearch"}
                               placeholder={"Type here"}
                            />
                             <Button
                               className={"single-button-search"}
                               variant="contained"
                               endIcon={<SearchIcon />}
                             >
                              Search
                             </Button>
                        </Stack>
                    </Stack>

                    <Stack className={"dishes-filter-section"}>
                       <Stack className={"dishes-filter-box"}>
                          <Button
                            variant={"contained"}
                            color={"primary"}
                            className={"order"}
                          >
                            New
                          </Button>
                          <Button
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                          >
                           Price
                          </Button>
                          <Button
                            variant={"contained"}
                            color={"secondary"}
                            className={"order"}
                          >
                           Views
                          </Button>
                       </Stack>   
                    </Stack>

                    <Stack className={"list-category-section"}>
                       <Stack className={"product-category"}>
                          <div className={"category-main"}>
                             <Button variant={"contained"} color={"secondary"}>
                               OTHERS
                             </Button>
                             <Button variant={"contained"} color={"secondary"}>
                               DESERT
                             </Button>
                             <Button variant={"contained"} color={"secondary"}>
                               DRINK
                             </Button>
                             <Button variant={"contained"} color={"secondary"}>
                              SALAD
                             </Button>
                             <Button variant={"contained"} color={"primary"}>
                              DISH
                             </Button>
                         </div>
                       </Stack>

                       <Stack className={"product-wrapper"}>
                  {products.length !== 0 ? (
                    products.map((product, index) => {
                      return (
                        <Stack 
                          key={ index} 
                          className={"product-card"}
                          >
                          <Stack
                            className={"product-img"}
                            sx={{ backgroundImage: `url(${product.imagePath})` }}
                          >
                            <div className={"product-sale"}>Normal size</div>
                            <Button className={"shop-btn"}>
                                <img src="/icons/shopping-cart.svg"
                                style={{display:"flex"}}/>
                            </Button>
                            <Button className={"view-btn"} sx={{ right: "36px" }}>
                              <Badge badgeContent={20} color="secondary">
                                <RemoveRedEyeIcon
                                  sx={{
                                    color: 0 ? "gray" : "white",
                                  }}
                                />
                              </Badge>
                            </Button>
                          </Stack>
                          <Box className={"product-desc"}>
                            <span className={"product-title"}>
                              {product.productName}
                            </span>
                            <div className={"product-desc"}>
                              <MonetizationOnIcon />
                              {12}
                            </div>
                          </Box>
                        </Stack>
                      );
                    })
                  ) : (
                    <Box className="no-data">Products are not available!</Box>
                  )}
                </Stack>
              </Stack>

                    <Stack className={"pagination-section"}>
                              <Pagination count={3} />
                     </Stack>

                </Stack>
            </Container>

            <div className={"brands-logo"}>
                <Container className={"family-brands"}>
                   <Box className={"brand-text"}>Our Family Brands</Box>
                   <Stack className={"logo-list"}>
                    <Stack className={"logo"}>
                       <img src="/img/gurme.webp" alt="" />     
                    </Stack>
                    <Stack className={"logo"}>
                       <img src="/img/gurme.webp" alt="" />     
                    </Stack>
                    <Stack className={"logo"}>
                       <img src="/img/gurme.webp" alt="" />     
                    </Stack>
                    <Stack className={"logo"}>
                       <img src="/img/gurme.webp" alt="" />     
                    </Stack>
                   </Stack>
                </Container>
            </div> 

            <div className={"our-address"}>
                <Container className={"address-blog"}>
                   <Box className={"address-text"}>Our address</Box>
                  <iframe style={{ marginTop: "60px"}}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"
                  width={"1300px"}
                  height={"500px"}
                  referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </Container>
            </div>

        </div>
    )
 }