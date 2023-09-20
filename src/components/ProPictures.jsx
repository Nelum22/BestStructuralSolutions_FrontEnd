import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const one= new URL("../images/1.PNG", import.meta.url)
const two = new URL("../images/2.PNG", import.meta.url)
const three= new URL("../images/3.PNG", import.meta.url)
const four= new URL("../images/4.PNG", import.meta.url)
const five= new URL("../images/5.PNG", import.meta.url)
const six = new URL("../images/6.PNG", import.meta.url)


function BasicExample() {
    return (
        <div id="information">
          <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={one} />
        <Card.Body>
          <Card.Title>Project 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary"
          onClick={() => Navigate("/Project1")}
          >See Details </Button>
        </Card.Body>
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={two} />
        <Card.Body>
          <Card.Title>Project 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See Details </Button>
        </Card.Body>
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={three} />
        <Card.Body>
          <Card.Title>Project 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See Details </Button>
        </Card.Body>
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={four} />
        <Card.Body>
          <Card.Title>Project 4</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See Details </Button>
        </Card.Body>
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={five} />
        <Card.Body>
          <Card.Title>Project 5</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See Details </Button>
        </Card.Body>
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={six} />
        <Card.Body>
          <Card.Title>Project 6</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">See Details </Button>
        </Card.Body>
      </Card>
      </div>

    
    </div>
    );
  }
  
  export default BasicExample;