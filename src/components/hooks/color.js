import React, { useState } from 'react'

export default function color(props) {
    const [color, updateColor] = useState("black")
    const [inputColor, updateInputColor] = useState("black")
    const [text, updateText] = useState("Color Me!")
    const [inputText, updateInputText] = useState("Color Me!")

    const handleChange = (event, updaterFunction) => {
        updaterFunction(event.target.value)
    }

    const handleSubmit = () => {
        updateColor(inputColor)
        updateText(inputText)
    }

   return (
       <div className='color-wrapper'>
           <h3 style={{color: color}}>{text}</h3>
           <input 
                type="text" 
                value={inputColor} 
                // onChange={(event) => updateInputColor(event.target.value)}
                onChange={(event) => handleChange(event, updateInputColor)} 
            />
           <input 
                type="text" 
                value={inputText} 
                // onChange={(event) => updateInputText(event.target.value)}
                onChange={(event) => handleChange(event, updateInputText)}
            />
           <button onClick={handleSubmit}>Submit</button>
       </div>
   )
}