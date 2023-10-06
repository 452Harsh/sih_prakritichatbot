import React from "react";

class MessageParser{
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase=message.toLowerCase();
    if (lowercase.includes("start")) {
      this.actionProvider.handleHello();
    }
    
  }
}

export default MessageParser;
