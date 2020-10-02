import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://road-store.herokuapp.com/graphql",
	cache: new InMemoryCache(),
	request: (operation) => {
		const token = window.sessionStorage.getItem("token");
		const authorization = token ? token : "";
		console.log(authorization);
		operation.setContext({
			headers: {
				authorization,
			},
		});
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
