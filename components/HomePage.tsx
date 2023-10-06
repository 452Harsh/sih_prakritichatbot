import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Section from './Section'
import Footer from './Footer'
import ChatBot from './ChatBot'
// import ChatBots from '../pages/Chatbot'


const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Section />
            <Footer />
            <ChatBot />
            {/* <ChatBots/> */}
        </div>
    )
}

export default HomePage