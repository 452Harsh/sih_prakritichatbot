'use client'
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config.js';
import MessageParser from '../ChatBot/MessageParser.js';
import ActionProvider from '../ChatBot/ActionProvider.js';


const ChatBot = () => {
    return (
        <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
        />
    )
}

export default ChatBot