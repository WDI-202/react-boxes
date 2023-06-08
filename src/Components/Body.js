import React from "react";
import Square from "./Square";

function Body() {
	return (
		<div className="body">
			<Square number="1" color="red" />
			<Square number="2" color="blue" />
			<Square number="3" color="yellow" />
		</div>
	);
}

export default Body;
