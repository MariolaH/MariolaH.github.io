import React from "react";
import NavNew from "./NavNew";
import { ScrollRestoration } from "react-router-dom";
// import ProjectsIOS from "./ProjectsIOS";

function Ios() {
  return (
    <>
      <NavNew />
      <ScrollRestoration />
      <div className="frame">
        <br />
        <h1>
          <b className="projectTitle">i O S &nbsp; P R O J E C T S</b>
        </h1>
        <section>
          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    class="card-img-top"
                    src="./Videos/tipcalculator.mov"
                    height={350}
                    alt="Calculator that is a Barbie theme"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">
                      {" "}
                     SPLIT TIP CALCULATOR
                    </h4>
                    <br />
                    <p className="card-text">Tech Stack: UIKit</p>
                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/TipCalculator/tree/CustomTip"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        View Repo
                      </button>
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    class="card-img-top"
                    src="./Videos/eggTimerVideo.mov"
                    height={350}
                    alt="Calculator that is a Barbie theme"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title"> EGG TIMER </h4>
                    <br />
                    <p className="card-text"> Tech Stack: UIKit</p>
                    <br />
                    <br />
                    {/* <h5 className="card-text">Concepts Utilized:</h5>
                    <br />
                    <p> Collection type - Dictionaries</p>
                    <p> Swift Timer API </p>
                    <p> Conditional statements - IF/ELSE </p>
                    <p> Functions with outputs </p>
                    <p> ProgressView</p> */}

                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/EggTimerSwift"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        View Repo
                      </button>
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    class="card-img-top"
                    src="./Image/iOSCalculator.mov"
                    height={350}
                    alt="Calculator that is a Barbie theme"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">BARBIE CALCULATOR</h4>
                    <br />
                    <p className="card-text">Tech Stack: SwiftUI</p>
                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/BarbieCalculatorSwift"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        View Repo
                      </button>
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    className="card-img-top"
                    src="./Image/CardWorkOut.mov"
                    height={350}
                    alt="FLEX"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">Card Workout Game</h4>
                    <br />
                    <p className="card-text">Tech Stack: Swift UIKit</p>
                    <p className="card-text">View Repo</p>
                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/CardWorkoutGame---storyboard"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        Storyboard
                      </button>
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/CardWorkOut-Programmatic"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        Programmatic
                      </button>
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Ios;
