import React, { useState } from "react";

export const Form = ({ props }) => {
	const { search } = props;
	const [token, setToken] = useState("");
	const [key, setKey] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		search({ token: token, key: key });
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Token
					<input
						type="password"
						name="token"
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>
				</label>
				<label>
					Introduce la CLAVE o SKU que desees
					<input
						type="text"
						name="key"
						value={key}
						onChange={(e) => setKey(e.target.value)}
					/>
				</label>
				<input type="submit" value="Buscar" />
			</form>
		</div>
	);
};
