import React, { Component } from 'react';
import './App.css';
import Emoji from './Components/Emoji';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <div className="App-header">
            <p>Hi there! I'm Christopher Clement. <Emoji symbol="😃" /></p>
            <p>Software Developer <Emoji symbol="💻"/></p>
            <p>Car enthusiast <Emoji symbol="🔧"/></p>

            <hr style={{ width: "80%", color: "white" }} />

            <div>
              <p>ERP Application Developer at Florida International University</p>
              <p>Bachelor of Science in Computer Science, Florida International University <Emoji symbol="🎓" /> </p>
              <p>Former Research Intern at the <a className="App-link" href="https://www.sc.edu">University of South Carolina</a></p>
              {/* <p>Check me out at <a className="App-link" href="https://caescir.cs.fiu.edu/staff-members/christopher-clement/">CAESCIR FIU</a>!</p> */}
            </div>
          </div>

          <footer className="App-Url">
            <a
              className="App-link"
              href="https://github.com/jclement92?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
              </a>
            <a
              className="App-link"
              href="https://linkedin.com/in/christopherclement"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              </a>
            <a
              className="App-link"
              href="./resume.pdf"
              rel="noopener noreferrer"
            >
              Resume
              </a>
            <a
              className="App-link"
              href="mailto:jclement92@yahoo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
              </a>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
