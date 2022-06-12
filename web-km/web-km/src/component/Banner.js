import React from "react";
import "../assets/css/Banner.css";

export default function Banner() {
  //alert
function handleClick (){
  alert ("Silahkan Daftar Masuk Kampus Merdeka")
}
//Data and Time
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  return (
    <div className="Banner">
      <div className=" clearfix pt-5 Banner-info">
        <h1 className="main-box w-50">Ambil Kendali Masa Depanmu</h1>
        <p>
          Kampus Merdeka adalah cara terbaik berkuliah. Dapatkan kemerdekaan
          untuk membentuk masa depan yang sesuai dengan aspirasi kariermu.
        </p>
        <button
          onClick={handleClick}
          className="btn btn-lg tombolbanner"
          style={{ backgroundColor: "tomato", color: "white" }}
        >
          Daftar Program
        </button>
        <div className="date">
          <span id="time"></span>
        </div>
    </div>
    </div>

  );
}