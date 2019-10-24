import React, { Component } from "react";
import "./App.scss";
import Button from "./Button";

class App extends Component<> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Edit src/App.js and save to reload.</span>
          <p
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and more
          </p>
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
