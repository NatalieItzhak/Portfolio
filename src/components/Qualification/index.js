import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import certificate from "../../assets/images/certificate.jpg";


const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb wrap"
        style={{ margin: "20px 0" }}
      >
             <div data-aos="fade-left" className="intershipContainer">
            <Tile
        title="Full Stack Developer Bootcamp"
        mediumTitle=" Appleseed's Academy"
        desc="An intensive 6-months, 720 hours training program that encourages self-led learning as well
            as group projects that simulate real-world development teams and encourage
            out-of-the-box thinking."
        desc2="Proficient in HTML, CSS, JavaScript, React, Node.js, MongoDB. Experienced in research,
            analyzing and solving complex code problems."
      />
      </div>
        <div  data-aos="fade-left">
          <img src={certificate} alt="" width="100%" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">

              <Button label="Click to my CV"
                cv={true}
                href="https://docs.google.com/document/d/1ayAUWSr0ZANsWZOwuPKJ7SlcFn5uE2yzVEbaUzcLRmw/edit#"
            inverse={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
