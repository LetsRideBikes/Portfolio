import React, { useState, useEffect } from 'react';
import Face1 from './img/face.png';


export default function Face(props) {

    const [animation, setAnimation] = useState(0)
    const toggle = props.toggle

    useEffect(() => {renderAnimations()}, [toggle])

    const renderFace = () => {return toggle ? Face1 : Face1
    }

    const renderAnimations = () => {return toggle ? setAnimation(1) : setAnimation(0)
    }
     
    return (
        <img 
        className="face" 
        onClick={() => props.handleClick()} 
        src={Face1}
        animation={animation} 
        alt="Me :)" />
      )
}