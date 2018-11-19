import React from "react";
import Clock from "./Clock"

const Titles = () => (
	<div>
		<h1 className="title-container__title">Weather Finder</h1>
		<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
    <div className="title-container__subtitle">
    <Clock />
    </div>
	</div>
);

export default Titles;