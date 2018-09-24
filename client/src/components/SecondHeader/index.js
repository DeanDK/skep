import React, { Component } from "react";
class SecondHeader extends Component {
  render() {
    return (
      <div id="container">
        <nav>
          <ul>
            <li>
              <a href="#">Grades</a>
              <ul>
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">10</a>
                </li>
                <li>
                  <a href="#">12</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Semester</a>
              <ul>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Links</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Subject</a>
              <ul>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Links</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
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
