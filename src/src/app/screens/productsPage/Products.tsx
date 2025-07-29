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


const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-webp" },
    { productName: "Kebab", imagePath: "/ img/kebab-fresh.webp" },
]

export default function Products() {
        return (
            <div className={"products"}>
                <Container>
                {products.length !== 0 ? (
                                products.map((ele, index) => {
                            return (
                    <Stack flexDirection={"column"} alignItems={"center"}>
                        <Stack className={"avtar-big-box"}>

                        </Stack>

                        <Stack className={"dishes-filter-action"}>

                        </Stack>


                        <Stack className={"list-category-section"}>
                        </Stack>
                    
                    </Stack>
                              );  
                            })
                          ) : (
                              <Box className="no-data">No Active Users!</Box>
                          )} 
                </Container>
            
            </div>
        );
}