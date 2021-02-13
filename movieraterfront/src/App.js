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
import Navbar from './components/Navbar';

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
 <div className="App">
        <QueryClientProvider client={queryClient} >
          <Navbar />
        <MovieList />
        </QueryClientProvider>
      
    </div>
    </Router>
  );
}

export default App;
