import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Footer from "./components/Footer";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const BrandName = "CODERZ UNITED"

  const httpLink = createHttpLink({
    // uri: "http://localhost:3001/graphql",
    uri: "/graphql"
  });

  const authLink = setContext((__, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-black">
          <Nav BrandName={BrandName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer BrandName={BrandName} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
