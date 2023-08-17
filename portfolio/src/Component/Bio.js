import NavNew from "./NavNew";


function Bio() {
  return (
    <>
      <NavNew />
      <div className="frame">
        <section>
          <div className="container">
            <div className="row d-flex justify-content-right py-5">
              <div className="col-6 d-flex py-5">
                <img
                  src="./Image/Profile p.jpg"
                  className="homePagePic1"
                  alt="Mariola Hullings"
                />
              </div>
              <div className="col-6 d-flex justify-content-right py-5">
                <p className="bioParagraph">
                  Hello, my name is Mariola and reside in the Kentucky area. I
                  have a passion for keeping active, especially with activities
                  like hitting the gym and hiking. A good friend introduced me
                  to the Awesome Inc bootcamp. Following their lead, I took on
                  the challenge, rounding it off with a 10-week iOS internship.
                  That experience sealed my love for mobile development. Apart
                  from coding, I have a deep appreciation for travel, I enjoy
                  cooking up new dishes, and I never miss an opportunity for a
                  good hike.
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
