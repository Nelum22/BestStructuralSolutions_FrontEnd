import React from "react";
import { Carousel, Card, Stack, Button } from "react-bootstrap";

const one= new URL("../images/one.jpg", import.meta.url)
const two = new URL("../images/two.jpg", import.meta.url)
const three= new URL("../images/three.jpg", import.meta.url)
const four = new URL("../images/four.jpg", import.meta.url)
const five= new URL("../images/five.jpg", import.meta.url)

export default function LandCarousel() {
  const reviews =  [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
    { _id: 7, text: "stu" },
    { _id: 8, text: "vwx" },
    { _id: 9, text: "yza" }
  ];

  return (
    <div id="new">
<h1>WHY YOU CHOOSE US?</h1>
 

      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500 }}>
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                
                className="h-100 justify-content-center align-items-center"
                gap={1}
              >
                <Card style={{ width: "23rem",height:"26rem" }}  >
                <Card.Body>
                <Card.Img src={one} />
                 
                    <Card.Title>Effective Communication</Card.Title>
                    <Card.Text>
                    Our team excels in seamless communication, ensuring your project's success through clarity and collaboration and Our open dialogue ensures project success.
                    </Card.Text>
                  
                  </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src={two}/>
                
                    <Card.Title>Adaptability</Card.Title>
                    <Card.Text>
                    We adapt to challenges, evolving with the project's needs to guarantee exceptional results in ever-changing conditions and We thrive in changing environments.
                    </Card.Text>
             </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src={three} />
                  
                    <Card.Title>Attractive Solutions</Card.Title>
                    <Card.Text>
                    We deliver innovative and visually stunning structural solutions that captivate both eyes and engineering excellence.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src={four}/>
                  
                    <Card.Title>Sustainability Commitment</Card.Title>
                    <Card.Text>
                    We are dedicated to eco-friendly practices, integrating sustainable solutions into every project for a greener future.           
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ width: "23rem",height:"26rem" }}>
                <Card.Body>
                <Card.Img src={five} />
                  
                    <Card.Title> Attentiveness</Card.Title>
                    <Card.Text>
                    Our meticulous attention to detail ensures precision and perfection in every aspect of your structural project and Detail-driven excellence in every phase.
                    </Card.Text>
                  </Card.Body>
                </Card>

              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

</div>
  );
}
