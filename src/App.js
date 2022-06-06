import './App.css';
import Header from './components/header/Header'
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Item from './components/item/Item';
import Contact from './components/contact/Contact';
import { itemData1 } from './components/item/itemData1';
import { itemData2 } from './components/item/itemData2';


// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Intro/>
        <Works/>
        <Item slides ={ itemData1 }/>
        <Item slides ={ itemData2 }/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
