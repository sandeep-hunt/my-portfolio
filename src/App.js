import Header from "./Components/Header/Header";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
