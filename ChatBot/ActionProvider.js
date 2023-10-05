import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Great! Let's Discover Your Prakriti type. To do that,I'll ask you a series of questions. Please answer each one honestly, and we'll determine your Prakriti type based on your response"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello },
        });
      })}
    </div>
  );
};

export default ActionProvider;
