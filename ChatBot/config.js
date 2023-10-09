import { createChatBotMessage } from "react-chatbot-kit";
import Question from "../components/Question";
const botName = "PrakritiChatbot";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Welcome ! Enter 'Start' to begin your Journey of discovery you Prakriti type`
    ),
  ],
  widgets: [
    {
      widgetName: "question_1",
      widgetFunc: (props) => <Question {...props} />,
      props: {
        next: "question_2",
        options: [
          {
            option: "Narrow",
            id: 1,
          },
          {
            option: "Medium",
            id: 2,
          },
          {
            option: "Wide",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "question_2",
      widgetFunc: (props) => <Question {...props} />,
      props: {
        next: "question_3",
        options: [
          {
            option: "Reddish",
            id: 1,
          },
          {
            option: "Pale",
            id: 2,
          },
          {
            option: "Pink",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "question_3",
      widgetFunc: (props) => <Question {...props} />,
      props: {
        next: "question_4",
        options: [
          {
            option: "Small",
            id: 1,
          },
          {
            option: "Medium",
            id: 2,
          },
          {
            option: "Large",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "question_4",
      widgetFunc: (props) => <Question {...props} />,
      props: {
        next: "question_5",
        options: [
          {
            option: "Thick",
            id: 1,
          },
          {
            option: "Thin",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "question_5",
      widgetFunc: (props) => <Question {...props} />,
      props: {
        next: "end",
        options: [
          {
            option: "Thick",
            id: 1,
          },
          {
            option: "Thin",
            id: 2,
          },
        ],
      },
    },
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
