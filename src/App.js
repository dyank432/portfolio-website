import './App.css';
import Header from './components/header/Header'
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Intro/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
