import * as React from "react";

const Home: any = (props: any) => {
  return (
    <div
      className="sampleDiv"
      style={{
        backgroundColor: props.backgroundColor,
        width: "48%",
        margin: "auto",
        padding: 20,
        textAlign: "center",
        color: props.fontColor,
      }}
    >
      <h1 style={{ color: props.fontColor }}>Change Text and generate code</h1>
      <p style={{ fontFamily: props.fontFamily, color: props.fontColor }}>
        By pressing the buttons below, one can change the text box color, font
        family and font color all together or one by one. For example, when
        someone clicks cyan button, text color of this box and the heading
        should change to cyan from black. In the box below with a heading 'Code'
        should print the html/ css styling for the current text and text box
        styling. It should change, when any of the following buttons are
        clicked, accordingly so that when someone copies the code it reproduces
        a similar text when any of the following buttons are clicked,
        accordingly so that when someone copies the code it reproduces a similar
        text box like this one. Reset button should remove all effects.
      </p>
    </div>
  );
};

export default Home;
