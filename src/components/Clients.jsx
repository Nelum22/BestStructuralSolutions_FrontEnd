import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const one= new URL("../images/c1.jpg", import.meta.url)
const two = new URL("../images/c2.jpg", import.meta.url)
const three= new URL("../images/c3.jpg", import.meta.url)
const four= new URL("../images/c4.jpg", import.meta.url)



function Client() {
    return (
        <div id="information">
          <h1>Our Clients</h1>
          <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={one} />
       
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={two} />
        
      </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={three} />
        </Card>
      </div>

      <div className='recipe'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={four} />
        
      </Card>
      </div>

     
    </div>
    );
  }
  
  export default Client;