
import React, { useState, useEffect } from "react";

const getMessages = () => [
  { id: 100, text: "Hey", author: "Ram" },
  { id: 101, text: "Hello!", author: "Dennis" },
  { id: 102, text: "How is it going?", author: "Ram" }
];

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(getMessages());
  }, []);

  return messages;
};

const Messages = () => {
  const messages = useMessages();

  return (
    <ul>
      {messages.map(({ id, text, author }) => (
        <li key={id}>
          {author}: {text}
        </li>
      ))}
    </ul>
  );
};

export default Messages;