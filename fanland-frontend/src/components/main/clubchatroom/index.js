import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./index.css";

const socket = io.connect("http://localhost:4000");

export default function ClubChatRoom({ userName }) {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const messageContainer = document.getElementById("message-container");

  const textChange = (e) => {
    setMessage(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (message !== "") {
      socket.emit("chat-message", { author: userName, message: message });
      setChats([...chats, { author: userName, message: message }]);
      setMessage("");
    }
  };

  const getChatsfromApi = (id) => {
    setChats(chatsData);
    console.log(id);
  };

  useEffect(() => {
    console.log("use Effect");
    if (loading) getChatsfromApi(id);
    setLoading(false);
    socket.on("receive-message", (chat) => {
      setChats([...chats, { author: chat.author, message: chat.message }]);
    });
    if (messageContainer)
      messageContainer.scrollTo(0, messageContainer.scrollHeight);
  }, [id, chats, loading, messageContainer]);

  return !loading ? (
    <div className="container">
      <div
        className="border rounded border-secondary message-container p-3"
        id="message-container"
      >
        {chats.map((chat, index) => {
          let type = chat.author === userName ? "send" : "receive";
          return (
            <div key={index} className={`message-box rounded p-4 ${type}`}>
              {chat.message}
            </div>
          );
        })}
      </div>
      <div>
        <form
          action="#"
          onSubmit={onFormSubmit}
          className="d-flex"
          id="send-container"
        >
          <input
            type="text"
            id="messageInput"
            className="container"
            placeholder="Type..."
            value={message}
            onChange={textChange}
          />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  ) : (
    <div>
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
}

const chatsData = [
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
  { author: "Mayank", message: "This message was sent by you!!" },
  { author: "Khushi", message: "This message was sent by khushi" },
];
