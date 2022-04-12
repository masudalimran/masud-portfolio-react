import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function CurrentlyWorking() {
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ textDecoration: "underline" }}
      >
        Currently Working On...
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(4)].map((x, i) => (
          <Grid item key={i}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
