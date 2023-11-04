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
                  <div className="card-header CardHeader pb-5">Highlights</div>
                  <br />
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
                      <img
                        className="MainTeaserImage"
                        src="/Image/Course3.png"
                        // "./Image/courseOne.png"
                        alt="Coursera Certification"
                      />
                    </div>
                    <br />
                    <p className="card-text">
                      I've successfully completed course 3 of the Google Career
                      Certificates program
                    </p>
                    <p className="card-text">
                      In this course of the program, I've acquired valuable
                      skills:
                    </p>

                    <p>
                      Storyboarding: I learned to create storyboards to
                      brainstorm solutions for user needs.
                    </p>
                    <p>
                      Wireframing: I can now create wireframes both on paper and
                      digitally using Figma, helping me visualize and structure of
                      my design concepts.
                    </p>
                    <p>
                      Paper Prototyping: I've gained the ability to build
                      interactive designs through paper prototypes, allowing me
                      to test and refine user interactions.
                    </p>
                    <p>
                      Low-Fidelity Prototyping in Figma: Using Figma, I can
                      design low-fidelity prototypes efficiently, leading to
                      better user experiences. These skills have enhanced my UX
                      design capabilities, and I look forward to applying them
                      in real-world projects. Stay tuned for more updates on my
                      journey!
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
