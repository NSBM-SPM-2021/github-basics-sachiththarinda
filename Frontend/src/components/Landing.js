import React from 'react'
import './Landing.css';

const Landing = () => {
    return (
        <div className="Landing">
            <div className="Landing-body">
                <div className="Landing-body-text">
                <h1>COVID-19 Vaccination Appointments</h1><br />   
                <p> ST Medical Center will now schedule COVID-19 vaccination appointments 
                    for the community.Vaccines that may prevent COVID-19, the disease caused by the coronavirus, 
                    are an important step toward stemming the worldwide pandemic. 
        
                </p><br /><br />
                </div>  
                <input type="submit" name="submit" value="COVID-19 Vaccination Appointments" />           
            </div>
           
        </div>
    )
}

export default Landing;