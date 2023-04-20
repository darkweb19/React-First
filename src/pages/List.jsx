import React from "react";
import Table from "../components/Table";

export default function List() {
	return (
		<div>
			<div className="text-center">
				<h2>Lists</h2>
			</div>
			<Table data="Sujan" />
			<Table data="Bibesh" />
			<Table data="Prakanda" />
			<Table data="Hiraj" />
		</div>
	);
}
