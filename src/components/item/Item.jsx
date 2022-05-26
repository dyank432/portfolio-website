import React from 'react'
import "./item.css"
import web_1 from "../../img/web_1.png"
import web_2 from "../../img/web_2.png"
import web_3 from "../../img/web_3.png"




const Item = () => {
  return (
    <div className="list">
      <div className="item">
        <h2>multi-page travel website homepage</h2>
        {/* <a href="https://github.com/dyank432" target="_blank" rel="noreferrer"> */}
          <img src={web_3} alt="" className="item-img" />
        {/* </a> */}
        <p></p>
      </div>
      <div className="item">
        <h2>single-page travel website</h2>
        <a href="https://github.com/dyank432/single-page-travel-website" target="_blank" rel="noreferrer">
          <img src={web_1} alt="" className="item-img" />
        </a>
      </div>
      <div className="item">
      <h2>single-page travel website single photo focused view</h2>
        <a href="https://github.com/dyank432/single-page-travel-website" target="_blank" rel="noreferrer">
          <img src={web_2} alt="" className="item-img" />
        </a>
      </div>
    </div>
  )
}

export default Item