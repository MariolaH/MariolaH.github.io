import NavNew from "./NavNew";

function Contact() {
  return (
    <>
      <NavNew />

      <div className="frame frameContact">
        <section>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center py-5">
              <div className="col-md-6 d-flex py-5">
                <div className="text-center">
                  <table className="table table-borderless justify-content-center align-items-center">
                    <thead>
                      <tr>
                        <th>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/mariola-hullings-9579b6238/"
                          >
                            <img
                              src="./Image/linkedin.svg"
                              className="btnSVG"
                              alt="Linkedin Logo"
                            />
                          </a>
                        </th>
                        <th>
                          <a
                            rel="noreferrer"
                            href="https://en.wikipedia.org/wiki/Mobile_phone"
                            target="_blank"
                          >
                            <img
                              src="./Image/telephone.svg"
                              className="btnSVG2"
                              alt="Github Logo"
                            />
                          </a>
                        </th>

                        <th>
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <img
                              src="./Image/instagram.svg"
                              className="btnSVG2"
                              alt="Instagram Logo"
                            />
                          </a>
                        </th>

                        <th>
                          <a
                            rel="noreferrer"
                            href="https://github.com/MariolaH"
                            target="_blank"
                          >
                            <img
                              src="./Image/github.svg"
                              className="btnSVG2"
                              alt="Github Logo"
                            />
                          </a>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;