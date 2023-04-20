import React from "react";

export default function Button({ value, handler }) {
	return (
		<button className="btn btn-primary mx-3" onClick={handler}>
			{value}
		</button>
	);
}
