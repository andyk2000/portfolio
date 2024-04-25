import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../../App.css';
import HeroSection from '../HeroSection';
import NavBar from '../NavBar';

function Home () {
    return (
        <>
            <HeroSection />
        </>
    )
}

export default Home;