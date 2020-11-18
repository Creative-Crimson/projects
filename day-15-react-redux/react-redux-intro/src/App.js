import React from "react";
import "./App.css";
import Header from "./components/Header";
import CounterHooks from "./page/CounterHooks";

function App() {
  return (
    <div className="App">
      <Header />
      <CounterHooks />
    </div>
  );
}

export default App;
