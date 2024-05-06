import React, { useState } from 'react';

function CarColor() {
    const [color, setColor] = useState('Black');
    const [inputColor, setInputColor] = useState('');

    const changeColor = () => {
        setColor(inputColor);
        setInputColor('');
    };

    return (
        <>
            <h1>Color is {color}</h1>
            <input
                type='text'
                placeholder='Enter Color'
                value={inputColor}
                onChange={(e) => setInputColor(e.target.value)}
            />
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default CarColor;