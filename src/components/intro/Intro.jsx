import "./intro.scss";
import anchal from "../../assests/anchal.jpg";
import ddrop from "../../assests/ddrop.png";
import { init } from 'ityped';
import { useEffect,useRef } from "react";
import back from "../../assests/back.png";

export default function Intro() {

const textRef=useRef();
  //using empty array to use use effect just one time
  useEffect(()=>{
console.log(textRef);
init(textRef.current, {
  showCursor: false,
  backDelay:1500,
  backSpeed:40,
  showCursor:true,
  strings: ['Software Developer', 'Web Developer','Programmer From Core Background']});
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src={anchal} alt="anchal" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm </h2>
          <h1>Anchal Pandey </h1>
          <h3>👩🏻‍💻<span ref={textRef}></span> </h3>
        </div>
        <a href="#portfolio">
          <img src={ddrop} alt="dropdown" />
        </a>
      </div>
    </div>
  );
}
