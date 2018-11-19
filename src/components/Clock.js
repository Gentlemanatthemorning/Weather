import React from "react";
import ReactDOM from "react-dom";

const ClockTime = props => <h1>{props.time}</h1>;

const ClockDate = props => <h1>{props.date}</h1>;

class Clock extends React.Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <div>
        <ClockTime time={this.state.date.toLocaleTimeString()} />
        <ClockDate date={this.state.date.toLocaleDateString()} />
      </div>
    );
  }

  componentDidMount() {
    this.x = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Clock />, document.getElementById("app"));
});

export default Clock;