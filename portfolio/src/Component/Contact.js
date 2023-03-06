import Navbar from "./Navbar";

function Contact() {
  return (
    <>
  <Navbar />



     <div className="frame frameContact">
        <section>
            <div className='container'>

                <div className="row d-flex justify-content-center align-items-center py-5">

                    <div className="col-md-6 d-flex justify-content-center align-items-center py-5">

                        <div className="text-center">
                            <table className="table table-borderless">

                                <thead>
                                    <tr>
                                        <th><a href="https://www.google.com" target="_blank">
                                            <img
                                                    src="/portfolio/public/Image/envelope.svg" className="btnSVG2" alt="Instagram Logo" /></a>
                                        </th>
                                        <th><a href="https://en.wikipedia.org/wiki/Mobile_phone" target="_blank"><img
                                                    src="/portfolio/public/Image/telephone.svg" className="btnSVG2" alt="Github Logo" /></a>
                                        </th>

                                        <th><a href="https://www.instagram.com/" target="_blank"><img
                                                    src="/portfolio/public/Image/instagram.svg" className="btnSVG2" alt="Instagram Logo" /></a>
                                        </th>

                                        <th><a href="https://github.com/MariolaH" target="_blank"><img
                                                    src="/portfolio/public/Image/github.svg" className="btnSVG2" alt="Github Logo" /></a>
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