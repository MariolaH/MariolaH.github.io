function HeaderMain() {
  return (
    <div className="frame">
      <section>
        <div className="container">
          <div className="row d-flex justify-content-right py-5">
            <br />
            <div className="col-sm-6 d-flex justify-content-center intro ign-items-center py-5">
              <h2>
                <br />
                <b>
                  M y <br />
                  <br /> J o u r n e y <br />
                  <br /> t o <br />
                  <br /> b e c o m i n g <br /> <br />a <br />
                  <br />
                  S o f t w a r e <br />
                  <br /> D e v e l o p e r{" "}
                </b>{" "}
              </h2>
              <br />
            </div>
            <div className="col-sm-6 d-flex justify-content-center align-items-content-center py-5">
              <img
                src="./Image/image on rock.jpg"
                className="homePagePic"
                alt="Mariola Hullings"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-md-12 d-flex justify-content-left align-items-left py-3">
            <a rel="noreferrer" target="_blank" href="https://www.google.com">
              <img
                src="./Image/envelope.svg"
                className="btnSVG"
                alt="Envelope Logo"
              />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Mobile_phone"
            >
              <img
                src="./Image/telephone.svg"
                className="btnSVG"
                alt="Telephone Logo"
              />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <img
                src="./Image/instagram.svg"
                className="btnSVG"
                alt="Instagram Logo"
              />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MariolaH"
            >
              <img
                src="./Image/github.svg"
                className="btnSVG"
                alt="Github Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
