import "./App.css";
import Header from "./Header";
import Signup from "./Signup";
import { auth } from "./firebase";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { Home } from "./Home";
import { useEffect } from "react";
import { useStateValue } from "./stateProvider";

function App() {
	const [
		{},
		dispatch,
	] =
		useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged(
			(
				authUser,
			) => {
				if (
					authUser
				) {
					console.log(
						"user is logged in ",
					);
					dispatch({
						type: "SET_USER",
						user: authUser,
					});
				} else {
					dispatch({
						type: "SET_USER",
						user: null,
					});
				}
			},
		);
	}, []);

	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/login">
						<div
							id="container"
							className="container"
						>
							<Signup className="sign" />
						</div>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
