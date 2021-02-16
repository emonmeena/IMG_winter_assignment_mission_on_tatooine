import React, { useState, useEffect } from "react";
// import socketIOClient from "socket.io-client";
import "./index.css";

// const ENDPOINT = "http://127.0.0.1:8000";

export default function ClubChatRoom() {
  // const socket = socketIOClient(ENDPOINT);
  return (
    <div className="container">
      <div className="border rounded border-secondary message-container p-3">
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 send">message to be sent.</div>
        <div className="message-box rounded p-4 receive">message received.</div>
      </div>
      <div>
        <form action="#" className="d-flex" id="send-container">
          <input type="text" id="messageInput" className="container" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
