import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";



const activeUsers = [
    { memberNick: "Martin", memberImage: "/img/martin.webp" },
    { memberNick: "Justin", memberImage: "/img/justin.webp" },
    { memberNick: "Rose", memberImage: "/img/rose.webp" },
    { memberNick: "Nusret", memberImage: "/img/nusret.webp" }
];

export default function ActiveUsers() { 
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"cards-frame"}>
                         <CssVarsProvider>
                            {activeUsers.length !== 0 ? (
                                activeUsers.map((ele, index) => {
                            return (
                                <Card key={index} className={"card"}>
                                    <CardOverflow>
                                        <AspectRatio ratio="0.98">
                                            <img src={ele.memberImage} alt="" />
                                        </AspectRatio>
                                    </CardOverflow>

                                    <CardOverflow>
                                            <Stack className={"member-nickname"}>
                                                <Typography>
                                                    {ele.memberNick}
                                                </Typography>
                                            </Stack>
                                    </CardOverflow>
                                </Card>
                            );  
                      })
                    ) : (
                        <Box className="no-data">No Active Users!</Box>
                    )} 
                </CssVarsProvider>    
                </Stack>
              </Stack>
            </Container>
        </div>
    );
}