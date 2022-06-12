// import React from "react";
// import "../assets/css/Berita.css";

// export default function () {
//   return (
//     <div className="Berita">
//       <div className="Berita-title">
//         <h1>Apa itu Kampus Merdeka?</h1>
//         <h2>
//           Program persiapan karier yang komprehensif guna mempersiapkan generasi
//           terbaik Indonesia
//         </h2>
//         <p>
//           Kampus Merdeka merupakan bagian dari kebijakan Merdeka Belajar oleh
//           Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik
//           Indonesia yang memberikan kesempaatan bagi mahasiswa/i untuk mengasah
//           kemampuan sesuai bakat dan minat dengan terjun langsung ke dunia kerja
//           sebagai persiapan karier masa depan.
//         </p>
//       </div>
//       <img src="https://kampusmerdeka.kemdikbud.go.id/static/media/library.84ee2daf.webp"
//       className="col-md-6 float-md-end mb-3 crop-img"
//       />
//     </div>
//   );
// }


import "../assets/css/Berita.css"
import React, { useEffect , useState} from 'react';
import axios from "axios";

export default function Berita() {
   const [beritas,setBeritas] = useState([]);
   
    useEffect(() => {
      axios.get("http://localhost:1337/api/beritas?populate=*")
        .then(response =>{
         console.log("response:", response);
          console.log("data:", response.data);
          setBeritas(response.data.data);
        });
    }, []);
   
  return (
    <div className="Berita">

          {beritas.map((Berita) => (
               
                  <div key={Berita.id} >
                  <h1>{Berita.attributes.Title}</h1>
                  <p>{Berita.attributes.deskripsi}</p>
                  {/* <img src={Berita.attributes.image.data.attributes.formats.small.url} /> */}
               </div>
            ) ) }

         </div>
  );
}