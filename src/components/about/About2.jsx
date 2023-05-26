import React from 'react';
import './about.css';
import Item from '../item/Item';
import { itemData2 } from '../item/itemData2';

const About2 = () => {
  return (
    <div className="about-container-alt">
        <Item slides ={ itemData2 }/>
        <div className="about-text">
            <h1> Life Style Buddy </h1>
            <p> A mobile application created using ReactNative, it was completed in a group of 3 for a school project. The application allows for 
                user registration and authentication. Users can store personal information in their profile and create a weekly workout plan, allowing
                for a different workout regime for each day of the week. This is stored in a backend service called Firebase where user information is 
                stored and retrieved from. The project itself features a number of different "pages" that can be navigated via the main menu such as:
                Habits, Excercises, Profile, and About. The habits section is intended to help a user keep track of desirable habits they wish to 
                implement into their daily life. <br></br><br></br>

                This project served as a good introduction to team planning and meeting in order to complete a larger project
                and splitting up work load among several members of a development team.
            </p>
        </div>
    </div>
  )
}

export default About2