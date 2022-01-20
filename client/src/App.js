import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from './components/Nav';
// Routes -----------------------------------
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GettingStarted from "./pages/GettingStarted";
import FrequentlyAskedQuestions from "./pages/getting_started_modules/FrequentlyAskedQuestions"
import VSCode from "./pages/getting_started_modules/installations/VSCode";
import GitHub from "./pages/getting_started_modules/installations/GitHub";
import LearnMore from "./pages/LearnMore";
// Footer -----------------------------------
import Footer from "./components/Footer";

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
        <Nav BrandName={BrandName} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Getting started Modules  */}
          <Route path="/getting_started" element={<GettingStarted />} />
          <Route path="/getting_started/installations/frequently_asked_questions" element={<FrequentlyAskedQuestions />} />
          <Route path="/getting_started/installations/VSCode" element={<VSCode />} />
          <Route path="/getting_started/installations/GitHub" element={<GitHub />} />
          <Route path="/learn_more" element={<LearnMore />} />
        </Routes>
        <Footer BrandName={BrandName} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
