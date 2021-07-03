import React from "react";

interface CustomBorderButtonProps {
  btnColor: string;
  btnText: string;
  setfontColor: any;
  styles?: any;
}
const CustomBorderButton = (props: CustomBorderButtonProps) => {
  return (
    <span
      style={{
        ...props.styles,
        backgroundColor: "white",
        color: "#000",
        display: "inline-block",
        padding: "0.375rem 2rem",
        border: `2px solid ${props.btnColor}`,
        lineHeight: 1.5,
        borderRadius: "20px",
        cursor: "pointer",
        marginLeft: 15,
      }}
      onClick={() => {
        if (props.setfontColor) {
          props.setfontColor(props.btnColor);
        }
      }}
    >
      {props.btnText}
    </span>
  );
};
export default CustomBorderButton;
