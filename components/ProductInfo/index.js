import React from "react";
import { gql, useQuery } from "@apollo/client";

const PRODUCTID = gql`
	query Product($id: ID) {
		product(_id: $id) {
			_id
			sku
			description
		}
	}
`;

const PRODUCTSKU = gql`
	query Product($sku: String) {
		product(sku: $sku) {
			_id
			sku
			description
		}
	}
`;

export const ProductInfo = ({ props }) => {
	const { key } = props.product;
	let input, query;
	if (key[0] == "5") {
		input = { id: key };
		query = PRODUCTID;
	} else {
		input = { sku: key };
		query = PRODUCTSKU;
	}

	const { loading, error, data } = useQuery(query, {
		variables: { ...input },
	});
	if (loading) return <div>...loading</div>;
	if (error) return <div>error :(</div>;
	if (!data?.product?._id) return <div>Producto no encontrado</div>;
	return (
		<div>
			<p>_id: {data?.product?._id}</p>
			<p>sku: {data?.product?.sku}</p>
			<p>descripcion: {data?.product?.description}</p>
		</div>
	);
};
