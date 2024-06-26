// import logo from "./logo.svg";
import "./App.css";
import UseReducerHookEx from "./UseReducerHookEx";
import { useSelector } from "react-redux";
import Home from "./Home";

function App() {
  const sir = useSelector(state => state.xyz)
  return (
    <div className="App">
      <h1 style={{ color: 'red' }}>This is example redux</h1>
      <h1 style={{ color: 'bule' }}> {sir} </h1>
      <Home />
      {/* <UseReducerHookEx/> */}
    </div>
  );
}

export default App;
