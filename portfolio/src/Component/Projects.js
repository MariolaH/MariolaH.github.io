import React from "react";
import NavNew from "./NavNew";

function Projects() {
  return (
    <>
      <NavNew />
      <div className="frame">
        <br />
        <h1>
          <b>P R O J E C T S</b>
        </h1>
        <section>
          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-8 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <img
                    class="card-img-top"
                    src="./Image/To-Do-List.png"
                    alt="TO - DO - LIST"
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">To - Do - List</h4>
                    <p className="card-text">
                      Tech Stack: HTML, CSS, Bootstrap, JavaScript, React
                    </p>
                   <a href="#"> <button className="btn">View Project</button></a>
                    <button className="btn">View Repo</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center py-1">
              <div className="col-sm-8 d-flex justify-content-center align-items-center py-1">
                <div className="card">
                  <img
                    class="card-img-top"
                    src="./Image/Tic-Tac-Toe.png"
                    alt="Tic-Tac-Toe"
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">TIC - TAC - TOE</h4>
                    <p className="card-text">
                      Tech Stack: HTML, CSS, JavaScript
                    </p>
                    <button className="btn">View Project</button>
                    <button className="btn">View Repo</button>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center py-1">
              <div className="col-sm-8 d-flex justify-content-center align-items-center py-1">
                <div className="card">
                  <img
                    class="card-img-top"
                    src="./Image/Weather App.png"
                    alt="WEATHER APP"
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">WEATHER APP</h4>
                    <p className="card-text">
                      Tech Stack: HTML, CSS, Bootstrap, JavaScript
                    </p>
                    <button className="btn">View Project</button>
                    <button className="btn">View Repo</button>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center py-1">
              <div className="col-sm-8 d-flex justify-content-center align-items-center py-1">
                <div className="card">
                  <img
                    class="card-img-top"
                    src="./Image/Alarm Clock.png"
                    alt="ALARM CLOCK"
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">ALARM CLOCK</h4>
                    <p className="card-text">
                      Tech Stack: HTML, CSS, JavaScript
                    </p>
                    <button className="btn">View Project</button>
                    <button className="btn">View Repo</button>
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

export default Projects;
