import React from 'react';
import './about.css';
import Item from '../item/Item';
import { itemData3 } from '../item/itemData3';

const About3 = () => {
  return (
    <div className="about-container">
        <Item slides ={ itemData3 }/>
        <div className="about-text">
            <h1> Dungeon Survival Game </h1>
            <p> 
                A personal project created in Python using the PyGame library as a fun way to learn a new language.
                The objective of the game is to survive as long as possible from the horde of enemies that increase in 
                both number and difficulty as time goes on. 
                
                <br></br><br></br>

                The Game features a number of character statistics such as health points, experience points, movement speed, damage,
                attack speed and movement speed which can be increased by picking from a list of randomized "item upgrades" upon leveling up. 
            </p>
        </div>
    </div>
  )
}

export default About3