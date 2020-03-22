import React, { Component } from "react";
import "../App.css";
import Card from "../Components/SubComponents/TeamCard";
import data from "../Components/SubComponents/Data";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties
    };
  }

  render() {
    return (
      <div className="Team">
        <h1 className="text-center">OUR TEAM</h1>

        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-7 five-three">
              <div className="row">
                <div className="col-sm-4">
                  <Card property={data.properties[1]} />
                </div>
                <div className="col-sm-4">
                  <Card property={data.properties[2]} />
                </div>
                <div className="col-sm-4">
                  <Card property={data.properties[3]} />
                </div>
              </div>
            </div>
            <div className="col-sm-5 five-two">
              <div className="row">
                <div className="col-sm-6">
                  <Card property={data.properties[0]} />
                </div>
                <div className="col-sm-6">
                  <Card property={data.properties[5]} />
                </div>
              </div>
            </div>
          </div>
          ​
        </div>
      </div>
    );
  }
}

export default App;
