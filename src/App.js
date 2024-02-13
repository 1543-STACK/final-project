import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Durban" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/1543-STACK/final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anu Govender
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/1543-STACK/final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open sourced on Github {""}
          </a>
          and {""}
          <a
            href="https://sensational-basbousa-620fea.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
