import React, { useState } from "react";

export const InputKey = () => {
	const [key, setKey] = useState("");
	return (
		<div>
			<label>
				Introduce la CLAVE o SKU que desees
				<input
					type="text"
					name="key"
					value={key}
					onChange={(e) => setKey(e.target.value)}
				/>
			</label>
		</div>
	);
};
