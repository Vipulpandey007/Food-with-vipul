import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div className="about">
        <h1>This is about us page</h1>
        <User name={"Vipul kumar pandey"} />
      </div>
    );
  }
}

export default About;
