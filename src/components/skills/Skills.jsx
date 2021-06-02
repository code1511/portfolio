import "./skills.scss";
import cpp from "../../assests/skills/cpp.png";
import js from "../../assests/skills/js.png";
import html from "../../assests/skills/html.png";
import css from "../../assests/skills/css.png";
import java from "../../assests/skills/java.png";
import node from "../../assests/skills/node.png";
import react from "../../assests/skills/react.png";
import mongo from "../../assests/skills/mongo.png";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="items">
          <img src={cpp} alt="" />
        </div>
        <div className="items">
          <img src={js} alt="" />
        </div>
        <div className="items">
          <img src={html} alt="" />
        </div>
        <div className="items">
          <img src={css} alt="" />
        </div>
        <div className="items">
          <img src={java} alt="" />
        </div>
        <div className="items">
          <img src={node} alt="" />
        </div>
        <div className="items">
          <img src={mongo} alt="" />
        </div>
        <div className="items">
          <img src={react} alt="" />
        </div>
      </div>
    </div>
  );
}
