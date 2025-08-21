
import {useState, SyntheticEvent} from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css"


export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order-page"}>
     <Container className="order-container">
      <Stack className="order-left">
        <TabContext value={value}>
          <Box className={"order-nav-frame"}>
            <Box sx={{ borderBottom:1, borderColor: "divider"}}>
              <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className={"table_list"}
              >
                <Tab label="PAUSED ORDERS" value={"1"} />
                <Tab label="PROCESS ORDERS" value={"2"} />
                <Tab label="FINISHED ORDERS" value={"3"} />

              </Tabs>
            </Box>
          </Box>
          <Stack>
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
              <div>
                <img
                src={"/icons/user-badge.svg"}
                className={"order-user-prof-img"}
                />
              </div>
            </div>
            <span className={"order-user-name"}>Edward</span>
            <span className={"order-user-prof"}>User</span>
            <hr className="line"/>
            <p>Busan  South Korea</p>
          </Box>
        </Box>
        <Box className="box">
         <input type="text" placeholder="       Card Number: 545 6456 754 6654" className="payment-input" />

         <Box className={"box-input"}>
          <input type="number" placeholder="  07/25" className="date-input"/>
          <br/>
          <input type="text" placeholder="  CVV: 010" className="cvv-input" />
        </Box>

        <input type="text" placeholder="  Justin Robertson" className="card-name"/>

        <Box className={"card-img"}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.wstlybXjf3i1JeprVS6thQHaEy&pid=Api&P=0&h=220" alt=" bu yerda rasm bpr"  width={"50px"} height={"40px"}/>
          <img src="https://tse3.mm.bing.net/th?id=OIP.wstlybXjf3i1JeprVS6thQHaEy&pid=Api&P=0&h=220" alt=" bu yerda rasm bpr"  width={"50px"} height={"40px"}/>
          <img src="https://tse3.mm.bing.net/th?id=OIP.wstlybXjf3i1JeprVS6thQHaEy&pid=Api&P=0&h=220" alt=" bu yerda rasm bpr"  width={"50px"} height={"40px"}/>
          <img src="https://tse3.mm.bing.net/th?id=OIP.wstlybXjf3i1JeprVS6thQHaEy&pid=Api&P=0&h=220" alt=" bu yerda rasm bpr"  width={"50px"} height={"40px"}/>
        </Box>

        </Box>



      </Stack>

     </Container>
    </div>
  );
}
