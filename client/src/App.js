
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
import FrequentlyAskedQuestions from "./pages/AllModules/getting_started_modules/intro_to_web_development/FrequentlyAskedQuestions"
//1.1.2
import VSCode from "./pages/AllModules/getting_started_modules/installations/VSCode";
import GitHub from "./pages/AllModules/getting_started_modules/installations/GitHub";
import Chrome from "./pages/AllModules/getting_started_modules/installations/Chrome";
import Git from "./pages/AllModules/getting_started_modules/installations/Git";

// if getting started


// Footer ***********************************************
import Footer from "./components/Footer";
import CourseModules from "./pages/AllModules/course_modules/CourseModules";
import ScrollToTop from "./utils/scrollToTop";
import NotFound from "./utils/NotFound";
import Auth from "./utils/auth";
import CreateRepo from "./pages/AllModules/course_modules/Build_your_first_website/createRepo";
import CloneYourRepo from "./pages/AllModules/course_modules/Build_your_first_website/clone_your_repo";

function App() {


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
        <ScrollToTop />
        <Nav />
        {!Auth.loggedIn() &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/learn_more" element={<LearnMore />} />
          </Routes>
        }

        {Auth.loggedIn() &&
          <Routes>
            {/* Getting started Modules  */}
            <Route path="/all_modules/" element={<AllModules />} />
            <Route path="/all_modules/getting_started/" element={<GettingStarted />} />
            <Route path="/all_modules/getting_started/frequently_asked_questions/" element={<FrequentlyAskedQuestions />} />
            <Route path="/all_modules/getting_started/installations/vs_code/" element={<VSCode />} />
            <Route path="/all_modules/getting_started/installations/github/" element={<GitHub />} />
            <Route path="/all_modules/getting_started/installations/chrome/" element={<Chrome />} />
            <Route path="/all_modules/getting_started/installations/git/" element={<Git />} />

            {/* Course Modules  */}
            <Route path="/all_modules/course_modules" element={<CourseModules />} />
            <Route path="/all_modules/course_modules/create_repo/" element={<CreateRepo />} />
            <Route path="/all_modules/course_modules/clone_your_repo/" element={<CloneYourRepo />} />
            <Route path='*' exact={true} element={<NotFound />} />
          </Routes>
        }
        <Footer />


      </Router>
    </ApolloProvider>
  );
}

export default App;
