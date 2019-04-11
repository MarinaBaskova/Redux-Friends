import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from '../components/Login';
import FriendsList from '../components/FriendsList';
import PrivateRoute from '../components/PrivateRoute';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="navLinks">
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/protected">Friends</NavLink>
					</div>
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/protected" component={FriendsList} />
				</div>
			</Router>
		);
	}
}

export default App;
