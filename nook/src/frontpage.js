import React from 'react';
import './frontpage.css'; // Lisää import-lauseeseen "from"

function FrontPage() {
    return (
        <div className='frontpage'>


            <div className="frontpage-container">

                <div className='nav-elements'>
                    <nav>
                        <ul>
                            <li>
                                <a href="/" className='button-74'>Etusivu</a> {/* Yksinkertainen linkki etusivulle */}

                            </li>
                            <li>
                                <a href="/page3" className='button-74'>Minusta</a> {/* Yksinkertainen linkki "minusta"-sivulle */}
                            </li>
                            <li>
                                <a href="/page3" className='button-74'>Testi1</a> {/* Yksinkertainen linkki "minusta"-sivulle */}
                            </li>
                            <li>
                                <a href="/page3" className='button-74'>Testi2</a> {/* Yksinkertainen linkki "minusta"-sivulle */}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='text1'>
                    <h1>TERVETULEMAST</h1>
                    <h2>Mun nimi on Jasmin ja oon koodari c:</h2>

                    <div className='button-container'>
                        <button className='button-56' id='btn1' > Hire Me!</button>
                        <button className='button-56' id='btn2'> My Work</button>
                    </div>

                    <div className='clouds'>
                    <img src="../kuvat/pilvioik.png" alt="Logo kuvaileva teksti" className="cloud" />
                    <img src="../kuvat/pilvi.png" alt="Logo kuvaileva teksti" className="cloud2" />
                    </div>
                  


                </div>




            </div>




        </div>


    );
}

export default FrontPage;
