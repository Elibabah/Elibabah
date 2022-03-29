import React, { useState } from 'react';
import FlipCard from 'flip-card-react';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import "./Flipcard.css"

const cardStyle = {
    border: "solid 1px",
    borderRadius: 5,
    color: "#fff",
    width: 200,
    height: 300
};

const Card = () => {
    const [isFlipped, setFlipped] = useState(false);

    const front = (
        <div onMouseMove={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#444" }} className="front">
            <div className="icon">
                <TouchAppIcon color="primary"/>
            </div>
            <div className='viewSoft'>View my softskills</div>
        </div>
    );

    const back = (
        <div onMouseLeave={() => setFlipped(x => !x)} style={{ ...cardStyle, background: "#000" }}>
            <div className="softskill">Teamwork</div>
            <div className="softskill">Self-learning</div>
            <div className="softskill">Assertive communication</div>
            <div className="softskill">Problem solving</div>
            <div className="softskill">Leadership</div>
            <div className="softskill">Resilience</div>
        </div>
    );

    return (
        <div style={{position: "relative"}} className="portrait">
            <FlipCard isFlipped={isFlipped} front={front} back={back}/>
        </div>
    );
}

export default Card;