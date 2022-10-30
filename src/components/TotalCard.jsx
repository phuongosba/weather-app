import { Grid, CardMedia, Typography } from "@mui/material";

import React from "react";
import moment from "moment";

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join(" ");
}

const TotalCard = ({ item }) => {
  let urlIcon = `${
    process.env.REACT_APP_IMAGE_URL + item.weather[0].icon
  }@2x.png`;
  return (
    <Grid xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
      <Typography variant="h6">
        {moment(item["dt_txt"]).format("LT")}
      </Typography>
      <Typography variant="h6">{moment(item["dt_txt"]).format("L")}</Typography>
      <CardMedia
        component="img"
        sx={{ width: 150, margin: "0 auto" }}
        image={urlIcon}
      />
      <Typography variant="h6">
        {titleCase(item.weather[0].description)}
      </Typography>
    </Grid>
  );
};

export default TotalCard;
