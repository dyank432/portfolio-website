import React, {useState} from 'react'
import "./item.css"
// import web_1 from "../../img/web_1.png"
// import web_2 from "../../img/web_2.png"
// import web_3 from "../../img/web_3.png"
// import mob_1 from "../../img/mob_1.png"
// import mob_2 from "../../img/mob_2.png"
// import mob_3 from "../../img/mob_3.png"
// import { itemData1 } from './itemData1'
// import { itemData2 } from './itemData1'

import { IoCaretBackCircleOutline, IoCaretForwardCircleOutline } from "react-icons/io5";

const Item = ( {slides} ) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
  setCurrent( current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
  setCurrent( current === 0 ? length - 1 : current - 1)
}

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <div className="slider">
      <IoCaretBackCircleOutline className='left-arrow' onClick={prevSlide} /> 

    {slides.map((slide, index) => {
      return (
        <div className={index === current ? 'slide active' : 'slide'} key = {index}>
          {index === current && (<a href={slide.link} target="_blank" rel="noreferrer" ><img src={slide.image} className="image"/></a>)}
        </div>
      )
      })}

      <IoCaretForwardCircleOutline className='right-arrow' onClick={nextSlide} />
    </div>

    
    
    )
  };
export default Item;