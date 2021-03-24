import React from 'react'
import './Courses.css';
import Web from './pictures/web.jfif';
import DS from './pictures/DS.jpg';
import AI from './pictures/AI.jfif';
import MD from './pictures/MD.jfif';
import ML from './pictures/ML.jfif';
import DM from './pictures/DM.jfif';

function Courses() {
    return (
        <>

        <div>
            <br />
        <hr  style={{color:"black",backgroundColor:"black" , height:"5px" , border:"4px" , width:"350px"}}/>
            <br />
            <br />
            <h1>Most recommended Courses</h1>
        </div>
        <div className="course">
            <div className="container">
            <img src={Web} className="image" />
            <div className="overlay">
            <div className="text">Web Development</div>
         </div>
        </div>

        <div className="container">
            <img src={DS} className="image" />
            <div className="overlay">
            <div className="text">Data Science</div>
         </div>
        </div>

        <div className="container">
            <img src={AI} className="image" />
            <div className="overlay">
            <div className="text">Artificial Intelligence</div>
         </div>
        </div>
        </div>
        <div className="coursetwo">
        <div className="container">
            <img src={DM} className="image" />
            <div className="overlay">
            <div className="text">Digital Marketing</div>
         </div>
        </div>

        <div className="container">
            <img src={ML} className="image" />
            <div className="overlay">
            <div className="text">Machine Learning</div>
         </div>
        </div>

        <div className="container">
            <img src={MD} className="image" />
            <div className="overlay">
            <div className="text">Mobile App Development</div>
         </div>
        </div>
        </div>
  </>    
        
      
    )
}

export default Courses
