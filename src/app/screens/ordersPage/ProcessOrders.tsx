import { Button, dividerClasses } from "@mui/material";
import {Box, Stack} from "@mui/material";
import Botton from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  return(
    <TabPanel value={"2"}>
      <Stack>
        {[1,2].map((ele, index) => {
          return(
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1,2,3].map((ele2, index2 ) =>{
                  return(
                    <Box key={index2} className={"orders-name-price"}>
                      <img
                      src={"/img/kebab.webp"}
                      className={"order-dish-img"}
                      />
                    <p className={"title-dish"}>Kebab</p>
                    <Box className={"price-box"}>
                      <p>$11</p>
                      <img src={"/icons/close.svg"}/>
                      <p>2</p>
                      <img src={"/icons/pause.svg"} alt="rasm bor" />
                      <p style={{marginLeft:"50px"}}>$22</p>
                    </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                 <p>Product price</p>
                 <p>22$</p>
                 <img src={"/icons/plus.svg"} style={{marginLeft:"20px"}} alt="image" />
                 <p>delivery cost</p>
                 <p>$2</p>
                 <img src="/icons/pause.svg" style={{marginLeft:"20px"}} alt="image" />
                 <p>Total</p>
                 <p>$24</p>
                </Box>
                <p className={"data-compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                <Button variant="contained" className={"verify-button"}>
                  Verify to Fullfil
                </Button>
              </Box>

            </Box>
          );
        })}
         {false && (
                  <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    <img src="/icons/noimage-list.svg" style={{width:300, height:300}} />
                  </Box>
         )}
      </Stack>
    </TabPanel>
  )
}