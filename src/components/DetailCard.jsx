import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import moment from "moment";

const DetailCard = ({ city, weatherData, weatherIcon }) => {
  return (
    <Grid container xs={10} justifyContent="center" sx={{ flexGrow: 1 }}>
      <Grid item xs={12} sm={6}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h2" mb={2}>
            {Math.floor(weatherData.list[0].main.temp)}&deg;C
          </Typography>
          <Typography variant="p" mb={2} sx={{ fontSize: "20px" }}>
            Humidity: {weatherData.list[0].main.humidity}
          </Typography>
          <Typography variant="p" mb={2} sx={{ fontSize: "20px" }}>
            Min Temp: {Math.floor(weatherData.list[0].main.temp_min)}
          </Typography>
          <Typography variant="p" mb={2} sx={{ fontSize: "20px" }}>
            Max Temp: {Math.floor(weatherData.list[0].main.temp_max)}
          </Typography>
          <Typography variant="p" mb={2} sx={{ fontSize: "20px" }}>
            Cloud Cover: {weatherData.list[0].clouds.all}
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} sm={6} textAlign="center">
        <CardContent>
          <Typography variant="h4">{city}</Typography>
          <Typography variant="h6">{moment().format("lll")}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 200, margin: "0 auto" }}
          image={weatherIcon}
        />
        <CardContent>
          <Typography variant="h5">
            {weatherData.list[0].weather[0].main}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default DetailCard;
