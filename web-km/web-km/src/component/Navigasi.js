import React from "react";
import "../assets/css/Navigasi.css"
import LogoImg2 from '../assets/images/mahasiswa (3).webp'

export default function Navigasi() {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src="https://kampusmerdeka.kemdikbud.go.id/static/media/logo-pendidikan.92aef756.webp" alt="logo" />
        <img src={LogoImg2} alt="logo" className="d-inline-block align-text-top" />
    </div>
      <ul>
        <li><a href="#">Beranda</a></li>
        <li><a href="/Program">Program</a></li>
        <li><a href="#" className="btn btn-light" style={{color: "black"}}><i className="fa-solid fa-user"></i>Masuk</a></li>
      </ul>
    </div>
  );
}