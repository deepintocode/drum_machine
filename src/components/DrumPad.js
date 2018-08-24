import React from 'react';
import './DrumPad.css';

const DrumPad = (props) => (
	<div className="drum-pad" onClick={props.playSound} id={props.sound}>
        <p>
            {props.keyboard}
            <audio src={props.audio} className="clip" id={props.keyboard}></audio>
        </p>
        
	</div>
);

export default DrumPad;