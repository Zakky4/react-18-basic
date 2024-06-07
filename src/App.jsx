import { ColorfulMeessage } from "./components/ColorfulMessage";

export const App = () => {
    const onClickBtn = () => alert('Hello');
    return (
      <>
        <h1 style={{ color: "red" }}>こんにちは</h1>
        <ColorfulMeessage color="blue" >お元気ですか？</ColorfulMeessage>
        <ColorfulMeessage color="green">元気です!</ColorfulMeessage>
        <button onClick={onClickBtn}>ボタン</button>
      </>
    );
  }