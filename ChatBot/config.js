import { createChatBotMessage } from "react-chatbot-kit";
const botName = "PrakritiChatbot";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Welcome ! Enter 'Start' to begin your Journey of discovery you Prakriti type`
    ),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
