import React, { useState, SyntheticEvent } from "react";
import { Box, Container, Stack, Tabs, Tab, TextField } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import PersonIcon from "@mui/icons-material/Person";
import "../../../css/order.css";

const OrdersPage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table_list"
                >
                  <Tab
                    value="1"
                    label={
                      <span className="tab-label">
                        PAUSED ORDERS
                      </span>
                    }
                  />

                  <Tab
                    value="2"
                    label={
                      <span className="tab-label">
                        PROCESS ORDERS
                      </span>
                    }
                  />
                  <Tab
                    value="3"
                    label={
                      <span className="tab-label">
                        FINISHED ORDERS
                      </span>
                    }
                  />
                </Tabs>
              </Box>

              <Stack className="order-main-content">
                <PausedOrders />
                <ProcessOrders />
                <FinishedOrders />
              </Stack>
            </Box>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <div className="order-user-img1">
                  <img
                    src="/img/img.jpg"
                    className="order-user-avatar"
                    alt="User avatar"
                  />
                  <div className="order-user-icon-box">
                    <PersonIcon
                      sx={{
                        backgroundColor: "rgba(131, 118, 118, 0.5)",
                        color: "white",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
                <Box className="liner">
                  <span className="order-user-name">Senior </span> <br />
                  <span className="order-user-prof">USER</span>
                </Box>{" "}
                <hr className="horizantal" />
                <Box className="order-user-location">
                  <LocationOnIcon sx={{ marginTop: "10px" }} />
                  <p> South Korea, Ulsan</p>
                </Box>
              </div>

              <Box className="card-box">
                <TextField className="card-input" placeholder="card-number" />

                <Box className="card-details">
                  <TextField
                    variant="outlined"
                    placeholder="07 / 24"
                    className="card-input"
                  />
                  <TextField
                    className="card-input"
                    variant="outlined"
                    placeholder="CVV: 010"
                  />
                </Box>

                <TextField
                  className="card-input"
                  variant="outlined"
                  placeholder="senior"
                />
                <Box className="payment-methods">
                  <img src="/img/Western-union.jpg" alt="Western Union" />
                  <img src="/img/mastercard.jpg" alt="Mastercard" />
                  <img src="/img/Paypal.svg" alt="PayPal" />
                  <img src="/img/Visadebitcard.jpg" alt="Visa" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default OrdersPage;
