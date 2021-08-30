import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import Tile from "../UI/Tile";
import cl from "../../assets/images/cl.png";
import rec from '../../assets/images/recommendation.jpg';

import "./style.css";

const Recommendations = (props) => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading
          text="Recommendations"
        />
        <MediumHeading text="Intership" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "20px 0" }}
      >
        <div data-aos="fade-left" className="intershipContainer">
        <Tile
            title="Intership"
            mediumTitle="Cardlatch"
            desc="Two months internship at Cardlatch Inc building a React Native mobile app MVP for the company’s access control application. I worked closely with the lead Frontend dev, who assigned issues, followed my progress and reviewed my code.
          I researched and made architectural decisions, regarding the correct libraries to use, linting and style decisions."
          />
        </div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={cl} alt="" />
            </div>
            <div className="mlr-10">
              <p className="black font-16">Eyal Brosh</p>
              <p className="textColor font-14 bold-600">Cardlatch Co-Founder & CEO</p>
            </div>
          </div>
          <img  data-aos="zoom-in" className="myCard" src={rec} alt=""  />
        </Card>
      </div>

      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span className="primaryColor">Say Hello At</span>
        </p>
        <p  data-aos="zoom-in" className="text-center font-25">natalie.itzhak@gmail.com</p>
      </Card>
    </div>
  );
};

export default Recommendations;
