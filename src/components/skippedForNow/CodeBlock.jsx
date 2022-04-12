import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function CodeBlock({ data }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Grid container>
        <Grid item sx={{ border: "3px double black", p: 1, m: 1 }}>
          <Typography variant="body2" noWrap component="div">
            {data}
          </Typography>

          <Button variant="outlined" color="inherit" size="small">
            Run Code
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
