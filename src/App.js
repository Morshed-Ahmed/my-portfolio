import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Skills from './components/Home/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="*">
            <Skills />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
