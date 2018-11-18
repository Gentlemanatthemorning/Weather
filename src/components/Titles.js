import React from "react";
import ReactDOM from "react-dom";

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather Finder</h1>
        <p>Find out temperature, condition and more...</p>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Titles />, document.getElementById("app"));
});

export default Titles;
