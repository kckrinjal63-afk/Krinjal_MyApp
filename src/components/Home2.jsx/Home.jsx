import React from "react";
import profileImg from "../../assets/image.png";
// import "./home.css"

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Krinjal KC</h1>
          <h2>Frontend Developer & React Learner</h2>
          <p>
            I'm passionate about building responsive and user-friendly websites.
            Currently learning React and creating projects to sharpen my skills.
            Welcome to my portfolio!
          </p>
          <button className="home-btn">Download CV</button>
        </div>
        <div className="home-img">
         <img src={profileImg} alt="krinjal KC" />
        </div>
      </section>
    </div>
  );
};

export default Home;