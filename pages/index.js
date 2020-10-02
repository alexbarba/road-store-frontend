import Head from "next/head";
import styles from "../styles/Home.module.css";
import { InputToken } from "../components/InputToken";
import { InputKey } from "../components/InputKey";
import { ProductsTable } from "../components/ProductsTable";
export default function Home() {
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
					<InputToken className={styles.gridElement} />
					<InputKey />
					<ProductsTable />
				</div>
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
