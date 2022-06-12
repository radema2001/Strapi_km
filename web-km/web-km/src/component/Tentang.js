
import "../assets/css/Tentang.css"
import React, { useEffect , useState} from 'react';
import axios from "axios";

export default function Tentang() {
   const [tentangs,setTentangs] = useState([]);
   

    useEffect(() => {
      axios.get("http://localhost:1337/api/tentangs")
        .then(response =>{
         console.log("response:", response);
          console.log("data:", response.data);
          setTentangs(response.data.data);
        });
    }, []);
   
  return (
   <div className='Tentang'>
   <div className='container-fluid pt-5 pb-5 bg-light'>
<h2 className='container text-center'> Berita Kampus Merdeka</h2>
<div className='row pt-4 gx-4 gy-4' >

 {tentangs.map((Tentang) => (
   <div  className='col-md-4 text-center'>
      <div className='card' style= {{width:"18rem"}} >
      <div key={Tentang.id} className='card-body'>
      <h5 className='card-title'>{Tentang.attributes.Title}</h5>
      <h6 className='card-subtitle text-muted'>{Tentang.attributes.Date}</h6>
      </div>
      </div>
   </div>
) ) }
<div className='text-center'>
   <a href="#" className='text-align: center'>
   <button type="button" className='btn btn-dark btn-lg tombol3 justify-content-center'>
   Pengumuman Lainnya
   </button>
   </a>
</div>
</div>
</div>       
</div> 

  );
}
