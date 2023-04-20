import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Create() {
	return (
		<div>
			<div className="text-center">
				<h1>Create</h1>
			</div>
			<Input
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
			<Button value="Add" />
		</div>
	);
}
