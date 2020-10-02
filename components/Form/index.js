import React, { useState } from "react";

export const Form = ({ props }) => {
	const { searchProduct, searchProducts } = props;
	const [token, setToken] = useState("");
	const [key, setKey] = useState("");

	const product = (e) => {
		e.preventDefault();
		window.sessionStorage.setItem("token", token);
		searchProduct({ token: token, key: key });
	};
	const products = (e) => {
		e.preventDefault();
		window.sessionStorage.setItem("token", token);
		searchProducts(true);
	};
	return (
		<div>
			<form onSubmit={(e) => products(e)}>
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
				<input type="submit" value="Desglosa la lista de productos" />
				<form onSubmit={(e) => product(e)}>
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
					<input type="submit" value="Buscar Producto" />
				</form>
			</form>
		</div>
	);
};
