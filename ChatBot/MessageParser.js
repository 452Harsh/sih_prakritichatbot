import React from "react";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase.includes("start")) {
      this.actionProvider.handleHello();
    } else if (lowercase.includes("prakriti")) {
      this.actionProvider.prakriti();
    }
  }
}

export default MessageParser;
