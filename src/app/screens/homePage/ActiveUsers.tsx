import React from "react";
import {Box, Container, Stack} from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography} from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";


const activeUsers = [
 {memberNick: "Martin", memberImage: "/img/martin.webp"},
 {memberNick: "Justin", memberImage: "/img/justin.webp"},
 {memberNick: "John", memberImage: "/img/rose.webp"},
 {memberNick: "Edward", memberImage: "/img/nusret.webp"},
];

// export default function ActiveUsers() {
//   return(
//   <div className={"active-users-frame"}>
//     <Container>
//       <Stack className={"main"}>
//         <Box className={"category-title"}>Active Users</Box>
//         <Stack className={'cards-frame'}>
//           <CssVarsProvider>

//           </CssVarsProvider>

//         </Stack>
//       </Stack>
//     </Container>
//   </div>);
// }

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((user, index) => (
                  <Card key={index} variant="outlined" sx={{ width: 200, textAlign: 'center', p: 2 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={user.memberImage} alt={user.memberNick} />
                      </AspectRatio>
                    </CardOverflow>
                    <Typography>{user.memberNick}</Typography>
                  </Card>
                ))
              ) : (
                <Box className="no-data">No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
