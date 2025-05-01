import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Home.css'; // Assuming you might want to add specific styles for Home

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Navigation />
            <main>
                <h1>Welcome to My Personal Website</h1>
                <p>This is the landing page where you can find information about me and my work.</p>
                <p>Feel free to explore the different sections of the website!</p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;