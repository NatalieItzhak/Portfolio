import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import me from "../../assets/images/meLeft.jpg";
import SocialConnect from "../UI/SocialConnect";
import "./style.css";

const percentage = 80;

const Expertise = (props) => {
  return (
    <div className="container" style={{ marginTop: "40px", padding: "50px 0" }}>
      <div data-aos="fade-right" className="rightImgMeContainer">
        <img src={me} alt-="" style={{width: '100%', marginTop: '220px'}} />
        <SocialConnect style={{ position: "absolute", bottom: "-50px", left: "-13px"}} />
      </div>
      <div>
        <SmallHeading text="Expertise" />
        <MediumHeading text="Special Skills" />
      </div>
      <Card
        style={{
          padding: "30px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          zIndex: 1,
        }}
        data-aos="flip-up"
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.black,
                pathColor: colors.primaryColor,
              })}
            />
          </div>
          <h2 className="textColor mlr-30">Development</h2>
        </div>
        <p className="grey mtb-10 font-1">
        “One of my most productive days was throwing away 1000 lines of code.” - Ken Thompson 💻
        </p>
      </Card>
    </div>
  );
};

export default Expertise;
