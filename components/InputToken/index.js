import React, { useState } from "react";

export const InputToken = () => {
	const [token, setToken] = useState("");
	return (
		<div>
			<label>
				Token
				<input
					type="password"
					name="token"
					value={token}
					onChange={(e) => setToken(e.target.value)}
				/>
			</label>
		</div>
	);
};
