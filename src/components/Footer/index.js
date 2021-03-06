import React from "react";
import SocialConnect from "../UI/SocialConnect";
import conversation from "../../assets/images/conversation.png";
import "./style.css";

const Footer = (props) => {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a target="_blank"  rel="noreferrer" href="https://mail.google.com/mail/u/?authuser=natalie.itzhak@gmail.com">Contact</a>
          </nav>
        </div>
        <div className="conversationContainer primaryBgColor mtb-10">
          <img src={conversation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
