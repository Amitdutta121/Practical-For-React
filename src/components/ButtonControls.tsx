import React from "react";
import CustomBorderButton from "./CustomBorderButton";
import CustomButton from "./CustomButton";

interface ButtonControlsProps {
  setbackgroundColor?: any;
  setFontFamily?: any;
  setfontColor?: any;
}

const ButtonControls: any = (props: any) => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <span>Background Color: </span>
        <CustomButton
          btnColor={"#00204E"}
          btnText={"BLUE"}
          fontFamily={""}
          setFontFamily={""}
          setbackgroundColor={props.setbackgroundColor}
        />
        <CustomButton
          btnColor={"#02290E"}
          btnText={"GREEN"}
          fontFamily={""}
          setFontFamily={""}
          setbackgroundColor={props.setbackgroundColor}
        />
        <CustomButton
          btnColor={"#B30404"}
          btnText={"RED"}
          fontFamily={""}
          setFontFamily={""}
          setbackgroundColor={props.setbackgroundColor}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <span>Font Family: </span>
        <CustomButton
          btnColor={"#000000"}
          btnText={"UBUNTU"}
          fontFamily="Ubuntu"
          setFontFamily={props.setFontFamily}
          setbackgroundColor={null}
        />
        <CustomButton
          btnColor={"#000000"}
          btnText={"ROBOTO"}
          fontFamily="Roboto"
          setFontFamily={props.setFontFamily}
          setbackgroundColor={null}
        />
        <CustomButton
          btnColor={"#000000"}
          btnText={"COURIER NEW"}
          fontFamily="Courier new"
          setFontFamily={props.setFontFamily}
          setbackgroundColor={null}
        />
      </div>
      <div>
        <span>Font Color: </span>
        <CustomBorderButton
          btnColor={"#2CCCC4"}
          btnText={"CYAN"}
          setfontColor={props.setfontColor}
        />
        <CustomBorderButton
          btnColor={"#640081"}
          btnText={"PURPLE"}
          setfontColor={props.setfontColor}
        />
        <CustomBorderButton
          btnColor={"#000"}
          btnText={"BLACK"}
          setfontColor={props.setfontColor}
        />
      </div>
      <CustomButton
        styles={true}
        btnColor={"#F9E79B"}
        btnText={"RESET"}
        setbackgroundColor={props.setbackgroundColor}
        setFontFamily={props.setFontFamily}
        setfontColor={props.setfontColor}
      />
    </div>
  );
};
export default ButtonControls;
