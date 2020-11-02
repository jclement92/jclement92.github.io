import React from 'react';
import './../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Emoji from '../Components/Emoji';

const Home = () => {
    return (
      <div className="App-header">
          <p>Hi there! I'm Christopher Clement. <Emoji symbol="😃" /></p>
          <p>Software Developer <Emoji symbol="💻"/></p>
          <p>Car enthusiast <Emoji symbol="🔧"/></p>

          <hr style={{ width: "80%", background: "grey" }} />

          <div>
            <p>ERP Application Developer at Florida International University</p>
            <p>Bachelor of Science in Computer Science, Florida International University <Emoji symbol="🎓" /> </p>
            <p>Former Research Intern at the <a className="App-link" href="https://www.sc.edu">University of South Carolina</a></p>
            {/* <p>Check me out at <a className="App-link" href="https://caescir.cs.fiu.edu/staff-members/christopher-clement/">CAESCIR FIU</a>!</p> */}
          </div>
      </div>
    );
}

export default Home;