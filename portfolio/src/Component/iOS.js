import React from "react";
import NavNew from "./NavNew";

function Ios() {
  return (
    <>
      <NavNew />
      <div className="frame">
        <br />
        <h1>
          <b>i O S &nbsp; P R O J E C T S</b>
        </h1>
        <section>
          <div className="containerBlog">
            <div className="row d-flex justify-content-center align-items-center py-3">
              <div className="col-sm-6 d-flex justify-content-center align-items-center py-3">
                <div className="card">
                  <video
                    class="card-img-top"
                    src="./Image/barbie-calculator.mov"
                    height={350}
                    alt="FLEX"
                    controls
                  ></video>
                  <div className="card-body">
                    <h4 className="card-title">BARBIE CALCULATOR</h4>
                    <br />
                    <p className="card-text">Tech Stack: SWIFT UIKIT</p>

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
        </section>
      </div>
    </>
  );
}
export default Ios;
