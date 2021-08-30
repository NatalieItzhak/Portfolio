import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-14 bold-500">Follow me on: </span>
      <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.facebook.com/natali.itzhak/">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.instagram.com/natalie_itz_/">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/natalie-itzhak-575832154/">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
