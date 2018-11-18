import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Form />, document.getElementById("app"));
});

export default Form;
