import React, { Component } from 'react';
import './work.css';
import Display from "./Display";
import Keypad from "./Keypad";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "",
            positions: this.shuffleArray(Array.from({ length: 16 }, (_, n) => n))
        };
        this.updatePosition = this.updatePosition.bind(this);
    }

    // Funktio taulukon sekoittamiseksi
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    updatePosition(index) {
        let { positions } = this.state;
        let emptyIndex = positions.indexOf(0);
        let targetIndex = positions.indexOf(index);
        const dif = Math.abs(targetIndex - emptyIndex);
        if (dif === 1 || dif === 4) {
            positions[emptyIndex] = index;
            positions[targetIndex] = 0;
            this.setState({ positions });
            let win = positions.every((value, index, array) => {
                value = value || 16;
                return index === 0 || parseInt(array[index - 1]) <= parseInt(value);
            });
            if (win) {
                window.alert('U Win!!!');
            }
        }
    }

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
        const layout = Array.from({ length: 16 }, (_, n) => {
            const row = Math.floor(n / 4);
            const col = n % 4;
            return [80 * col, 80 * row];
        });

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
                <div className='game1'>
                    <h1>peli</h1>
                    {/* Tässä on pelin aloitusosuus */}
                    <div className="game">
                        {this.state.positions.map((i, key) => {
                            let cellClass = key ? "cell" : 'empty cell';
                            let [x, y] = layout[this.state.positions.indexOf(key)];
                            return <div key={key}
                                className={cellClass}
                                onClick={() => this.updatePosition(key)}
                                style={{ transform: `translate3d(${x}px,${y}px,0) scale(1.1)` }}>{key}</div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;
