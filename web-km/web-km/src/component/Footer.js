import React from 'react'
import "../assets/css/Footer.css"

export default function Footer() {

   // topfunction
   function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
  return (
    <div className="Footer">
    <div className='container-fluid pt-5 pb-5 text-sec' >
         <div className='row justify-content-center' >
            <div className='col-lg-2 col-lg-offset-1' >
            <img src="https://kampusmerdeka.kemdikbud.go.id/static/media/logo-kemendikbud.ae86719b.webp" alt="logofooter" />  
            </div>
            <div className='col-lg-5 col-lg-offset-1'>
               <h4>Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI </h4>
               <h4>Direktorat Jenderal Pendidikan Tinggi</h4>
               <p>Telepon: 021 57946104 </p>
               <p>Pusat Panggilan ULT DIKTI 126</p>
               <p>Jl. Jenderal Sudirman, Senayan, Jakarta 10270</p>
            </div>
            <div className='col-lg-2 col-lg-offset-1'>
               <h4>Navigasi</h4>
               <p>Beranda</p>
               <p>Tentang Kami</p>
               <p>Berita</p>
               <p>Pengumuman</p>
               <p>FAQ</p>
               <p>Program</p>
               <p>Daftar</p>
            </div>
            <div className='col-lg-2 col-lg-offset-1'>
               <h4>Tautan Eksternal</h4>
               <p>Kampus Merdeka for Patner</p>
            </div>
            </div>
         </div> ,
    <div className='container-fluid pt-5 pb-5 text-sec'>
    <div className='row justify-content-center' >
            <div className='col-lg-2 col-lg-offset-1'   onClick={topFunction}>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-arrow-up' viewBox="0 0 16 16">
                  <path fillRule='evenodd' d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </div>
       <div className='col-lg-5 col-lg-offset-1'>
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-facebook'></i>
       </div>
       <div className='col-lg-4 col-lg-offset-1' >
          <p>Copyright 2021 by Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI</p>
          <p>Photos by ITS, ITERA, and UI</p>
       </div>
    </div>
 </div>
 </div>

  );
}
