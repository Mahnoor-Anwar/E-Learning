import { ViewQuilt } from '@material-ui/icons';
import React from 'react';
import car from './pictures/car.png'
import Quote from './Quote';
import './Home.css';
import lib from'./pictures/lib.jpg';

function Home() {

 
  return (

   <>
    <div className="section"  styles={{ backgroundImage:`url(${lib})` }}>
      <div className="words" >
        <h2 className="smart">
         Learn Smart, Work Smart
         </h2>
         <p class="para"> 
           This E-leaning platform is to provide Qulaity education by Sitting at Home,Office or Anywhere.
           Learn anytime anywhere. 
         </p>
      </div>
      <img src={car}  style={{height:"70%" , width:"30%" , marginLeft:"4cm", marginTop:"2cm"}}/>

    </div>
   
      <div>
        <Quote />
      </div>
       </>  
  );

    }

export default Home;


