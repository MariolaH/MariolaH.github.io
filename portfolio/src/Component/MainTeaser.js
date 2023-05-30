import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function MainTeaser() {
  return (
    <>
      <div className="frameBottom">
        <section>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center py-5">
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <div className="cardHome">
                  <div className="card-header CardHeader">BLOG BY MARIOLA</div>
                  <br />
                  <div className="card-body">
                    <h5 className="card-title">
                      Was your first week what you expected? Why? Why not?
                    </h5>
                    <br />
                    <br />
                    <p className="card-text">
                      As I wrapped up my first week in this program, I couldn't
                      help but feel a bit overwhelmed by the sheer amount of
                      information that was thrown my way. But at the same time,
                      I'm thrilled...
                    </p>
                    <br />
                    <a href="https://3000-mariolah-mariolahgithub-zaasywq1geb.ws-us92.gitpod.io/blog">
                      <Link
                        to="/Blog"
                        // onClick={() => {
                        //   window.scroll({
                        //     top: 0,
                        //     left: 0,
                        //     behavior: "smooth",
                        //   });
                        // }}
                        className="btn btn-outline-secondary button btn-lg"
                      >
                        B L O G
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="frameBottom">
        <section>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <div className="cardHome">
                  {/* <div className="card-header CardHeader">BLOG BY MARIOLA</div> */}
                  <br />
                  <div className="card-body">
                    <h5 className="card-title">
                      What is something about you that can only be learned by
                      reading this blog?
                    </h5>
                    <br />
                    <br />
                    <p className="card-text">
                      As you read this blog, you'll discover something unique
                      about me - my love for travel. I'm always on the lookout
                      for new adventures...
                    </p>
                    <br />
                    <a href="https://3000-mariolah-mariolahgithub-zaasywq1geb.ws-us92.gitpod.io/blog">
                      <Link
                        to="/Blog"
                        // onClick={() => {
                        //   window.scroll({
                        //     top: 0,
                        //     left: 0,
                        //     behavior: "smooth",
                        //   });
                        // }}
                        className="btn btn-outline-secondary button btn-lg"
                      >
                        B L O G
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="frameBottom">
        <section>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-sm-4 d-flex justify-content-center align-items-center py-5">
                <div className="cardHome">
                  {/* <div className="card-header CardHeader">BLOG BY MARIOLA</div> */}
                  <br />
                  <div className="card-body">
                    <h5 className="card-title">
                      What does it mean to be a good developer?
                    </h5>
                    <br />
                    <br />
                    <p className="card-text">
                      In my opinion, being a good developer requires being an
                      effective problem solver. In the course of development,
                      there are often roadblocks...
                    </p>
                    <br />
                    <a href="https://3000-mariolah-mariolahgithub-zaasywq1geb.ws-us92.gitpod.io/blog">
                      <Link
                        to="/Blog"
                        // onClick={() => {
                        //   window.scroll({
                        //     top: 0,
                        //     left: 0,
                        //     behavior: "smooth",
                        //   });
                        // }}
                        className="btn btn-outline-secondary button btn-lg"
                      >
                        B L O G
                        <ScrollRestoration />
                      </Link>
                    </a>
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

export default MainTeaser;
