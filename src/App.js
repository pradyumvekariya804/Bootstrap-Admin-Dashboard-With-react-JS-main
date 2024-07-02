// /* import logo from './logo.svg'; */
// import './App.css';

// function App() {
//   return (
//     <>
//     Hello World
//     </>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import ServicesSection from './components/ServicesSection.js';
import AboutUs from './components/AboutUs.js';
import Blog from './components/Blog.js';
import './App.css';

const App = () => {
    return (
        <div className="App">
            {/* <Header /> */}
            <HeroSection />
            <ServicesSection />
            <AboutUs />
            <Blog/>
        </div>
    );
}

export default App;
