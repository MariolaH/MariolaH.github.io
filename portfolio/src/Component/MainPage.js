import "./style.css";
import "./Css/blog.style.css";
import Navbar from "./Navbar";
// import Bio from "./Bio";
// import Blog from "./Blog";
// import Contact from "./Contact";

function MainPage() {
  return (
      <Navbar />

      <>
    <div className="frame">
        <section>
            <div className='container'>

                <div className="row d-flex justify-content-right py-5">
                    <br />
                    <div className="col-sm-6 d-flex justify-content-center intro ign-items-center py-5">
                        <h2><br /><b>M y <br /><br /> J o u r n e y <br /><br /> t o <br /><br /> b e c o m i n g <br /> <br />a <br /><br />
                                S o f t w a r e <br /><br /> D e v e l o p e r </b> </h2>
                        <br />

                        <!-- <img src="/Blog HTML IMG/Hompage bio.jpeg" className="homePagePic1" alt="Image of Mariola Hullings"> -->
                    </div>
                    <div className="col-sm-6 d-flex justify-content-center align-items-content-center py-5">

                        <img src="/Blog HTML IMG/image on rock.jpg" className="homePagePic" alt="Image of Mariola Hullings">

                    </div>


                </div>

            </div>

        </section>

        <div className='container'>

            <div className="row d-flex justify-content-center align-items-center py-3">

                <div className="col-md-12 d-flex justify-content-left align-items-left py-3">

                    <a href="https://www.google.com" target="_blank"><img src="/images/envelope.svg" className="btnSVG"
                            alt="Instagram Logo" /></a>



                    <a href="https://en.wikipedia.org/wiki/Mobile_phone" target="_blank"><img
                            src="/images/telephone.svg" className="btnSVG" alt="Github Logo" /></a>



                    <a href="https://www.instagram.com/" target="_blank"><img src="/images/instagram.svg" className="btnSVG"
                            alt="Instagram Logo" /></a>



                    <a href="https://github.com/MariolaH" target="_blank"><img src="/images/github.svg" className="btnSVG"
                            alt="Github Logo" /></a>
                </div>
            </div>
        </div>
    </div>


    </div>

    <div className="frameBottom">
        <section>
            <div className='containerBottom text-center'>

                <div className="row d-flex justify-content-center align-items-center py-5">

                    <div className="col-sm-4 d-flex justify-content-center align-items-center py-5">

                        <div className="cardHome">
                            <div className="card-header CardHeader">
                                BLOG BY MARIOLA
                            </div>
                            <br />
                            <div className="card-body">
                                <h5 className="card-title">Was your first week what you expected? Why? Why not?</h5>
                                <br />
                                <p className="card-text">My first week was exactly what I expected it to be, a lot of
                                    information at once. A lot of good resources have been provided through...</p>
                                <br />
                                <a href="/HTML/Blog.html" className="btn-outline-dark btn-lg">B L O G</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>



    <div className="frameBottom">
        <section>
            <div className='containerBottom text-center'>

                <div className="row d-flex justify-content-center align-items-center py-5">

                    <div className="col-sm-4 d-flex justify-content-center align-items-center py-5">


                        <div className="cardHome">
                            <div className="card-header CardHeader">
                                BLOG BY MARIOLA
                            </div>
                            <br />
                            <div className="card-body">
                                <h5 className="card-title">What is something about you that can only be learned by reading
                                    this blog?</h5>
                                <br />
                                <p className="card-text">Something about me that could only be learned by reading this blog
                                    is that I love to travel. I met my husband...</p>
                                <br />
                                <a href="/HTML/Blog.html" className="btn-outline-dark button btn-lg">B L O G</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
    <div className="frameBottom">
        <section>
            <div className='containerBottom text-center'>

                <div className="row d-flex justify-content-center align-items-center py-5">

                    <div className="col-sm-4 d-flex justify-content-center align-items-center py-5">

                        <div className="cardHome">
                            <div className="card-header CardHeader">
                                BLOG BY MARIOLA
                            </div>
                            <br />
                            <div className="card-body">
                                <h5 className="card-title">What does it mean to be a good developer?</h5>
                                <br />
                                <p className="card-text">I think what it means to be a good developer is you have to be a
                                    good problem solver...</p>
                                <br />
                                <a href="/HTML/Blog.html" className="btn-outline-dark btn-lg">B L O G</a>
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

export default MainPage;