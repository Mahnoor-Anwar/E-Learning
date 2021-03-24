import React from 'react'
import Artificial from './Artificial';
import CategoriesSide from './CategoresSide';
import './Categories.css';
import Data from './Data';
import Digital from './Digital';
import Machine from './Machine';
import Mobile from './Mobile';
import Web from './Web';



function Categories() {
    return (
        <>
       <CategoriesSide />
       <Web />
       <Mobile />
       <Artificial />
       <Data />
       <Digital />
       <Machine />

       
           
        </>
    )
}

export default Categories
