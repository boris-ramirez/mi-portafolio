import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <div className="bg-white flex-col text-black border flex w-full h full rounded-xl">
          <p>Hola mor ❤️❤️❤️</p>
          <p>aqui juancarlos bodoque con el reporte del dia</p>
          <p>te extrañamos</p>
          <img
            src="https://media.tenor.com/Nqf3-gUgySsAAAAM/cat-sad-gato-triste.gif"
            alt="gatito tirste"
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
