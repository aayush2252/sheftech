import React, { Component } from "react";
class NavBar extends Component {
  state = {
    sections: [
      { name: "About us", _id: "#about", selected: "" },
      { name: "Our Services", _id: "#services", selected: "" },
      { name: "Contact Us", _id: "#contact", selected: "" }
    ],
    sectionSelected: { name: "", _id: "" }
  };

  onSectionClicked = section => {
    this.setState({ sectionSelected: section });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white rounded sticky-top shadow-lg">
        <a className="navbar-brand " href="#">
          <h1 className="btn btn-outline-secondary btn-lg shadow-lg">
            ShefTech
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-pills">
            {this.state.sections.map(section => (
              <li
                className={
                  section._id === this.state.sectionSelected._id
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={() => this.onSectionClicked(section)}
              >
                <a className="nav-link" href={section._id}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
