import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import './Findvaccine.css';

function Findvaccine() {
    return (
        <>
        <div className="vaccine-cards">
        <Cards/>  
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        
        
        </div>
        <Footer/>
      
       </>
    );
}

export default Findvaccine;
