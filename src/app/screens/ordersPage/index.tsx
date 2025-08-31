import { SyntheticEvent, useState } from "react"
import { Box, Container, Stack } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import PausedOrders from "./PausedOrders";
import FinishedOrders from "./FinishedOrders";
import ProcessOrders from "./ProcessOrders";
import "../../../css/order.css"

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  /** HANDLERS **/
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className={"order-container"}>
        <Stack className={"order-left"}>
           <TabContext value={value}>
              <Box className={"order-nav-frame"}>
                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs 
                      value={value} 
                      onChange={handleChange} 
                      aria-label="basic tabs example"
                      className={"table-list"}
                      >
                        <Tab label="PAUSED ORDERS" value={"1"} />
                        <Tab label="PROCESS ORDERS" value={"2"} />
                        <Tab label="FINISHED ORDERS" value={"3"} />  
                    </Tabs>
                 </Box>
              </Box> 
              <Stack className={"order-main-content"}>
                <PausedOrders />
                <ProcessOrders />
                <FinishedOrders />
              </Stack>
           </TabContext>
        </Stack> 

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
              <span className={"order-user-name"}>KHAN </span>
              <span className={"order-user-prof"}> USER</span>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon fontSize="medium" />
              </div>
              <div className={"spec-address-txt"}>Do not exist</div>
            </Box>
          </Box>
          <Box className={"order-info-box"}>
            <input
              type={"text"}
              name={"cardNumber"}
              placeholder={"Card number : **** 4090 2002 7495"}
              className={"card-input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"cardPeriod"}
                placeholder={"10 / 24"}
                className={"card-half-input"}
              />
              <input
                type={"text"}
                name={"cardCVV"}
                placeholder={"CVV : 010"}
                className={"card-half-input"}
              />
            </div>
            <input
              type={"text"}
              name={"cardCreator"}
              placeholder={"Shohjahon Juraev"}
              className={"card-input"}
            />
            <div className={"cards-box"}>
              <img src={"/icons/western-card.svg"} />
              <img src={"/icons/master-card.svg"} />
              <img src={"/icons/paypal-card.svg"} />
              <img src={"/icons/visa-card.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>   
    </div>
  )
}


  