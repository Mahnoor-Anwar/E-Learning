import React from 'react'
import './Categories.css';

function CategoriesSide() {
    return (
        <>
        {/* <div className="buttons">
            <button className="web">Web Development</button>
            <button className="aritificial">Artificial Intelligence</button>
            <button className="machine">Machine Learning</button>
            <button className="mobile">Mobile App Development</button>
            <button className="digital">Digital Marketing</button>
            <button className="data">Data Science</button> */}
            <div className="buttons">
            <a href="/WebDevelopment">
            <button className="web">Web Development</button>
            </a>
            <a href="/AritificialIntelligence">
            <button className="aritificial">Artificial Intelligence</button>
            </a>
            <a href="/MachineLearning">
            <button className="machine">Machine Learning</button>
            </a>
            <a href="/MobileAppDevelopment">
            <button className="mobile">Mobile App Development</button>
            </a>
            <a href="/DigitalMarketing">
            <button className="digital">Digital Marketing</button>
            </a>
            <a href="/DataSceince">
            <button className="data">Data Science</button>
            </a>

           <a href="/categories">categories</a>
           <a href="/contactUS">Contact Us</a>
        </div>
   
           
        </>
    )
}

export default CategoriesSide
