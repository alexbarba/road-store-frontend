import React from "react";
import { gql, useQuery } from "@apollo/client";

const PRODUCTS = gql`
	{
		products {
			_id
			sku
		}
	}
`;
export const ProductsTable = () => {
	const { loading, error, data } = useQuery(PRODUCTS);
	if (loading) return <div>...loading</div>;
	if (error) return <div>error :(</div>;
	return (
		<table>
			<tr>
				<th>_id</th>
				<th>sku</th>
			</tr>
			{data.products.map((product) => {
				return (
					<tr>
						<td>{product._id}</td>
						<td>{product.sku}</td>
					</tr>
				);
			})}
		</table>
	);
};
