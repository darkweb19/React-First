import React from "react";

export default function Input({ label, type, id, name, placeholder }) {
	return (
		<div className="mb-3">
			<label className="form-label" htmlFor={id}>
				{label}
			</label>
			<input
				className="form-control"
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
			/>
		</div>
	);
}
