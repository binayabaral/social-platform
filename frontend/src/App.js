import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import MyPosts from './screens/MyPosts';
import NotFound from './screens/NotFound';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className="main">
					<Switch>
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
