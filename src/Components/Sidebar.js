import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
	//all useState hooks are used inside on the top the functional component before the return
	const colorArray = ["blue", "red", "yellow"];
	const [colors, setColors] = useState(colorArray);
	const [name, setName] = useState("Ginny");
	//const [state, setState] = useState(initial State)

	return (
		<div className="sidebar">
			<h1>{name}</h1>
			<button onClick={() => setName("Greyson")}>Change Name</button>
			{colors.map((color) => {
				return <p style={{ color: color, marginLeft: "10px" }}>{color}</p>;
			})}
		</div>
	);
}

export default Sidebar;
