import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import MyPosts from './screens/MyPosts';
import NotFound from './screens/NotFound';
import Footer from './components/Footer';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route path="/my-posts" component={MyPosts} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
