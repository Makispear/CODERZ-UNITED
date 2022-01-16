import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Footer from "./components/Footer";
import Nav from './components/Nav';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GettingStarted from "./pages/GettingStarted";
import FrequentlyAskedQuestions from "./pages/getting_started_modules/FrequentlyAskedQuestions"

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
            <Route path="/getting_started" element={<GettingStarted />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/frequently_asked_questions" element={<FrequentlyAskedQuestions />} />
          </Routes>
          <Footer BrandName={BrandName} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
