import { useAutoScroll } from "./useAutoScroll";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

export function ChatMessages({ chatMessages }) {
  const messagesRef = useAutoScroll([chatMessages]);
  return (
    <div className="chat-messages-container" ref={messagesRef}>
      {chatMessages.length === 0 ? (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      ) : (
        chatMessages.map(({ message, sender, id }) => {
          return <ChatMessage message={message} sender={sender} key={id} />;
        })
      )}
    </div>
  );
}
