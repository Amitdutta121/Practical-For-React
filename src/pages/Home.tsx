import React, { useState } from "react";
import ButtonControls from "../components/ButtonControls";
import Header from "../components/Header";

export default function Home() {
  const [code, setCode] = useState<string>(
    "Code for the above text should be printed here."
  );
  const [backgroundColor, setbackgroundColor] = useState<string>("#FEF2EE");
  const [fontFamily, setFontFamily] = useState<string>("");
  const [fontColor, setfontColor] = useState<string>("#000");

  let constructCode = `
    .sampleDiv {
        backgroundColor: ${backgroundColor},
        width: "48%",
        margin: "auto",
        padding: 20,
        textAlign: "center",
        color: ${fontColor},
    }
    .sampleDiv h1{
        color: ${fontColor}
    }
    p {
        ${fontFamily ? `fontFamily:${fontFamily}` : ""}
        color: ${fontColor}
    }
  `;

  return (
    <div style={{ padding: 20 }}>
      <Header
        backgroundColor={backgroundColor}
        fontFamily={fontFamily}
        fontColor={fontColor}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <ButtonControls
          setbackgroundColor={setbackgroundColor}
          setFontFamily={setFontFamily}
          setfontColor={setfontColor}
        />
        <span>Code</span>
        <textarea rows={30} cols={50} value={constructCode}>
          {code}
        </textarea>
      </div>
    </div>
  );
}
