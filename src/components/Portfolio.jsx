import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
//Sites
import ultimateMovie from '../assets/sites/ultimate.png';
import photoPort from '../assets/sites/oh.png';
import runBuddy from '../assets/sites/run.png';
import codeQuiz from '../assets/sites/code.png';
import robotGladiator from '../assets/sites/robot.png';
import taskinator from '../assets/sites/task.png';
import passwordGenerator from '../assets/sites/pass.png';
import taskmaster from '../assets/sites/taskmaster.png';

function Portfolio() {
  return (
    <div className='Portfolio'>
      {/* Taskmaster */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={taskmaster} />
        <Card.Body>
          <Card.Title>Taskmaster</Card.Title>
          <Card.Text>
            Tasks Management App
            <br />
            .jQuery .Bootstrap
          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/taskmaster/' >Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/taskmaster'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Ultimate Movies */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ultimateMovie} />
        <Card.Body>
          <Card.Title>Ultimate Movies</Card.Title>
          <Card.Text>
            Select and save movies by rating
            <br />
            .HTML .CSS .jQuery
          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/Ultimate-Movie/' >Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/Ultimate-Movie'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Oh Snap! */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={photoPort} />
        <Card.Body>
          <Card.Title>Oh Snap!</Card.Title>
          <Card.Text>
            Photography Platform
            <br />
            .React
          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/photo-port/'>Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/photo-port'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Run Buddy */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={runBuddy} />
        <Card.Body>
          <Card.Title>Run Buddy</Card.Title>
          <Card.Text>
            Landing Page
            <br />
            .HTML .CSS


          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/run-buddy/'>Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/run-buddy'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Code Quiz */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={codeQuiz} />
        <Card.Body>
          <Card.Title>Code Quiz</Card.Title>
          <Card.Text>
            Timed Coding Quiz
            <br />
            .JS .HTML .CSS

          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/code-quiz/' >Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/code-quiz'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Password Generator */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={passwordGenerator} />
        <Card.Body>
          <Card.Title>Password Generator</Card.Title>
          <Card.Text>
            Generate Password
            <br />
            .JS .HTML .CSS

          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/password-generator/'>Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/password-generator'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Robot Gladiator */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={robotGladiator} />
        <Card.Body>
          <Card.Title>Robot Gladiator</Card.Title>
          <Card.Text>
            Game
            <br />
            .JS
          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/robot-gladiators/'>Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/robot-gladiators'>GitHub</Button>
        </Card.Body>
      </Card>

      {/* Taskinator */}
      <Card className='card' border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={taskinator} />
        <Card.Body>
          <Card.Title>Taskinator</Card.Title>
          <Card.Text>
            Kanban Board
            <br />
            .JS .HTML .CSS

          </Card.Text>
          <Button variant="dark" href='https://thiago-nasciutti.github.io/taskinator/'>Site</Button>&nbsp;
          <Button variant="dark" href='https://github.com/thiago-nasciutti/taskinator'>GitHub</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Portfolio;