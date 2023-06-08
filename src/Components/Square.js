import React from "react";

function Square(props) {
	const { number, color } = props;
	console.log(props); //{ number: , color: }
	return (
		<div className="square" style={{ backgroundColor: color }}>
			Square {number}{" "}
		</div>
	);
}

export default Square;
