import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";

export default function WelcomeEncrypt({ setWelcomeOpen }) {
  // States
  const [encrypt, setEncrypt] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const [decrypt, setDecrypt] = useState(false);

  // Funtions
  const handleDecrypt = () => {
    setEncrypt(true);
    setProgressBar(true);
    setTimeout(() => {
      setProgressBar(false);
      setDecrypt(true);
    }, 3000);
  };

  const handleHome = () => {
    setWelcomeOpen(false);
    const now = new Date();
    const expTime = now.getTime() + 1 * 3600 * 1000;
    localStorage.setItem("decryptScreen", expTime);
  };

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "50vh",
        width: { sm: "50vw" },
        border: "1px dotted Black",
        borderRadius: "2rem",
        mt: "25vh",
        ml: { sm: "25vw" },
        background: !decrypt ? "navy" : "green",
      }}
    >
      <Grid item>
        <Typography variant="h3" align="center" sx={{ color: "white" }}>
          {!encrypt
            ? "Encrypted Page!"
            : progressBar
            ? "Decrypting..."
            : decrypt && "Hello! I am Masud"}
        </Typography>
        {decrypt && (
          <Typography variant="h6" align="center" sx={{ color: "white" }}>
            Welcome to my Portfolio
          </Typography>
        )}
        {progressBar && <LinearProgress />}
        <Typography
          variant="subtitle2"
          align="center"
          sx={{
            color: "darkgreen",
            background: "white",
          }}
        >
          {!encrypt &&
            "FiytjQxjKhc3J 0DdW5rd4ibodfXPH VT0PPVhMRPnuZ8= f+iSAc9Qea+fe+pNebOc 4vVKYYN47um+0/16LiE74VsZZcLi IhNMC72WcUWb+tsGdi wd8Bu/amKw6oFJw9rNpg=="}
        </Typography>
      </Grid>
      <Grid item>
        {!progressBar && (
          <Button
            variant="contained"
            sx={{ color: "white", mt: 2 }}
            color="error"
            onClick={!decrypt ? handleDecrypt : handleHome}
          >
            {!encrypt ? "Decrypt" : decrypt && "View Page"}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
