function HeaderMain() {
  return (
    <div className="frame">
      <section>
        <div className="container">
          <div className="row d-flex justify-content-right ">
            <br />
            <div className="col-6 d-flex justify-content-center align-items-center py-5">
              <h3 className="homePageFont">
                <br />
                <br />
                M y <br />
                <br /> J o u r n e y <br />
                <br /> t o <br />
                <br /> b e c o m i n g <br /> <br />a <br />
                <br />
                S o f t w a r e <br />
                <br /> D e v e l o p e r{" "}
              </h3>
              <br />
            </div>
            <div className="col-6 d-flex justify-content-right py-5">
              <img
                src="./Image/imageonrock.jpg"
                className="homePagePic"
                alt="Mariola Hullings"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center py-3">
          <div className="col-md-12 d-flex justify-content-left align-items-left py-3"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
