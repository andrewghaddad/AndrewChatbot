import React from 'react';
import Message from './Message';

function Chat({ messages }) {
  return (
    <div className="chat-container">
      {messages.map((msg) => (
        <Message sender={msg.sender} text={msg.text} time={msg.time} />
      ))}
    </div>
  );
}

export default Chat;