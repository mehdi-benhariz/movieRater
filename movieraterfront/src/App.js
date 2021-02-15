import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MovieList  from "./components/MovieList";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from './components/Navbar';
import MovieAdd from './components/pages/MovieAdd';
import MovieDetails from "./components/pages/MovieDetails";
import MoviEdit from './components/pages/MoviEdit';
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp"
import Error from './components/pages/Error';

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
 <div className="App">
        <QueryClientProvider client={queryClient} >
          <Navbar />
          <Switch  >
            <Route exact path='/' component={MovieList} />
            <Route  exact path="/add" component={MovieAdd} />
            <Route exact path="/:id" component={MovieDetails} />
            <Route exact path="/edit/:id" component={MoviEdit} />
            <Route  exact path="/signIn" component={SignIn} />
            <Route  exact path="/signUp" component={SignUp} />
            <Route  component={Error} />
          </Switch>
        </QueryClientProvider>
    </div>
    </Router>
  );
}

export default App;
