import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";


const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 90,

      pathColor: "#FF449F",
    },
    {
      skillName: "JavaScript",
      desc: "Hands on experience in JavaScript",
      value: 90,
      pathColor: "#FF8882",
    },
    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 90,
      pathColor: "#FF005C",
    },
    {
      skillName: "Bootstrap",
      desc: "Hands on experience in Bootstrap",
      value: 70,
      pathColor: "#FF616D",
    },
    {
      skillName: "NodeJS",
      desc: "Hands on experience in Node JS",
      value: 80,
      pathColor: "#BF1363",
    },
    {
      skillName: "MongoDB",
      desc: "Hands on experience in MongoDB",
      value: 70,
      pathColor: "#FF94CC",
    },
    {
      skillName: "React Native",
      desc: "Hands on experience in Native",
      value: 80,
      pathColor: "#FB7AFC",
    },
    {
      skillName: "TypeScript",
      desc: "Hands on experience in TypeScript",
      value: 70,
      pathColor: "#FF8882",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "40px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
