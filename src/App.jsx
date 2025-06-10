import "./App.css";

function Title() {
  return <h1>I am <span>Title</span></h1>;
}

function App() {
  return (
    <div>
      <Title />
      <button>Hello World !</button>
    </div>
  );
}

export default App;
