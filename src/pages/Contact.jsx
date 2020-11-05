export default function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 my-body">
          <h1>Contact</h1>
          <hr className="my-4" />
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Name"
                  />
                </div>
              </form>
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
              </form>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
