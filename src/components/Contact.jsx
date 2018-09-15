import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="card p-3 mb-2 bg-light text-dark border-0">
        <div className="card-header shadow-lg">
          <h3 className="text-center">Contact us</h3>
        </div>
        <div className="card-body">
          <form>
            <div class="form-row">
              <div className="form-group col-md-2">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="First Name"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-2">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="Last Name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="xyz@xyz.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputComments">Comments</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputTextArea"
                  placeholder="Please mention your query"
                />
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
