import React from 'react';

function Message({ sender, text, time }) {
  return (
    <div className={`message ${sender}`}>
      <div className="bubble">
        <p>{text}</p>
        <span className="time">{time}</span>
      </div>
    </div>
  );
}

export default Message;