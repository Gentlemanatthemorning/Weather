import React from "react";
import ReactDOM from "react-dom";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.wind && <p>Wind: {this.props.wind}</p>}
        {this.props.description && <p>Condition: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Weather />, document.getElementById("app"));
});

export default Weather;
