import React, { Component } from "react";
class SecondHeader extends Component {
  render() {
    return (
      <div id="container">
        <nav className="searchBar">
          <ul>
            <li>
              <a>Grades</a>
              <ul>
                <li>
                  <a>7</a>
                </li>
                <li>
                  <a>10</a>
                </li>
                <li>
                  <a>12</a>
                </li>
              </ul>
            </li>

            <li>
              <a>Semester</a>
              <ul>
                <li>
                  <a>Resources</a>
                </li>
                <li>
                  <a>Links</a>
                </li>
                <li>
                  <a>Tutorials</a>
                </li>
              </ul>
            </li>

            <li>
              <a>Subject</a>
              <ul>
                <li>
                  <a>Resources</a>
                </li>
                <li>
                  <a>Links</a>
                </li>
                <li>
                  <a>Tutorials</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SecondHeader;
