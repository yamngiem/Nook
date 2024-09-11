// Page1.js
import React from 'react';
import './login.css'; // Lisää import-lauseeseen "from"
import { Link } from 'react-router-dom'; // Lisää reitityskomponentti

function Login() { // Korjaa komponentin nimi isolla alkukirjaimella
  return (
    <div className="grid-background">
     {/* <img src="../kuvat/pilvitransitio.png" alt="Logo kuvaileva teksti" className="transitio" /> */}
      <div className="grid-container">
        <link rel="icon" href="../kuvat/valilehtilogo.png" type="image/x-icon" />
        <img src="../kuvat/logo2.png" alt="Logo kuvaileva teksti" className="logo" />
        <label className="username"> {/* Korjaa "class" -> "className" */}
          <input defaultValue={""} id="username" type="text" placeholder="Username" /> {/* Korjaa id-attribuutti */}
        </label>
        <label className="password"> {/* Korjaa "class" -> "className" */}
          <input defaultValue={""} id="password" type="password" placeholder="Enter your password" /> {/* Korjaa id-attribuutti */}
        </label>
        <label className='login' >

        <Link to="/page2"> {/* Link navigoi "/page2" -polulle */}
          <button className="loginnappi"></button>
        </Link>
        </label>
       
      </div>
     
    </div>
  );
}

export default Login; 