import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponent from "./components/learning-examples/ThirdComponent";
import Counter from "./components/counter/Counter";

import { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return <div className="App">
      <Counter></Counter>
      </div>;
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="App">
        My hello world Hello
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
