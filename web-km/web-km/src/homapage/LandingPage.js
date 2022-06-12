import React from 'react'
import Navigasi from '../component/Navigasi'
import Banner from '../component/Banner'
import Pengumuman from '../component/Pengumuman'
import Berita from '../component/Berita'
import Tentang from '../component/Tentang'
import Footer from '../component/Footer'
import "../assets/css/LandingPage.css"



export default function LandingPage() {
    return (
        <div className='LandingPage'>
            <Navigasi />
            <Banner />
            <Pengumuman />
            <Berita />
            <Tentang />
            <Footer />

        </div>
    )
}