import NavNew from "./NavNew";


function Bio() {
  return (
    <>
      <NavNew />
      <div className="frame">
        <section>
          <div className="container">
            <div className="row py-5">
              <div className="col-sm-4 justify-content-center align-items-center py-5">
                <img
                  src="./Image/Profile p.jpg"
                  className="homePagePic1"
                  alt="Mariola Hullings"
                />
              </div>
              <div className="col-sm-8 py-5">
                <p className="bioParagraph">
                  Hello everyone, my name is Mariola, and I am a resident of
                  Lexington, alongside my husband Richie. My upbringing is
                  rooted in Canada, although I am originally from Poland.
                  Presently, I have been residing in the Lexington vicinity for
                  approximately seven years. 
                  
                  Regarding my leisure activities, I enjoy engaging in physical fitness endeavors, such as
                  attending the gym and hiking. Moreover, I relish exploring new
                  destinations through traveling. Professionally, I am currently
                  employed within the hospitality industry, having previously
                  worked as a real estate agent for a few years. 
                  
                  I was introduced to this esteemed bootcamp via a friend who had
                  completed the program last year. Based on his high praise of
                  the program, I conducted further research and decided to
                  pursue it myself. Prior to enrolling in this bootcamp, I
                  completed the Intro to Web Development bootcamp, which I found
                  thoroughly engaging. As a result, I am enthusiastic to take on
                  the challenge of the Web Developer bootcamp.
                </p>
              </div>

              {/* <div className="col-sm-4 justify-content-center align-items-center py-5">
                <img
                  src="./Image/Profile p.jpg"
                  className="homePagePic1"
                  alt="Image of Mariola Hullings"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Bio;
