import React from 'react';
import './../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Emoji from '../Components/Emoji';

import { IconContext } from 'react-icons';

import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";


const Home = () => {
  return (
    <div className="App-header">
      <div className="App">
        <p>Hi there! I'm Chris Clement. <Emoji symbol="👋" /></p>
        <p>I'm a Software Developer <Emoji symbol="👨‍💻" /> and a Car Enthusiast <Emoji symbol="🔧" /></p>
        {/* <p>Car Enthusiast <Emoji symbol="🔧"/></p> */}
      </div>

      <hr style={{ width: "80%", background: "grey" }} />

      <div className="App">
        <p>ERP Application Developer at Florida International University</p>
        <p>Bachelor of Science in Computer Science, Florida International University <Emoji symbol="🎓" /> </p>
        <p>Former Research Intern at the <a className="App-link" href="https://www.sc.edu">University of South Carolina</a></p>
        {/* <p>Check out my <em>resume</em> to learn more.</p> */}
        <p>Interested? Shoot me an <a className="App-link" href="mailto:jclement92@yahoo.com">email</a>!</p>
        {/* <p>Check me out at <a className="App-link" href="https://caescir.cs.fiu.edu/staff-members/christopher-clement/">CAESCIR FIU</a>!</p> */}
      </div>

      <div className="center">
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em" }}>
          <div style={{marginTop: 20, marginBottom: 20, marginRight: 50}}>
            <a href="https://www.github.com/jclement92"> <IoLogoGithub /> </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em" }}>
          <div style={{marginTop: 20, marginBottom: 20, marginRight: 50}}>
            <a href="mailto:jclement92@yahoo.com"> <IoMdMail /> </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.75em" }}>
          <div style={{marginTop: 20, marginBottom: 20}}>
            <a href="https://www.linkedin.com/in/christopherclement"> <IoLogoLinkedin /> </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Home;