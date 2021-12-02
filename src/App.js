import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Skills from './components/Home/Skills/Skills';
import ProjectsDts from './components/Home/ProjectsDts/ProjectsDts';
import Portfolio from './components/Home/Portfolio/Portfolio';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';
import Contact from './components/Home/Contact/Contact';
import NotFound from './components/Home/NotFound/NotFound';
import Blog from './components/Home/Blog/Blog';
import About from './components/Home/About/About';

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
          <Route path="/project">
            <Header />
            <Portfolio />
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer></Footer>
          </Route>
          <Route path="/projectDts/:projectId">
            <ProjectsDts />
          </Route>
          <Route path="/blog">
            <Header />
            <Blog />
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
