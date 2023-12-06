import { Link } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function MainTeaser() {
  return (
    <>
      <div className="frameBottom">
        <br />
        <section>
          <div className="frameBottom py-5">
            <section>
              <div className="containerBottom text-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-sm-4 d-flex justify-content-center align-items-center">
                    <div className="cardHome">
                      <div className="card-body">
                        <div className="card-header text-center CardHeader">
                          Highlights
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center py-5">
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <div className="cardHome">
                  {/* <div className="card-header CardHeader pb-5">Highlights</div> */}
                  <div className="card-body">
                    <h5 className="card-title">Barbie Calculator</h5>
                    <br />
                    <br />
                    <p className="card-text">
                      🎬 The much-awaited Barbie movie has just been released,
                      and in the spirit of all things Barbie, I've created
                      something special! 🎀✨
                    </p>
                    <p className="card-text">
                      📱 Introducing my Barbie-themed calculator app, built
                      using SwiftUI! 📱
                    </p>
                    <p className="card-text">
                      🎨 With this app, I've combined creativity and
                      functionality. The buttons are animated, adding a touch of
                      magic to every calculation! 🦄💫
                    </p>
                    <p className="card-text">
                      🌟 To truly capture the Barbie world, I've set a beautiful
                      image as the background, immersing users in a delightful
                      experience! 🌈📸
                    </p>
                    <p className="card-text">
                      🧮 I leveraged the power of variables to create a dynamic
                      user interface, making the calculator user-friendly and
                      responsive! 💡
                    </p>
                    <p className="card-text">
                      🔄 ➡️ I also utilized conditional statements to manage
                      control flow, ensuring smooth operation and a seamless
                      user experience! 🔄🚀
                    </p>
                    <br />
                    <a href="https://3000-mariolah-mariolahgithub-bzsqwralhtx.ws-us104.gitpod.io/iOS">
                      <Link
                        to="/iOS"
                        className="btn btn-outline-secondary btn-pink"
                      >
                        CALCULATOR
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

      <div className="frameBottom">
        <section>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col-sm-4 d-flex justify-content-center align-items-center py-5">
                <div className="cardHome">
                  {/* <div className="card-header CardHeader">BLOG BY MARIOLA</div> */}
                  <br />
                  <div className="card-body">
                    <h5 className="card-title">Coursera Certification</h5>
                    <br />
                    <br />
                    <div className="card-text pb-5">
                      <a
                        rel="noreferrer"
                        href="https://coursera.org/share/2394e6225b570c3721853656a0de32c0"
                        target="_blank"
                      >
                        <img
                          className="MainTeaserImage"
                          src="/Image/UX.png "
                          alt="Coursera Certification"
                        />
                      </a>
                    </div>
                    <br />
                    <p className="card-text">
                      🎉 Exciting Update: Just completed the Conduct UX Research
                      and Test Early Concepts for the Google UX Design Course!
                      🚀
                    </p>
                    <p className="card-text">
                      Throughout this course, I immersed myself into the world
                      of UX design, mastering essential skills that are pivotal
                      in creating user-centric experiences. Here are some
                      highlights of what I've accomplished:
                    </p>

                    <p>
                      📊 **User Research:** I've gained valuable insights into
                      planning and conducting research studies, equipping me
                      with the tools to understand user needs.
                    </p>
                    <p>
                      🔍 **Usability Studies:** I had the opportunity to design
                      and execute my very own usability study, providing me with
                      hands-on experience in assessing the usability of my app.
                    </p>
                    <p>
                      📈 **Data Analysis:** Transforming raw research data into
                      actionable insights has been a key takeaway. I now possess
                      the skills to derive meaningful conclusions from research
                      findings.
                    </p>
                    <p>
                      🔧 **Design Iteration:** Understanding the importance of
                      refining designs based on research findings is fundamental
                      to creating user-friendly products.
                    </p>
                    <p>
                      This course has expanded my horizons and equipped me with
                      the tools needed to create designs that truly resonate
                      with users. I'm looking forward to putting these skills
                      into practice and contributing to the world of user
                      experience.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="frameBottom pb-5">
        <section>
          <div className="containerBottom text-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <div className="cardHome">
                  <div className="card-body">
                    <h5 className="card-title">The Parallax Effect</h5>
                    <br />
                    <br />
                    <p className="card-text">
                      What is the Parallax Effect? It refers to a widely
                      utilized technique where the background of a webpage
                      scrolls at a slower rate compared to the foreground
                      elements...
                    </p>
                    <br />
                    <a href="https://3000-mariolah-mariolahgithub-zaasywq1geb.ws-us92.gitpod.io/blog">
                      <Link
                        to="/Blog#parallax-blog-post"
                        className="btn btn-outline-secondary"
                      >
                        B L O G
                      </Link>
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://travel-aroundthe-world.vercel.app/"
                      target="_blank"
                    >
                      <button className="btn btn-outline-secondary">
                        E X A M P L E
                      </button>
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
