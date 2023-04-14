import './Home.css'
import { CiInstagram, CiLinkedin, CiFacebook, CiMail } from 'react-icons/ci';
import logo from './../../../assets/cv.jpeg'

const Home = () => {
  return (
    <div id="home" className="content-detail">
      <div className="home">
        <img className="circle-image"
             src={logo}
             alt="Circle"/>
        <h2><b>Minh Tu Phan</b></h2>
        <div className="typewriter">
          <p>Hello! I am a software engineer and a photographer.</p>
        </div>
        <div>
          <CiInstagram/>
          <CiLinkedin/>
          <CiFacebook/>
          <CiMail/>
        </div>
      </div>

    </div>
  );
};

export default Home;