import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { TitleComponent } from './TitleComponent';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// withTitle function
const withTitle = ({ component: Component, title }) => {
	return class Title extends React.Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} />
					<Component {...this.props} />
				</React.Fragment>
			);
		}
	};
};

// Using withTitle method
function HomeComponent() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

// Using withTitle method
const Home = withTitle({ component: HomeComponent, title: '✨ Home!' });

function AboutComponent() {
	return (
		<div>
			{/* Direct title component */}
			<TitleComponent title="👾 About!" />
			<h2>About</h2>
		</div>
	);
}

function Other() {
	return (
		<div>
			{/* Without title (using default title) */}
			<TitleComponent />
			<h2>Log in</h2>
		</div>
	);
}

function BasicExample() {
	return (
		<Router>
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">Vacation Hacker</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Login or Create an Account</Nav.Link>
						<Nav.Link href="#link">User Info </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				<Route exact path="/" component={Home} />
				<Route path="/about" component={AboutComponent} />
				<Route path="/other" component={Other} />
			</div>
		</Router>
	);
}

export default BasicExample;
