import { useState } from "react";
import { Chatbot } from "supersimpledev";
import SpinnerImage from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  async function sendMessage() {
    if (inputText != "") {
      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
        },
      ];
      setChatMessages(newChatMessages);
      setInputText("");
      setChatMessages([
        ...newChatMessages,
        {
          message: <img className="spinner" src={SpinnerImage} />,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }
  }
  function handleKeyDown(event) {
    if (event.key == "Enter") {
      sendMessage();
    } else if (event.key == "Escape") {
      setInputText("");
    }
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={handleKeyDown}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
