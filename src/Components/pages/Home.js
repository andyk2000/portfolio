import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../App.css';
import HeroSection from '../HeroSection';
import NavBar from '../NavBar';
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;