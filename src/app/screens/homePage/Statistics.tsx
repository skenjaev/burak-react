import React from "react";
import { Box, Container, Divider, Stack } from "@mui/material";

export default function Statistics() {
  return(
  <div className={"static-frame"}>
    <Container>
      <Stack className="info">
        <Stack className="static-box">
          <Box className="static-num">12</Box>
          <Box className="static-text">Restaurant</Box>
        </Stack>

        {/* <Divider width="2" height="64" bg="#E3C08D" /> */}
        <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

        <Stack className="static-box">
          <Box className="static-num">8</Box>
          <Box className="static-text">Experience</Box>
        </Stack>

        <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

        <Stack className="static-box">
          <Box className="static-num">50+</Box>
          <Box className="static-text">Menu</Box>
        </Stack>

        <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

        <Stack className="static-box">
          <Box className="static-num">200+</Box>
          <Box className="static-text">Clients</Box>
        </Stack>
      </Stack>
    </Container>
  </div>);
}