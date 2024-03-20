import React, { Component } from 'react';
import './work.css';
import Display from "./Display";
import Keypad from "./Keypad";

class Work extends Component {
    state = {
        displayValue: "",
    };

    handleClick = (value) => {
        if (value === "=") {
            // Tarkista, että displayValue on laskettavissa
            try {
                const result = eval(this.state.displayValue);
                this.setState({ displayValue: result.toString() });
            } catch (error) {
                // Jos laskutoimitus ei ole kelvollinen, näytä virheviesti
                this.setState({ displayValue: "Error" });
            }
        } else if (value === "C") {
            // Tyhjennä näyttö, jos "C" -nappia painetaan
            this.setState({ displayValue: "" });
        } else {
            // Muuten lisää nappulan painallus näytölle
            this.setState((prevState) => ({
                displayValue: prevState.displayValue + value,
            }));
        }
    };
    render() {
        return (
            <div className='workelements'>
                <a href="/page2" className='button60' id='btn4'> X </a>
                <div className="calculator-container">
                    <div className='calculator'>
                    <Display value={this.state.displayValue} />
                    <Keypad onClick={this.handleClick} />
                    </div>
                    
                </div>
                <div className='spotify'>
                    <h1>spotify</h1>
                </div>
                <div className='weather'>
                    <h1>sää</h1>
                </div>
                <div className='wildcard'>
                    <h1>willikortti</h1>
                </div>
                <div className='game'>
                    <h1>peli</h1>
                </div>
            </div>
        );
    }
}

export default Work;
