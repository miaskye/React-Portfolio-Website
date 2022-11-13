import React from 'react'
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, my name is Mia!</h2>
          <div className="prompt">
            <p>I am learning to become a Front-End developer. Welcome to my portfolio page!</p>
            <LinkedInIcon/>
            <EmailIcon/>
            <GithubIcon/>
          </div>
      </div>
      <div className="skills"> 
        <h1>Skills</h1>
        <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>ReactJS, MaterialUI, HTML, CSS</span>
            </li>
            <li className="list">
                <h2>Languages</h2>
                <span>JavaScript</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
