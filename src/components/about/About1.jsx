import React from 'react';
import './about.css';
import Item from '../item/Item';
import { itemData1 } from '../item/itemData1';

const About1 = () => {
  return (
    <div className="about1-container">
        <h1> Travel Guide Website </h1>
        <Item slides ={ itemData1 }/>
        <p> A website built using basic JavaScript and HTML, It displays some general information for each country and/or associated cities for that country
            in the world such as population, currency used, a short description and more. It features an advanced filter system where multiple filter types 
            can be combined in order to narrow down the countries/cities displayed. The website is a single-page format where any UI changes from interraction
            via the user will change the display accordingly such as the information or format. Clicking on a country will also display a list of cities within that country 
            and all images associated with that country. Clicking on a city will further list city information and show the images associated with that city.
            Additionally, clicking on an image will change to a focused view of that image where image information is displayed and connects with the Google Maps
            API to show the location where the image was taken, there is also an option to click the "speak" button to electronically say the title of the image.
        </p>
    </div>
  )
}

export default About1