import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1>My Portfolio</h1>
            <p>Welcome to my portfolio! Here you can find some of the projects I've worked on.</p>
            <div className="projects">
                {/* Add your project details here */}
                <div className="project">
                    <h2>Project Title 1</h2>
                    <p>Description of project 1.</p>
                </div>
                <div className="project">
                    <h2>Project Title 2</h2>
                    <p>Description of project 2.</p>
                </div>
                <div className="project">
                    <h2>Project Title 3</h2>
                    <p>Description of project 3.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;