import React, { useState } from "react";
import me from "../../assets/images/me.jpg";
import Button from "../UI/Button";
import "./style.css";

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="flip-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Natalie Itzhak
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">FullStack Developer</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div className="buttons">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button
                label="Click to my CV"
                target="_blank"
                href="https://docs.google.com/document/d/1ayAUWSr0ZANsWZOwuPKJ7SlcFn5uE2yzVEbaUzcLRmw/edit#"
                cv={true}
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
