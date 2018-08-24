import React, { Component } from 'react';
import DrumPad from './DrumPad';

import './DrumMachine.css'

class DrumMachine extends Component {
    state = {
        sound: null
    }
    playSound= (e) => {
        e.target.querySelector('audio').play();
        const sound = e.currentTarget.id.charAt(0).toUpperCase() + e.currentTarget.id.slice(1);
        this.setState({ sound })
    }
    handleKeyDown (e) {
        switch(e.keyCode) {
            case 81:
            document.querySelector('#Q').play();
            break;
            case 87:
            document.querySelector('#W').play();
            break;
            case 69:
            document.querySelector('#E').play();
            break;
            case 65:
            document.querySelector('#A').play();
            break;
            case 83:
            document.querySelector('#S').play();
            break;
            case 68:
            document.querySelector('#D').play();
            break;
            case 90:
            document.querySelector('#Z').play();
            break;
            case 88:
            document.querySelector('#X').play();
            break;
            case 67:
            document.querySelector('#C').play();
            break;
            default:
            return null;
        }
    }
    displaySound() {

    }
    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return ( <div id="drum-machine">
        <div id="drum-pads" onKeyDown={this.playByKey}>
            <DrumPad sound="kick" audio="/drum_samples/kick.wav" keyboard="Q" playSound={this.playSound}/>
            <DrumPad sound="snare" audio="/drum_samples/snare.wav" keyboard="W" playSound={this.playSound}/>
            <DrumPad sound="tom" audio="/drum_samples/tom.wav" keyboard="E" playSound={this.playSound}/>
            <DrumPad sound="closed_hat" audio="/drum_samples/closed_hat.wav" keyboard="A" playSound={this.playSound}/>
            <DrumPad sound="open_hat" audio="/drum_samples/open_hat.wav" keyboard="S" playSound={this.playSound}/>
            <DrumPad sound="crash" audio="/drum_samples/crash.wav" keyboard="D" playSound={this.playSound}/>
            <DrumPad sound="ride" audio="/drum_samples/ride.wav" keyboard="Z" playSound={this.playSound}/>
            <DrumPad sound="claps" audio="/drum_samples/claps.wav" keyboard="X" playSound={this.playSound}/>
            <DrumPad sound="stick" audio="/drum_samples/stick.wav" keyboard="C" playSound={this.playSound}/>
        </div>
        <div id="display">
            <p>{this.state.sound}</p>
        </div>
    </div>
    )
}};

export default DrumMachine;