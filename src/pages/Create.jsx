import React from "react";
// import Input from "../components/Input";
// import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

export default function Create() {
	const [name, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function addUser() {
		await axios.post("http://localhost:4000/user", {
			name,
			email,
			password,
		});
		setFullname("");
		setEmail("");
		setPassword("");
	}

	return (
		<div className="text-center">
			<div className="text-center">
				<h1>Create</h1>
			</div>
			{/* <Input
				label="First Name"
				id="name"
				name="name"
				type="text"
				placeholder="Enter your Name"
			/>
			<Input
				label="Your Email "
				id="email"
				name="email"
				type="text"
				placeholder="Enter your email"
			/>
			 <Input
				label="Password"
				id="password"
				name="password"
				type="password"
				placeholder="Enter your password"
			/> 
			<Button value="Add" /> */}

			<input
				type="text"
				name="name"
				value={name}
				onChange={(e) => setFullname(e.target.value)}
				placeholder="enter full name"
			/>
			<br />
			<br />
			<input
				type="text"
				name="email"
				value={email}
				placeholder="enter email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<br />
			<input
				type="text"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="enter password"
			/>
			<br />
			<br />
			<button onClick={addUser}>Submit</button>
		</div>
	);
}
