import React, { Component } from "react";
class SecondHeader extends Component {
  render() {
    return (
      <div id="container">
        <nav>
          <ul>
            <li>
              <a href="#">WordPress</a>
              <ul>
                <li>
                  <a href="#">Themes</a>
                </li>
                <li>
                  <a href="#">Plugins</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">Web Design</a>
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
              <a href="#">Web Design</a>
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
