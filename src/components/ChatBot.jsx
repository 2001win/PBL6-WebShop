import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import Chatbot from "./chatbot/index.js";
import "./chatbot/index.css";

const ChatBot = () => {
  const [btnState, setBtnState] = useState(false);
  const [dropdownState, setDropdownState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  function dropdownClick() {
    setDropdownState((dropdownState) => !dropdownState);
  }
  let dropdownToggleCheck = dropdownState ? " show" : "";
  let toggleClassCheck = btnState ? " show" : "";
  return (
    <div className="chatbox-wrapper">
      <div className="chatbox-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faMessage} />
      </div>
      <div className={`chatbox-message-wrapper${toggleClassCheck}`}>
        <div className="chatbox-message-header">
          <div className="chatbox-message-profile">
            <img
              src="https://ialui.com.br/wp-content/uploads/2020/12/bot-1.jpg"
              alt=""
              className="chatbox-message-image"
            ></img>
            <div>
              <h4 className="chatbox-message-name">Sam</h4>
              <p className="chatbox-message-status">online</p>
            </div>
          </div>
          <div className="chatbox-message-dropdown">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="chatbox-message-dropdown-toggle"
              onClick={dropdownClick}
            />
            {dropdownState == false}
            <ul
              className={`chatbox-message-dropdown-menu${dropdownToggleCheck}`}
            >
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="chatbox-message-content"></div>
        <div className="chatbox-message-bottom">
          <Chatbot></Chatbot>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
