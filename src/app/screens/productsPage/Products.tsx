import React from "react";

import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { styled } from '@mui/material/styles';
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
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
    <div className="products">
        <Container>
            <Stack flexDirection={"column"} alignItems={"right"}>
                <Stack className="avatar-big-box">
                    <Box className="title">Burak Restaurant</Box>
                    <Box className="search-box">
                        <input placeholder="Type here" className="search-input" />
                        <Button variant="contained" className="search-button">Search</Button>
                    </Box>
                        
                </Stack>
                <Stack className="dishes-filter-section">
                    <Stack className="dishes-filter-box">
                        <Button variant="contained" color="primary" className="order">New</Button>
                        <Button variant="contained" color="secondary" className="order">Price</Button>
                        <Button variant="contained" color="secondary" className="order">Views</Button>
                    </Stack>
                </Stack>
                
                {/* Dishes List */}
                <Stack className="list-category-section">
                    <Stack className="category-button-list">
                        <Button variant="contained" color="primary" className="order">Dish</Button>
                        <Button variant="contained" color="secondary" className="order">Salad</Button>
                        <Button variant="contained" color="secondary" className="order">Drink</Button>
                        <Button variant="contained" color="secondary" className="order">Dessert</Button>
                        <Button variant="contained" color="secondary" className="order">Other</Button>
                    </Stack>
                    <Stack className={"product-wrapper"}>
                        {products.length !== 0 ? (
                            products.map((product, index) => {
                            return (
                                <Stack key={index} className={"product-card"}>
                                <Stack className={"product-img"} sx={{ position: "relative",
                                    backgroundImage: `url(${product.imagePath})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    "&:hover .view-btn": {
                                        opacity: 1,
                                        visibility: "visible",
                                    },
                                    }}
                                >
                                    <div className={"product-sale"}>Normal Size</div>

                                    <Button className={"shop-btn"}>
                                    <img
                                        src={"/icons/shopping-cart.svg"}
                                        style={{ display: "flex" }}
                                    />
                                    </Button>

                                    <Button
                                    className="view-btn"
                                    sx={{right: "36px"}}
                                    >
                                    <Badge badgeContent={20} color="secondary">
                                        <RemoveRedEyeIcon sx={{ color: "gray" }} />
                                    </Badge>
                                    </Button>
                                </Stack>
                                <Box className={"product-desc"}>
                                    <span className={"product-title"}>
                                    {product.productName}
                                    </span>
                                    <div className={"product-desc"}>
                                    <MonetizationOnIcon />
                                    7
                                    </div>
                                </Box>
                                </Stack>
                            );
                            })
                        ) : (
                            <Box className={"no-data"}>Products are not available</Box>
                        )}
                    </Stack>
                </Stack>
                <Stack className={"pagination-section"}>
                     <Pagination count={3} page={1} renderItem={(item) => (
                    <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon, }} {...item} color={"secondary"} />
                 )}
                />      
                </Stack>
            </Stack>
        </Container>

        <div className={"brands-logo"}>
                <Container>
                  <Box className="brand-text">Our Family Brands </Box>
                  <Stack className="brand-cards">
                    <Box className="brand-card">
                      <img src="/img/seafood.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                      <img src="/img/doner.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                      <img src="/img/sweets.webp" alt="" />
                    </Box>
                    <Box className="brand-card">
                      <img src="/img/gurme.webp" alt="" />
                    </Box>
                  </Stack>
                </Container>
        </div>
        <div className={"address"}>
            <Container>
                <Stack className={"address-area"}>
                    <Box className={"title"}>Our address</Box>
                    <iframe
                    style={{ marginTop: "60px" }}
                    src="https://www.google.com/maps?q=Jeonju+Station+South+Korea&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="1300"
                    height="500"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Stack>
            </Container>
        </div>
    </div>
    );
}