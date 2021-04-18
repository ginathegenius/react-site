import React from "react";
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Container, NavbarBrand, Navbar } from "react-bootstrap";

export default function Footer() {

  return (

	<footer className="fixed-bottom">
		<Navbar color="dark" dark>
			<Container>
				<NavbarBrand>
				<FontAwesomeIcon icon={["fal","twitter"]}/>

				</NavbarBrand>
			</Container>
		</Navbar>
	</footer>

  );
}