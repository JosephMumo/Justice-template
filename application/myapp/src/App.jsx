import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Landing from './components/Landing';
import Client from './components/Client';
import Faqs from './components/Faqs';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Landing />
            <Client />
            <Faqs />
            <Contact/>
        </div>
    )
}
export default App;