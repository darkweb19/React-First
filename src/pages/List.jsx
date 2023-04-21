import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function List() {
	const [users, setUsers] = useState([]);
	async function fetchUser() {
		const result = await axios.get("http://localhost:4000/user");
		console.log(users);
		setUsers(result.data);
	}
	useEffect(() => {
		// eslint - disable - next - line;
		fetchUser();
	}, []);

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">SN</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Password</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>Edit</td>
					</tr>

					{users.map((item, index) => (
						<tr>
							<td>{index + 2} </td>
							<td> {item.name} </td>
							<td> {item.email} </td>
							<td> {item.password} </td>
							<td>
								<a href={item._id}>Delete</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
