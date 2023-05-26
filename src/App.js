import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import About1 from './components/about/About1';
import About2 from './components/about/About2';
import About3 from './components/about/About3';
import Item from './components/item/Item';
import Contact from './components/contact/Contact';
// import { BrowserRouter } from 'react-router-dom';
// import { HashLink as Link } from "react-router-hash-link";

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


function App() {
  return (
      <div className="App">
        <div>
          <Header />
          <Intro />
          <Works />
          <About1 />
          <About2 />
          <About3 />

          {/* <Item slides ={ itemData1 }/>
        <Item slides ={ itemData2 }/>
        <Item slides ={ itemData3 }/> */}

          <Contact />
        </div>
      </div>
  );
}

export default App;
