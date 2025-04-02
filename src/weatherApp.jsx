import React, { useState } from "react";
import Search from "./search.jsx";
import Detail from "./detail.jsx";
import "./weatherApp.css";
import * as bootstrap from "react-bootstrap";

export default function Weather() {
  let [data, SetData] = useState({
    cond: "",
    humidity: "",
    pressure: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    wind: "",
    city: "",
    feels_Like: "",
    condition: false,
  });
  let [loading, setLoading] = useState(false);

  return (
    <>
      <h1>Weather App</h1>
      <Search SetData={SetData} setLoading={setLoading} />
      {loading ? (
        <bootstrap.Spinner
          className="loader"
          animation="border"
          variant="secondary"
        />
      ) : (
        <Detail data={data} />
      )}
      <footer>
        <hr />
        <div class="footer-cont">
          <p>Check More Projects on &nbsp; </p>
          <a href="https://github.com/armaan-deep">
            <img
              class="foot-img"
              src="https://res.cloudinary.com/dltqxxy9f/image/upload/f_auto,q_auto/v1/images/Dictonary/qaq1j1vzmx7qy4nbphkg"
              alt="git"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/armaandeep">
            <img
              class="foot-img"
              src="https://res.cloudinary.com/dltqxxy9f/image/upload/f_auto,q_auto/v1/images/Dictonary/c8g8hd9riop6bsskpofa"
              alt="ll"
            ></img>
          </a>
        </div>
      </footer>
    </>
  );
}
