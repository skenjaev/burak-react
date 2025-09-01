import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value="2">
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-main-box">
              <Box className="order-box-scroll">
                {[1, 2,3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className="orders-name-price">
                      <img
                        src={"/img/kebab.webp"}
                        className="order-dish-img"
                        alt="Dish image"
                      />
                      <p className="title-dish">Kebab</p>
                      <Box className="price-box">
                        <p>$11</p>
                        <img src={"/icons/close.svg"} alt="Close icon" />
                        <p> 2</p>
                        <img src={"/icons/pause.svg"} alt="Pause icon" />
                        <p style={{ marginLeft: "15px" }}>$22</p>
                      </Box>
                    </Box>
                  );
                })}

                <Box className="product-price">
                 <div className="products">
                 <p>Product price</p>
                  <p>$24</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="Plus icon"
                  />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                    alt="Pause icon"
                  />
                  <p>Total</p>
                  <p>$48</p>
                 </div>

                 <p className="data-compl">
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                
                <Button variant="contained"  color="primary" className="verify-buttonn">
                 VERIFY
                </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {/* Ma'lumot yo'q bo‘lsa */}
        {false && (
          <Box display="flex" flexDirection="row" justifyContent="center">
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
              alt="No orders available"
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}