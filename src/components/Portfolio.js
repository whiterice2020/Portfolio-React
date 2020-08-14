import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'


function Portfolio () {
    return (
      <>
      <h1>Portfolio</h1>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/" />
    <Card.Body>
      <Card.Title>Code Refactor</Card.Title>
      <Card.Text>
        asdf
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Code Refactor Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1506849041215-e76092bdaa7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80/100px160" />
    <Card.Body>
      <Card.Title>My Portfolio GitHub</Card.Title>
      <Card.Text>
      This is my portfolio of all projects and homework assignments created and completed for the duration of the University of Central Florida's Full Stack Developer Boot Camp.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1351&q=80/100px160" />
    <Card.Body>
      <Card.Title>Password Generator</Card.Title>
      <Card.Text>
        An application which generates random passwords based on the user's choices.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Password Generator Live Page</Button>
    </Card.Footer>
  </Card>
</CardDeck>

{/* New Row of Cards */}
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/100px160" />
    <Card.Body>
      <Card.Title>Javascript Quiz Game</Card.Title>
      <Card.Text>
        A fun quiz game about JavaScript!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Javascript Quiz Game Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Daily Planner GitHub</Card.Title>
      <Card.Text>
        A Daily planner which allows you to enter tasks and check them off when completed
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Daily Planner Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
        A weather dashboard to display weather for the inputted city
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">Weather Dashboard Live Page</Button>
    </Card.Footer>
  </Card>
</CardDeck>

{/* Next Row of Cards */}
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1353&q=80" />
    <Card.Body>
      <Card.Title>Electric Gallery</Card.Title>
      <Card.Text>
        View art galleries from the Harvard Museum of Art and The Metropolitian Museum
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Electric Gallery Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Good ReadMe Generator</Card.Title>
      <Card.Text>
        A Node app which automates the creation of README files for GitHub
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">Good ReadMe Generator Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1494935362342-566c6d6e75b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Employee Tracker</Card.Title>
      <Card.Text>
      An application to architect and build a solution for managing a company's employees
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">Employee Tracker Live Page</Button>
    </Card.Footer>
  </Card>
</CardDeck>

{/* Next Row of Cards */}
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
      An application that can be used to write, save, and delete notes.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Note Taker Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1442508748335-fde9c3f58fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80" />
    <Card.Body>
      <Card.Title>Employee Management System</Card.Title>
      <Card.Text>
      This application allows you to add employees information and displays them to an HTML Page
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary"> Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1494247622028-9a5bbfbf529a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
    <Card.Body>
      <Card.Title>Burger Logger</Card.Title>
      <Card.Text>
        A fun application which allows you to enter burger orders for dining in or carry out
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">Burger Logger Live Page</Button>
    </Card.Footer>
  </Card>
</CardDeck>

{/* Next Row of Cards */}
<br></br>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1500531359996-c89a0e63e49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" />
    <Card.Body>
      <Card.Title>Unheard</Card.Title>
      <Card.Text>
        Informative App which displays Drug Overdose Deaths by state.  Users can add their personal stories which will show on the map
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">GitHub Code</Button>
    <Button variant="primary">Unheard Live Page</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Coming Soon</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">GitHub Code</Button>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512138073931-b0ca6edf55e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Card.Body>
      <Card.Title>Coming Soon</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">GitHub Code</Button>
      <Button variant="primary">GitHub Code</Button>
    </Card.Footer>
  </Card>
</CardDeck>

      </>
      );
  };

export default Portfolio;
