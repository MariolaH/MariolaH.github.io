import React from "react";
import NavNew from "./NavNew";
// import ProjectsIOS from "./ProjectsIOS";

function Ios() {
  return (
    <>
      <NavNew />
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
                    src="./Image/iOSCalculator.mov"
                    height={350}
                    alt="FLEX"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">BARBIE CALCULATOR</h4>
                    <br />
                    <p className="card-text">Tech Stack: Swift UIKit</p>

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

          {/* <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    className="card-img-top"
                    src={videoSrc}
                    height={350}
                    alt="FLEX"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <br />
                    <p className="card-text">Tech Stack: {techStack}</p>

                    <a
                      rel="noreferrer"
                      href= {repoLink}
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
          </div> */}
        </section>
      </div>
    </>
  );
}
export default Ios;
