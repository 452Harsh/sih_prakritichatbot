'use client'
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config.js';
import MessageParser from '../ChatBot/MessageParser.js';
import ActionProvider from '../ChatBot/ActionProvider.js';


const ChatBot = () => {
    return (
        <div className='m-96'>
            <div className='text-2xl'>
                harsh
            </div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>

    )
}

export default ChatBot