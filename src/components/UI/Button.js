import React from "react";
import { colors } from "../../style";


const Button = (props) => {
  return (
    <a
    target="_blank"
      href={props.cv? "https://docs.google.com/document/d/1ayAUWSr0ZANsWZOwuPKJ7SlcFn5uE2yzVEbaUzcLRmw/edit#": "https://www.linkedin.com/in/natalie-itzhak-575832154/" }
      style={{
        boxSizing: "border-box",
        padding: "10px 20px",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#D62AD0 0px 0px 10px 0px",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize: 12,
        letterSpacing: "1px",
      }}
    >
      {props.label}

    </a>
  );
};

export default Button;
