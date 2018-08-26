import React, { Component } from 'react';
import DrumPad from './DrumPad';

import './DrumMachine.css'

const sounds = {
    Q: 'Kick',
    W: 'Snare',
    E: 'Tom',
    A: 'Closed HH',
    S: 'Open HH',
    D: 'Crash',
    Z: 'Ride',
    X: 'Clap',
    C: 'Stick',
}

class DrumMachine extends Component {
    state = {
        sound: null
    }
    isLetter (c) {
        return c.toString().toLowerCase() !== c.toString().toUpperCase();
    }
    playSound = (e) => {
        e.target.querySelector('audio').play();
        const sound = sounds[e.target.textContent];
        this.setState({ sound });
    }
    handleKeyDown = (e) => {
        if (this.isLetter(String.fromCharCode(e.which))) {
            const query = `#${(String.fromCharCode(e.which))}`;
            if (document.querySelector(query)) {
                const sound = sounds[document.querySelector(query).id];
                document.querySelector(query).play();
                this.setState({ sound });
            }
        }
    }
    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
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
            {this.state.sound && <p>Sound: {this.state.sound}</p>}
        </div>
    </div>
    )
}};

export default DrumMachine;