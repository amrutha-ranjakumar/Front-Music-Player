import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Button, Row, Col } from 'react-bootstrap';

function Review({ music }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-center my-3 p-5  "  >
        <Button
       
          variant="warning"
          onClick={() => setOpen(!open)}
          aria-controls="review-collapse-text"
          aria-expanded={open}
            >
          Click here to see Review
        </Button>
      </div>
      <Collapse in={open} >
        <div id="review-collapse-text" className="p-3" >
          <Row className="text-center">
            <Col xs={12} md={6} className="mb-3">
              <h5>Name: <span className="text-black">{music.name}</span></h5>
              <h5>Date: <span className="text-black">{music.date}</span></h5>
              <h5>Rate: <span className="text-black">{music.rate}</span></h5>
              <p style={{ textAlign: 'justify' }}>
                Description: <span className="text-warning">{music.description}</span>
              </p>
            </Col>
            <Col xs={12} md={6} className="mb-3">
              <h5>Name: <span className="text-black">{music.name1}</span></h5>
              <h5>Date: <span className="text-black">{music.date1}</span></h5>
              <h5>Rate: <span className="text-black">{music.rate1}</span></h5>
              <p style={{ textAlign: 'justify' }}>
                Description: <span className="text-black">{music.description1}</span>
              </p>
            </Col>
          </Row>
        </div>
      </Collapse>
    </>
  );
}

export default Review;
