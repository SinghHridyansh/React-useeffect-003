import "./App.css";
import Guser from "./Components/User";

function App() {
  return (
    <div className="App-main">
      <div className="App">
        <div className="heading-main">
          <h1 className="heading">Github Search Application</h1>
        </div>
        <div>
          <Guser />
        </div>
      </div>
    </div>
  );
}

export default App;
