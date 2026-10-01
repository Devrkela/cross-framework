import { useState } from 'react';

function Text() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [color, setColor] = useState(false);

  window["#store"].bold.addEventListener("change", function(e){
    setBold(e.value);
  });

  window["#store"].italic.addEventListener("change", function(e){
    setItalic(e.value);
  });

  window["#store"].underline.addEventListener("change", function(e){
    setUnderline(e.value);
  });

  window["#store"].color.addEventListener("change", function(e){
    setColor(e.value);
  });
  
  return (
    <>
      <p bold={bold.toString()} italic={italic.toString()} underline={underline.toString()} color={color.toString()}>Hello World</p>
    </>
  )
}

export default Text;