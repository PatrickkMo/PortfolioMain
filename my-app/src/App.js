import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

import './App.css';

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";




function BigText({ text , className = ""}) {
  return (
    <h className = {className}>{text}</h>
  );
}

function Root() {

  const [scroll, setscroll] = useState(0);
  console.log("Scroll" , scroll)

 
 

 


  window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY
    setscroll(scroll)

    var item = ((getComputedStyle(document.documentElement).getPropertyValue('--font-size'))).slice(0,4);
  
    

    setscroll(scroll)
    console.log( (parseInt(item) + parseInt(scroll))+"%")
    document.documentElement.style.setProperty('--font-size', (parseInt(item) + parseInt(scroll)/1000)+"%");
  })


  return (
   
  

    <div className="App">

      <header className="App-header">
       
      <BigText text = {"PATRICK MO"} className = "name"></BigText>

      <BigText text = {"ENTREPRENEUR"} className = "entre"></BigText>

      </header>

      <p2 className="p2">Hello</p2>

    </div>

   
  );
}

export default Root;
