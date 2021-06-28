import React, { Component } from "react"; 
type BlogState = {
  time: Date;
};
export class Clock extends Component<{}, BlogState> {

  load() {
    this.setState({
      time: new Date(),
    });
  }
  componentWillMount() {
    this.load();
  }


  componentDidMount() {
    setInterval(() => this.load(), 1000);
  }


  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}
