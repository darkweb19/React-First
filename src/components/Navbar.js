import React from "react";
import Button from "./Button";

export default function Navbar({ setPage }) {
	function setCreate() {
		setPage("create");
	}
	function setList() {
		setPage("list");
	}
	return (
		<div>
			<Button value="Create" handler={setCreate} />
			<Button value="List" handler={setList} />
		</div>
	);
}
