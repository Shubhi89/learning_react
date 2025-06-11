import "./App.css";
import "./msgBox.jsx";
import MsgBox from "./msgBox.jsx";
function Title() {
  return <h1>I am <span>Title</span></h1>;
}

function App() {
  return (
    <div>
      <Title />
      <button>Hello World !</button>
      <MsgBox userName="shubhi" textColor="yellow"/>
    </div>
  );
}

export default App;
