import React from "react";

export default function Table({ data }) {
	return (
		// <table class="table text-center">
		// 	<thead>
		// 		<tr>
		// 			<th scope="col">#</th>
		// 			<th scope="col">First</th>
		// 			<th scope="col">Last</th>
		// 			<th scope="col">Email</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		<tr>
		// 			<th scope="row">1</th>
		// 			<td>Mark</td>
		// 			<td>Otto</td>
		// 			<td>@mdo</td>
		// 		</tr>
		// 		<tr>
		// 			<th scope="row">2</th>
		// 			<td>Jacob</td>
		// 			<td>Thornton</td>
		// 			<td>@fat</td>
		// 		</tr>
		// 	</tbody>
		// </table>
		<ul class="list-group">
			<li class="list-group-item"> {data} </li>
		</ul>
	);
}
