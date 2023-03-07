import Navbar from "./Navbar";

function Bio() {
  return (
    <>
      <Navbar />
      <div className="frame">
        <section>
          <div className="container">
            <div className="row py-5">
              <div className="col-sm-6 py-5">
                <br />

                <p className="bioParagraph">
                  Hi everyone! My name is Mariola, I live in Lexington with my
                  husband Richie. Originally, I am from Poland, I grew up in
                  Canada and have been living in Lexington for almost 7 years.
                  Some of my hobbies include going to the gym, hiking and
                  traveling. Currently, I work in the hospitality industry,
                  prior to that I worked as a real estate agent for a few years.
                  I was introduced to this bootcamp through a friend that took
                  it last year, he really liked it and spoke very highly of it
                  so I decided to look into it for myself. Prior to pursing the
                  bootcamp I took the Intro to Web Development bootcamp and
                  really enjoyed it and decided to pursue the Web Developer
                  bootcamp.
                </p>
              </div>

              <div className="col-sm-6 justify-content-right align-items-right py-5">
                <img
                  src="./Image/Profile p.jpg"
                  className="homePagePic"
                  alt="Image of Mariola Hullings"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Bio;
