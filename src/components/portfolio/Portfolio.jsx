import "./portfolio.scss";
import prj from "../../assests/prj.png";
import series from "../../assests/project/series.png";
import todo from "../../assests/project/todo.jpg";
import emoji from "../../assests/project/emoji.jpg";
import ecom from "../../assests/project/ecom.jpg";
import prj3 from "../../assests/prj3.jpg";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import {useState} from 'react';

export default function Portfolio() {

  const[selected,setSelected]=useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
       {list.map((item)=>(
         <Portfoliolist title={item.title} active={selected=== item.id}
         setSelected={setSelected}
         id={item.id}
         />
       ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src={prj3} alt="" />
          <h3>My App</h3>
        </div>
        <div className="item">
          <img src={ecom} alt="" />
          <h3>E-Commerce Web</h3>
        </div>
        <div className="item">
          <img src={emoji} alt="" />
          <h3>Emoji Search</h3>
        </div>

        <div className="item">
          <img src={series} alt="" />
          <h3><a href="https://code1511.github.io/project/" target="_blank" rel="noopener noreferrer">Web Series </a></h3>
        </div>
        <div className="item">
          <img src={prj} alt="" />
          <h3>Travel Management System</h3>
        </div>
        <div className="item">
          <img src={todo} alt="" />
          <h3> <a href="https://code1511.github.io/toDoList/" target="_blank" rel="noopener noreferrer">To Do List</a> </h3>
        </div>

      </div>
    </div>
  );
}
