import * as React from "react";
import Card from "@mui/material/Card";
import "./detail.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function data({ data }) {
  let rainUrl =
    "https://res.cloudinary.com/dfd52un8n/image/upload/v1700933457/istockphoto-114313632-612x612_hkwdw3.jpg";
  let sunnyUrl =
    "https://res.cloudinary.com/dfd52un8n/image/upload/v1700933924/original_jwjlok.jpg";
  let coldUrl =
    "https://res.cloudinary.com/dfd52un8n/image/upload/v1700934014/istockphoto-160840799-612x612_a5majv.jpg";

  if (data.condition === false) {
    return <></>;
  }

  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={
            data.humidity > 80 ? rainUrl : data.temp < 15 ? coldUrl : sunnyUrl
          }
        />
        <div className="carddel">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.city} &nbsp;&nbsp;
              {data.humidity > 80 ? (
                <ThunderstormIcon />
              ) : data.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
            <p>Temperature : {data.temp}&deg;C</p>
            <p>Humidity: {data.humidity}</p>
            <p>Pressure : {data.pressure}</p>
            <p>Wind : {data.wind}</p>
            <p>Longitude : {data.coordinates.lon}, Latitude : {data.coordinates.lat}, Country : {data.country}</p>
            <p>Sunrise : {new Date(data.sunrise * 1000).toLocaleTimeString()}, Sunset : {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
            <p>Visibility : {data.visibility} meters</p>
            <p>The Weather can be described as feels like {data.feelsLike}
              &deg;C and Condtion is {data.cond}</p>
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
