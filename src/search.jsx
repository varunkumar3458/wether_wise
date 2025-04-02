import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./search.css";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

let Search = ({ SetData, setLoading }) => {
  let [city, setCity] = useState("");
  let [Err, setErr] = useState(false);
  let [open, setOpen] = useState(true);

  let getWeatherInfo = async () => {
    try {
      setLoading(true);
      let res = await fetch(
        `${process.env.REACT_APP_URL}${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );

      let result = await res.json();
      console.log(result);
let weatherInfo = {
    city: city,
    humidity: result.main.humidity,
    pressure: result.main.pressure,
    temp: result.main.temp,
    wind: result.wind.speed,
    cond: result.weather[0].description,
    condition: true,
    coordinates: {
        lon: result.coord.lon,
        lat: result.coord.lat
    },
    country: result.sys.country,
    sunrise: result.sys.sunrise,
    sunset: result.sys.sunset,
    visibility: result.visibility,
    description: result.weather[0].description
};
      setCity("");
      setLoading(false);
      return weatherInfo;
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  let handleinp = (ev) => {
    setCity(ev.target.value);
  };

  let handleform = async (ev) => {
    try {
      ev.preventDefault();
      let info = await getWeatherInfo();
      SetData(info);
    } catch (Err) {
      setErr("Sorry, no such place found in my API");
    }
  };

  return (
    <form onSubmit={handleform}>
      <div className="inp">
        <TextField value={city} onChange={handleinp} label="Enter City" />
        <Button className="sub_btn" type="submit">
          Get Weather
        </Button>
      </div>
      {Err && (
        <Collapse in={open}>
          <Alert
            className="Alert"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {Err}
          </Alert>
        </Collapse>
      )}
    </form>
  );
};

export default Search;
