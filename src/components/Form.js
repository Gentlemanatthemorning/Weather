import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <h1 style={{ paddingBottom: "15px", color: "#0095ff" }}>
      In a galaxy far, far away...
    </h1>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>
      <img src="../img/button.jpg" alt="" />
    </button>
  </form>
);

export default Form;
