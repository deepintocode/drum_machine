import React from 'react';
import DrumPad from './drum_pad';

const DrumMachine = () => (
    <div id="drum-machine">
        <DrumPad sound="kick" audio="/sounds/kick.wav" keyboard="Q"/>
        <DrumPad sound="snare" audio="/sounds/snare.wav" keyboard="W"/>
        <DrumPad sound="tom" audio="/sounds/tom.wav" keyboard="E"/>
        <DrumPad sound="closed_hat" audio="/sounds/closed_hat.wav" keyboard="A"/>
        <DrumPad sound="open_hat" audio="/sounds/open_hat.wav" keyboard="S"/>
        <DrumPad sound="crash" audio="/sounds/crash.wav" keyboard="D"/>
        <DrumPad sound="ride" audio="/sounds/ride.wav" keyboard="Z"/>
        <DrumPad sound="claps" audio="/sounds/claps.wav" keyboard="X"/>
        <DrumPad sound="stick" audio="/sounds/stick.wav" keyboard="C"/>
    </div>
);

export default DrumMachine;