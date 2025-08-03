import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";



export default function FinishedOrders() {
    
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1, 2, 3].map((ele, index) => {
                  return (
                    <Box key={index} className={"orders-name-price"}>
                      <img
                        src={"/img/cutlet.webp"}
                        className={"order-dish-img"}
                        alt={"Cutlet"}
                      />
                      <p className={"title-dish"}>Cutlet</p>
                      <Box className={"price-box"}>
                        <p>$11</p>
                        <img src={"/icons/close.svg"} alt="" />
                        <p>3</p>
                        <img src={"/icons/pause.svg"} alt="" />
                        <p style={{ marginLeft: "15px" }}>${11*3}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${11*3*2}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} alt="" />
                  <p>Delivery cost</p>
                  <p>$5</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Total</p>
                  <p>${33*2+5}</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
              alt=""
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}