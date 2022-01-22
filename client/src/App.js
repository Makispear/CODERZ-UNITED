import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Nav from './components/Nav';
// Routes ***********************************************
// Logged Out 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LearnMore from "./pages/LearnMore";

// after logging in
import AllModules from "./pages/AllModules/AllModules";

// if getting started 1.0
import GettingStarted from "./pages/AllModules/getting_started_modules/GettingStarted"
// >>> 
//1.1.0
import FrequentlyAskedQuestions from "./pages/AllModules/getting_started_modules/FrequentlyAskedQuestions"
//1.1.2
import VSCode from "./pages/AllModules/getting_started_modules/installations/VSCode";
import GitHub from "./pages/AllModules/getting_started_modules/installations/GitHub";

// if getting started


// Footer ***********************************************
import Footer from "./components/Footer";
import CourseModules from "./pages/AllModules/course_modules/CourseModules";

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
          <Route path="/learn_more" element={<LearnMore />} />
          {/* <Route path="/all_modules/learn_more" element={<LearnMore />} /> */}

          {/* Getting started Modules  */}
          <Route path="/all_modules/" element={<AllModules />} />
          <Route path="/all_modules/getting_started/" element={<GettingStarted />} />
          <Route path="/all_modules/getting_started/frequently_asked_questions/" element={<FrequentlyAskedQuestions />} />
          <Route path="/all_modules/getting_started/installations/vs_code" element={<VSCode />} />
          <Route path="/all_modules/getting_started/installations/github" element={<GitHub />} />

          {/* Course Modules  */}
          <Route path="/all_modules/course_modules" element={<CourseModules />} />
        </Routes>
        <Footer BrandName={BrandName} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
