import React from "react";

interface CustomButtonProps {
  btnColor: string;
  btnText: string;
  setbackgroundColor?: any;
  fontFamily?: string;
  setFontFamily?: any;
  styles?: boolean;
  setfontColor?: any;
}
const CustomButton = (props: CustomButtonProps) => {
  return (
    <span
      style={{
        backgroundColor: props.btnColor,
        color: "#fff",
        display: "inline-block",
        padding: "0.375rem 2rem",
        lineHeight: 1.5,
        borderRadius: "20px",
        cursor: "pointer",
        marginLeft: props.styles ? "40%" : 15,
        marginTop: props.styles ? "4%" : 0,
        fontFamily: props.fontFamily ? props.fontFamily : "",
      }}
      onClick={() => {
        if (props.setbackgroundColor) {
          props.setbackgroundColor(props.btnColor);
        }
        if (props.setFontFamily) {
          props.setFontFamily(props.fontFamily);
        }
        if (props.styles) {
          props.setbackgroundColor("#FEF2EE");
          props.setFontFamily("");
          props.setfontColor("#000");
        }
      }}
    >
      {props.btnText}
    </span>
  );
};
export default CustomButton;
