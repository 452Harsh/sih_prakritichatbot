import React from "react";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  optionMessage = (option) => {
    const userInput = this.createClientMessage(option);
    this.addMessageToState(userInput);
  };
  prakriti = () => {
    const message = this.createChatBotMessage(
      "Your prakriti type is Pitta prakriti"
    );
    this.addMessageToState(message);
  };
  handleHello = () => {
    const message = this.createChatBotMessage(
      "Great! Let's Discover Your Prakriti type. To do that,I'll ask you a series of questions. Please answer each one honestly, and we'll determine your Prakriti type based on your response"
    );
    this.addMessageToState(message);
    const question_1 = this.createChatBotMessage("Body Frame", {
      widget: "question_1",
    });
    this.addMessageToState(question_1);
    //  const userInput=this.createClientMessage("hi");
    //  this.addMessageToState(userInput);
  };
  question_2 = () => {
    const question_2 = this.createChatBotMessage("Nails Colour", {
      widget: "question_2",
    });
    this.addMessageToState(question_2);
  };
  question_3 = () => {
    const question_3 = this.createChatBotMessage("Finger Nail size", {
      widget: "question_3",
    });
    this.addMessageToState(question_3);
  };
  question_4 = () => {
    const question_4 = this.createChatBotMessage("Skin Texture", {
      widget: "question_4",
    });
    this.addMessageToState(question_4);
  };
  question_5 = () => {
    const question_5 = this.createChatBotMessage("Hair Texture", {
      widget: "question_5",
    });
    this.addMessageToState(question_5);
  };
  end = () => {
    const end = this.createChatBotMessage(
      "Congratulations on completing your Prakruti assessment! To discover your unique Prakruti type and understand which characteristics it relies on, Enter'prakriti'. Additionally, for personalized food recommendations tailored to your Prakruti type, type '@food.' We're here to provide you with valuable insights for a healthier and more balanced lifestyle."
    );
    this.addMessageToState(end);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
