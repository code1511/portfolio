import "./works.scss";
import { useState } from "react";
import aprj from "../../assests/aprj.png";
import prj5 from "../../assests/prj5.png";
import arrow from "../../assests/arrow.png";
import logo2 from "../../assests/logo2.jpg";
import logo3 from "../../assests/logo3.jpg";
import logo4 from "../../assests/logo4.jpg";
import pic1 from "../../assests/pic1.jpeg";
import pic2 from "../../assests/pic2.png";
import pic3 from "../../assests/pic3.jpg";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: logo2,
      title: "Web Developer",
      desc: "I have interned as a web developer at ATS India Technologies for 6 month.I was working there as a front-end developer.",
      img: pic1,
    },
    {
      id: "2",
      icon: logo3,
      title: "Vice President",
      desc: "It was team management role for Electrical Engineer's Legation which is club of my college MMMUT,gkp",
      img: pic2 ,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Past Works</h1>
      <div className="slider"
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                   {d.desc}
                  </p>
                  <span>Past Works</span>
                </div>
              </div>
              <div className="right">
                <img src={prj5} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={arrow}
      className="arrow left"
      alt=""
      onClick={() => handleClick("left")}
      />
      <img src={arrow}
       className="arrow right"
        alt=""
        onClick={() => handleClick()}
        />
    </div>
  );
}
