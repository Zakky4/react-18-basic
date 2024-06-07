import { useState } from "react";
import { ColorfulMeessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountup = () => {
        setNum(num + 1);
    };
    return (
      <>
        <h1 style={{ color: "red" }}>こんにちは</h1>
        <ColorfulMeessage color="blue" >お元気ですか？</ColorfulMeessage>
        <ColorfulMeessage color="green">元気です!</ColorfulMeessage>
        <button onClick={onClickCountup}>カウントアップ</button>
        <p>{num}</p>
      </>
    );
  }