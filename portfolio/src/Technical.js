function Technical() {
    return(

<div className="container contact-card-wrapper py-5 vh-100">
  <section
    style={{
      backgroundImage:
        "linear-gradient(to bottom right, rgb(11, 11, 11), rgb(237, 236, 230), rgb(106, 104, 100))"
    }}
  >
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-6 column off-set">
        <div className="card">
          <h2 className="headerTwo text-center py-5">
            <b>What is pseudocode and how does it help with programming</b>
          </h2>
          <br />
          <br />
          <img
            src="images/frustrated.jpeg"
            className="square profilePic card-img-top"
            alt="Image of frustration"
          />
          <br />
          <br />
          <br />
          <p className="mainParagraph">
            According, to an article written by
            <a href="https://www.freecodecamp.org/news/author/ubahthebuilder/">
              Kingsley Ubah
            </a>
            on
            <a href="https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/">
              freecodecamp
            </a>
            "Pseudocode literally means ‘fake code’. It is an informal and
            contrived way of writing programs in which you represent the
            sequence of actions and instructions (aka algorithms) in a form that
            humans can easily understand."
            <br />
            <br />
            Like the article said, pseudocode is just a way of translating what
            a program should do into plain old English. You are thinking about
            the problem at hand and writing out the steps on how to solve it.{" "}
            <br />
            <br />
            When writing pseudocode I like to break it up into components:
          </p>
          <ul>
            <li>
              What is the objective of this program:
              <br />
            </li>
            <li className="example">
              For example- what does this program need to do.
            </li>
            <br />
            <li>
              What variables and/or state will I need for this program:
              <br />
            </li>
            <li className="example">
              For example- show location or show who’s turn it is.
            </li>
            <br />
            <li>
              {" "}
              What functions does the program need to performed:
              <br />
            </li>
            <li className="example">
              For example- covert currencies or go from page to page.
            </li>
            <br />
            <li>
              What procedures are required for the program:
              <br />
            </li>
            <li className="example">
              For example- add buttons or add a counter or hide this element
              till something happens.
            </li>
            <br />
          </ul>
          <p />
          <p className="bottomParagraph">
            Pseudocoding the steps before writing any code will save you time
            when it comes to coding and help with debugging.
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  </section>
</div>


    );
}

export default Technical;