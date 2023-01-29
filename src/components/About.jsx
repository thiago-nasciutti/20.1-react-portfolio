import React from 'react'
import photo from '../assets/photo.png';
import nodeLogo from '../assets/tec/node-logo.png';
import mongoLogo from '../assets/tec/mongo-logo.png';
import reactLogo from '../assets/tec/react-logo.png';
import mongooseLogo from '../assets/tec/mongoose-logo.png';
import mysqlLogo from '../assets/tec/mysql-logo.png';
import htmlLogo from '../assets/tec/html-logo.png';
import cssLogo from '../assets/tec/css-logo.png';
import jsLogo from '../assets/tec/js-logo.png';
import expressLogo from '../assets/tec/express-logo.png';
import bootstrapLogo from '../assets/tec/bootstrap-logo.png';
import jqueryLogo from '../assets/tec/jquery-logo.png';
import sequelizeLogo from '../assets/tec/sequelize-logo.png';
import graphqlLogo from '../assets/tec/graphql-logo.png';
import jestLogo from '../assets/tec/jest-logo.png';
import gitLogo from '../assets/tec/git-logo.png';
import herokuLogo from '../assets/tec/heroku-logo.png';

const About = () => {
  return (
    <div>
      <div className='about'>
        <h3>Who am I?</h3>
        <img className="photo" src={photo} alt="thiago" />
        <p className='pgAbout'>I am a seasoned professional passionate about technology who decided to end his 12 years career as an Automation Engineer to pursue his dream of becoming a Full-Stack Software Developer.
          As a Software Developer, I’ve been focusing on React, JS, Node.js, MongoDB, Mongoose, Express, MySQL, Sequelize, GraphQL,Bootstrap, jQuery, CSS, HTML and Jest.
          I am also a certified Scrum Master and Project Manager Professional, with a great understanding of the Agile methodology and proven experience leading people and corporate projects. With demonstrated strong skills in communication, teamwork, organization, problem-solving and logical thinking, I am diligent, detail-oriented and willing to embrace challenges of all forms.</p>
      </div>
      <div className='tec'>
        <h3>Technologies</h3>
        <div className='logo-area'>
          <img className='node-logo' src={nodeLogo} alt="node-logo" />
          <img className='mongo-logo' src={mongoLogo} alt="mongo-logo" />
          <img className='mongoose-logo' src={mongooseLogo} alt="mongoose-logo" />
          <img className='react-logo' src={reactLogo} alt="react-logo" />
          <img className='mysql-logo' src={mysqlLogo} alt="mysql-logo" />
          <img className='express-logo' src={expressLogo} alt="express-logo" />
          <img className='jest-logo' src={jestLogo} alt="jest-logo" />
          <img className='graphql-logo' src={graphqlLogo} alt="graphql-logo" />
          <img className='sequelize-logo' src={sequelizeLogo} alt="sequelize-logo" />
          <img className='bootstrap-logo' src={bootstrapLogo} alt="bootstrap-logo" />
          <img className='jquery-logo' src={jqueryLogo} alt="jquery-logo" />
          <img className='js-logo' src={jsLogo} alt="js-logo" />
          <img className='html-logo' src={htmlLogo} alt="html-logo" />
          <img className='css-logo' src={cssLogo} alt="css-logo" />
          <img className='git-logo' src={gitLogo} alt="git-logo" />
          <img className='heroku-logo' src={herokuLogo} alt="heroku-logo" />
        </div>
      </div>
    </div>
  );
};

export default About