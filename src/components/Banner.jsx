import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Banner() {
  return (
    <Box sx={{ background: "yellowgreen" }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{ mx: { xs: "25%", sm: "40%", md: 0 } }}
          md={2}
        >
          <img
            src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/267740685_108629521678468_1916008514138108488_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE3NutN4XFP9TIRNlX07DIcjfzMOfGRTICN_Mw58ZFMgNaobAJVHhwv4XHYNmzKcpeWhnsyzHednPlnqvEnGaX6&_nc_ohc=tpwQ4zaoAIwAX9R6g1p&_nc_oc=AQkaEEokpv93mnXdmgafSebJyUmK_z6GmAiDsT5hB6k8JdqAmy_K6hFYCRxfuE9xXGQ&_nc_ht=scontent.fdac22-1.fna&oh=00_AT_WS65K_orbs0Hjg9lNA5KA1ylHKkZXeeg6GC_W1Ki8Ww&oe=625AC62C"
            alt="Imon"
            style={{ borderRadius: "25rem", height: "150px", width: "150px" }}
          />
        </Grid>
        <Grid item md={10}>
          <Grid container flexDirection="column">
            <Grid item>
              <Grid container sx={{ px: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography variant="h6">Hello! I am</Typography>
                  <Typography variant="subtitle1">MASUD AL IMRAN</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Web developer, Software engineer
                  </Typography>
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography gutterBottom variant="h5">
                    Education
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Graduation: BRAC University
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Major: Computer Science
                  </Typography>
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <Typography gutterBottom variant="h5">
                    Current Job
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company: BISMIB TECHNOLOGY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Designation: Web developer
                  </Typography>
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <Typography gutterBottom variant="h5">
                    Future Plan
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    - Game Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    - Mobile App Development
                  </Typography>
                  <Divider variant="middle" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                align="center"
                sx={{ border: "3px double black" }}
              >
                This is a Portfolio site for others to view & Work planner site
                for me
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
