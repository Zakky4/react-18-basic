import { useEffect, useState } from "react";
import { ColorfulMeessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log("--useEffect--");
    if (num > 0) {
      if (num % 3 == 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMeessage color="blue">お元気ですか？</ColorfulMeessage>
      <ColorfulMeessage color="green">元気です!</ColorfulMeessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(ಠ_ಠ)</p>}
    </>
  );
};
