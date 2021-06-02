import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1>About Me</h1>
        <div className="item">
          <p>
            Hello, this is Anchal Pandey,a MERN stack developer, currently
            pursuing my bachelor of technology in electrical engineering my
            major from Madan Mohan Malviya university of technology Gorakhpur.
            Coming to my programing journey.I have done 6 month internship as a
            web developer and i used to build projects in javascript and it's
            frameworks like React js,iTyped js.I have done more than 300
            problems on leetcode and i use C++ for problem solving.
            <br /> <br />
            During my college i have done 2 Ncc Camps and i am C-certificate
            holder. Apart from that i was involved in various activities during
            my college like sports,cultural teams.My hobby is dancing and
            singing.
          </p>
        </div>
        <button className="btn">
          <a href="https://docs.google.com/document/d/e/2PACX-1vS0L0wvKllUeE8JQznkrVfUgOSPCIkWfdQ4glPReIEPW3ZEpnlqH7BM31k4qZJ6VjiuNyqw_zzCAsm7/pub">
            Know More 🡢
          </a>
        </button>
      </div>
    </div>
  );
}
