import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Form } from "../components/Form";

import { ProductsTable } from "../components/ProductsTable";
import { ProductInfo } from "../components/ProductInfo";
export default function Home() {
	const [product, setProduct] = useState(undefined);
	return (
		<div className={styles.container}>
			<Head>
				<title>Road Store</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Bienvenido a Road Store</h1>

				<p className={styles.description}>
					Construimos los mejores vehículos eléctricos.
				</p>

				<div className={styles.grid}>
					<ProductsTable />
					<Form
						props={{ search: ({ token, key }) => setProduct({ token, key }) }}
					/>
				</div>
				{product && <ProductInfo props={{ product }} />}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://alexbarba.github.io"
					target="_blank"
					rel="noopener noreferrer">
					Alexis Barba
				</a>
			</footer>
		</div>
	);
}
