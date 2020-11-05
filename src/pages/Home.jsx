import headshot from './../images/headshot.png';
import '../App.css';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 my-body">
          <h1>About Me</h1>
          <hr className="my-4" />
          <div className="row">
            <div className="col-sm-12">
              <img id="headshot" src={headshot} alt="headshot" />
              <p>
                Aspiring software engineer - Graduated Fall 2019 from the
                University of Georgia with a degree in Finance and MIS. Over the
                past years, I've worked in operational finance-risk at a
                multi-regional bank and as a privacy and security consultant at
                a high-growth privacy startup, but I've always had a passion for
                coding, since I took my first java class in highschool. My life
                motto is "yolo" so I decided to fully jump in and immerse myself
                in code and am now a full-time student at Georgia Tech's coding
                boot camp.
              </p>
              <p>
                In my spare time, I enjoy hanging out with my friends, family,
                and two cats, fishing whenever and wherever I can, going to the
                gym (though not so much anymore due to COVID), playing video
                games, and teaching myself other programming languages and
                principles.
              </p>
              <hr className="my-4" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 socials d-flex justify-content-center">
              <a href="https://github.com/dpan-5" target="_blank">
                GitHub
              </a>
            </div>
            <div className="col-sm-4 socials d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/pan-david/" target="_blank">
                LinkedIn
              </a>
            </div>
            <div className="col-sm-4 socials d-flex justify-content-center">
              <a href="./assets/DP_Resume_08.pdf" target="_blank">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
