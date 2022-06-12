
import "../assets/css/Pengumuman.css"
import React, { useEffect , useState} from 'react';
import axios from "axios";

export default function Pengumuman() {
   const [announcements,setAnnouncements] = useState([]);
   
   function openWin() {
      window.open("https://kampusmerdeka.kemdikbud.go.id/announcement");
    }

    useEffect(() => {
      axios.get("http://localhost:1337/api/announcements")
        .then(response =>{
         console.log("response:", response);
          console.log("data:", response.data);
          setAnnouncements(response.data.data);
        });
    }, []);
   
  return (
    <div className='Pengumuman'>
               <div className='container-fluid pt-5 pb-5  layanan bg-light'>
         <h2 className='text-center'> Terkini</h2>
         <div className='row justify-content-center' >

             {announcements.map((Announcement) => (
               <div  className='col-lg-2 col-lg-offset-1'>
                  <div className='card' >
                  <div key={Announcement.id} className='card-body'>
                  <p className='card-subtitle text-muted'>{Announcement.attributes.Date}</p>
                  <p className='card-title'>{Announcement.attributes.Title}</p>
                  </div>
                  </div>
               </div>
            ) ) }
            <div className='text-center'>
               <a href="#" className='text-align: center'>
               <button type="button" className='btn btn-dark btn-lg tombol3 justify-content-center'  onClick={openWin}  style= {{marginTop:"20px"}} >
               Pengumuman Lainnya
               </button>
               </a>
            </div>
         </div>
      </div>       
    </div> 
  );
}
