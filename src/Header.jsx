import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./stateProvider";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
} from "react-bootstrap";
import { auth } from "./firebase";

export const Header =
	() => {
		const [
			{ user },
			dispatch,
		] =
			useStateValue();

		const handleAuth =
			() => {
				if (user) {
					auth.signOut();
				}
			};
		return (
			<div>
				<Navbar
					collapseOnSelect
					expand="lg"
					bg="dark"
					variant="dark"
				>
					<Container>
						<Navbar.Brand href="#home">
							Mbiakop
							Clinton
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features">
									Features
								</Nav.Link>
								<Nav.Link href="#pricing">
									Pricing
								</Nav.Link>
								<NavDropdown
									title="Dropdown"
									id="collasible-nav-dropdown"
								>
									<NavDropdown.Item href="#action/3.1">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another
										action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated
										link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Nav>
								<Nav.Link href="#deets">
									{user
										? `${user.email}`
										: ""}
								</Nav.Link>
								<Nav.Link
									onClick={
										handleAuth
									}
									eventKey={
										2
									}
									href="#memes"
								>
									{user
										? "Sign Out"
										: "Sign in"}
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	};

export default Header;
