

import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { url } from "inspector";


const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },


];

export default function Products() {
    return (
            <div className={"products"}>
                <div className={"body"} />
                <Container>
                    <Stack flexDirection={"column"} alignItems={"center"}>
                        <Stack className={"avatar-big-box"}>
                        <Stack className={"top-text"}>
                            <p>Burak Restaurant</p>
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
                        </Stack>
                        <Stack className={"dishes-filter-section"}>
                            <Stack className={"dishes-filter-box"}>
                            <Button
                                variant={"contained"}
                                className={"order"}
                                color={ "primary"}
                                >
                                New
                                </Button>
                                <Button
                                variant={"contained"}
                                className={"order"}
                                color={"secondary"}
                                >
                                Price
                                </Button>
                                <Button
                                variant={"contained"}
                                className={"order"}
                                color={"secondary"}
                                >
                                Views
                            </Button>
                    </Stack>
                    </Stack>
                  <Stack className={"list-category-section"}>
                    <Stack className={"product-category"}>
                        <div className={"category-main"}>
                        <Button variant={"contained"} color={"secondary"}>
                            Other
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Dessert
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Drink
                        </Button>
                        <Button variant={"contained"} color={"secondary"}>
                            Salad
                        </Button>
                        <Button variant={"contained"} color={"primary"}>
                            Dish
                        </Button>
                        </div>
                    </Stack>
                    <Stack className={"product-wrapper"}>
                        {products.length !== 0 ? (
                        products.map((product, index) => {
                            return (

                            <Stack key={index} className={"product-card"}>
                                <Stack
                                className={"product-img"}
                                //  sx={{ backgroundImage: url(`${product.imagePath}`) }}
                                sx={{ backgroundImage: `url(${product.imagePath})` }}

                                >
                                <div className={"product-sale"}>Normal Size</div>
                                <Button className={"shop-btn"}>
                                    <img
                                    src={"/icons/shopping-cart.svg"}
                                    style={{ display: "flex" }}
                                    />
                                </Button>
                                <Button className={"view-btn"} sx={{ right: "36px" }}>
                                    <Badge
                                        badgeContent={20}
                                        color="secondary"
                                    >
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
                    <Pagination
                        count={3}
                        page={1}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                                }}
                                {...item}
                                color={"secondary"}
                            />
                        )}
                    />
                    </Stack>
                </Stack>
                </Container>
                <div className={"brands-logo"}>
                <Container className={"family-brands"}>
                    <Box className={"category-title"}>Our Family Brands</Box>
                    <Stack className={"brand-list"}>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                    </Stack>
                </Container>
                </div>

                <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                    <Box className={"title"}>Our address</Box>
                    {/* <iframe
                        style={{ marginTop: "60px" }}
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d69.2267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!2skr"

                        src="https://maps.app.goo.gl/vDQru23Y4GUJ4bmU9"
                        width="1320"
                        height="500"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}

                      <iframe
                      style={{marginTop: "60px" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.               089166601352!2d127. 12734717545293!3d35.             84681707253432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.                                   1!3m3!1m2!1s0x35702334621b3bb9%3A0xd2ef0eee158844e1!2z7KCE67aB64yA7ZWZ6rWQIOyghOyjvOy6oO2NvOyKpA!5e0!3m2!1sen! 2skr!4v1737604006790!5m2!1sen!2skr"
                      width="1320"
                      height="500"
                      loading="lazy">
                      </iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    );
};