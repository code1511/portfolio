import  './topbar.scss';
import git from "../../assests/git.png";
import fb from "../../assests/fb.png";
import lc1 from "../../assests/lc1.png";
import insta from "../../assests/insta.jpg";
import linkedin from "../../assests/linkedin.png";

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
         <div className="wrapper">
             <div className="left">

             <div className="itemcontainer">
                <a href="https://www.instagram.com/vats.15.11/" target="_blank" rel="noopener noreferrer"> <img src={insta} alt="" /></a>
             </div>
             <div className="itemcontainer">
                <a href="https://www.linkedin.com/in/anchal-p-908643b6/" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="" /></a>
             </div>
             <div className="itemcontainer">
              <a href="https://github.com/code1511"> <img src={git} alt="" /></a>
             </div>


             <div className="itemcontainer">
                <a href="https://leetcode.com/code1511/" target="_blank" rel="noopener noreferrer"> <img src={lc1} alt="" /></a>
             </div>
             </div>
             <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
             </div>
         </div>
        </div>
    )
}
