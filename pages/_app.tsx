import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { styletron } from "../styletron";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
