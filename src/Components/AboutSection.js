import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import logo from "../Assets/images/sports-logo-transparent.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NeoCard from "./SubComponents/NeoCard";
export default function AboutSection() {
  return (
    <div className="About">
      <div class="bg">
        <Container>
          <Row className="justify-content-center">
            <h1 className="display-4">ABOUT US</h1>
          </Row>

          <Row>
            <Col sm={4}>
              <NeoCard url={logo} />
            </Col>
            <Col sm={6}>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lacus ac sem bibendum vulputate. Donec
                vitae pretium massa, vitae dictum neque. Donec vitae fermentum
                diam. Sed posuere nulla nulla. Phasellus vitae purus viverra,
                dignissim ligula ac, ornare leo. Vivamus accumsan nisl nibh, ac
                consequat mauris elementum eget. Mauris bibendum euismod
                facilisis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nam purus purus,
                varius sit amet pharetra in, lacinia nec nulla. Quisque eget
                vulputate neque, vitae aliquet metus.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hqvGOPB0KmQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
            <Col sm={5}>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum porttitor lacus ac sem bibendum vulputate. Donec
                vitae pretium massa, vitae dictum neque. Donec vitae fermentum
                diam. Sed posuere nulla nulla. Phasellus vitae purus viverra,
                dignissim ligula ac, ornare leo. Vivamus accumsan nisl nibh, ac
                diam. Sed posuere nulla nulla. Phasellus vitae purus viverra,
                dignissim ligula ac, ornare leo. Vivamus accumsan nisl nibh, ac
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
