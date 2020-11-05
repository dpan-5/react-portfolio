import codingquiz from "./../images/codingquiz.png";
import weatherdashboard from "./../images/weather-dashboard.png";
import whatsfordinner from "./../images/whatsfordinner.png";
import seekr from "./../images/SEEKR-LOGO-NEW2.png";
import exercisetracker from "./../images/exercise-tracker.png";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 my-body">
          <h1>Portfolio</h1>
          <hr className="my-4" />
          <div className="row">
            <div className="col-sm-12">
              <div className="portfolio-wrapper">
                <a href="https://seekr-jobs.herokuapp.com" target="_blank">
                  <img
                    src={seekr}
                    alt="placeholder image"
                    className="portfolio-img"
                  />
                </a>
                <p className="project-title">Seekr</p>
              </div>
              <div className="portfolio-wrapper">
                <a href="https://awebb8.github.io/project-1/" target="_blank">
                  <img
                    src={whatsfordinner}
                    alt="What's for Dinner App"
                    className="portfolio-img"
                  />
                </a>
                <p className="project-title">What's for Dinner?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="portfolio-wrapper">
                <a
                  href="https://dpan-5.github.io/hw-04-web-quiz/"
                  target="_blank"
                >
                  <img
                    src={codingquiz}
                    alt="coding quiz"
                    className="portfolio-img"
                  />
                </a>
                <p className="project-title">Coding Quiz</p>
              </div>
              <div className="portfolio-wrapper">
                <a
                  href="https://dpan-5.github.io/hw-06-weather-dashboard/"
                  target="_blank"
                >
                  <img
                    src={weatherdashboard}
                    alt="weather dashboard"
                    className="portfolio-img"
                  />
                </a>
                <p className="project-title">Weather Dashboard</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="portfolio-wrapper">
                <a
                  href="https://exercise-tracker-dp.herokuapp.com"
                  target="_blank"
                >
                  <img
                    src={exercisetracker}
                    alt="exercise tracker"
                    className="portfolio-img"
                  />
                </a>
                <p className="project-title">Exercise Tracker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
