import './ColorBox.css'

import { useState } from "react";


function ColorBox() {
   const [color, setColor] = useState("purple");

  //   const randIndex = Math.floor(Math.random() * colors.length);
  //   const handleClick = () => {
  //     setColor(color);
  //   };

  return (
    <div className="ColorBox" style={{ backgroundColor: color }}></div>
  );
}

export default ColorBox;

// loop through all the colors in colors
// display all colors on a grid
// click on a box to change color
