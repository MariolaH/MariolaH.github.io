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
                    <div>"PROJECTS COMING SOON"</div>
                  {/* <img
                    class="card-img-top"
                    src="./Image/FlexApp.png"
                    alt="FLEX"
                  ></img> */}
                  <div className="card-body">
                    {/* <h4 className="card-title">FLEX</h4> */}
                    <br />
                    {/* <p className="card-text">
                      Tech Stack: HTML, CSS, Bootstrap, JavaScript, React,
                      Django, Django REST framework, Python
                    </p> */}
                    {/* <a
                      rel="noreferrer"
                      href="https://flex-app.vercel.app/"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        View Project
                      </button>
                    </a>

                    <a
                      rel="noreferrer"
                      href="https://github.com/MariolaH/Frontend-FLEX"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        View Repo
                      </button>
                    </a> */}
                    <br />
                    <br />
                    {/* <p>
                      {" "}
                      ** For optimal user experience, kindly access the content
                      via a mobile device
                    </p> */}
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
