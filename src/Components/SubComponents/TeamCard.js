import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Card = ({ property }) => {
  const { index, picture, name } = property;
  return (
    <div id={`card-${index}`}>
      <Row className="justify-content-center">
        <Col>
          <div className="card neoTeam border-0">
            <div className="card-body text-center">
              <p>
                <img
                  width="230"
                  height="230"
                  className="card-img-top rounded-circle"
                  src={picture}
                  alt="card image"
                />
              </p>
              <h4 className="card-title text-dark">{name}</h4>
              <p className="card-text text-muted">
                Lorem ipsum dolor
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
