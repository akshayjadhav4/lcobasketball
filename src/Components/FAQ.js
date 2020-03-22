import React from "react";
import QCard from "./SubComponents/FAQCard";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import FAQImg from '../Assets/images/FAQ.png'
export default function FAQ() {
  return (
    <div className="FAQ">
      <div className="container">
        <Row className="justify-content-center">
          <h1>Frequently Asked Questions</h1>
          <br />
          <br />
          <br />
        </Row>

        <Row className='justify-content-center'>
        <Col sm={3}>
          <img src={FAQImg} style={{ maxWidth: '100%', height: 'auto' }} alt=""/>
          </Col>
          <Col sm={9}>
          <QCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?"
          answer=" Donec mi ligula, feugiat ut porttitor vitae, maximus et nisl. Sed at gravida nulla, nec fermentum ante. Praesent feugiat erat nec quam pretium ornare"
        />

        <QCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?"
          answer=" Donec mi ligula, feugiat ut porttitor vitae, maximus et nisl. Sed at gravida nulla, nec fermentum ante. Praesent feugiat erat nec quam pretium ornare"
        />
        <QCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?"
          answer=" Donec mi ligula, feugiat ut porttitor vitae, maximus et nisl. Sed at gravida nulla, nec fermentum ante. Praesent feugiat erat nec quam pretium ornare"
        />
        <QCard
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit ?"
          answer=" Donec mi ligula, feugiat ut porttitor vitae, maximus et nisl. Sed at gravida nulla, nec fermentum ante. Praesent feugiat erat nec quam pretium ornare"
        />
          </Col>
         
        </Row>
      </div>
    </div>
  );
}
