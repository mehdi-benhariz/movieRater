import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieContextProvider from './context/MovieContext';
import MovieList  from "./components/MovieList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
 <div className="App">
      <header className="App-header">
        <h1>Movie Rater app</h1>
        </header>
        <QueryClientProvider client={queryClient} >
        <MovieList />
        </QueryClientProvider>
      
    </div>
    </Router>
  );
}

export default App;
