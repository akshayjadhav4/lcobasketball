import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import TournamentCard from "./SubComponents/TournamentCard";
import cardimg1 from "../Assets/images/card1.jpg";
import cardimg2 from "../Assets/images/img4.png";
import cardimg3 from "../Assets/images/img3.png";

export default function Tournament() {
  return (
    <div className="Tournament">
      <Container>
      <Row className="justify-content-center">
        <h1>Tournament</h1>
      </Row>
      <h3 className='text-center'>Big Tournament coming soon</h3>
      <Row>
          <Col sm={4}>
          <TournamentCard title='Lorem ipsum' text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lacus ac sem bibendum vulputate.' img={cardimg1} time='01:00 PM' day='Monday' />
          </Col>
          <Col sm={4}>
          <TournamentCard title='Lorem ipsum' text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lacus ac sem bibendum vulputate.' img={cardimg2} time='01:00 PM' day='Friday' />
          </Col>
          <Col sm={4}>
          <TournamentCard title='Lorem ipsum' text='  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lacus ac sem bibendum vulputate.' img={cardimg3} time='03:00 PM' day='Sunday' />
          </Col>
          
      </Row>
      </Container>
    </div>
  );
}
