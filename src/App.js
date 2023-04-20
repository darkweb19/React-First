import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import List from "./pages/List";

export default function App() {
	const [page, setPage] = useState("list");
	return (
		<div>
			<Navbar setPage={setPage} />
			{page === "list" ? <List /> : <Create />}
		</div>
	);
}
