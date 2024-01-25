import React from "react";
import {Router, Link} from 'react-router-dom';
import logo from "./logo.png";
import insta from "./insta.png";
import facebook from "./facebook.png";
import x from "./x.png";
import tg from "./tg.png";
import pride from "./prideandprejudice.jpg";
import obscure from "./judetheobscure.jpg";
import hugo from "./lesmiserables.jpg";
import kafka from "./metamorphosis.jpg";
import Home from "./Home";


import './App.css';


const NavBar = () => {

  return (
<div class="container">
		<div class="header_items row">
			<div class="header_items-logo">
				<a href="hello.html"><img src={logo} alt="logo"/></a>
			</div>
			<div class="header_items-nav">
                <ul>
                    <li><a href="hello.html" class="active">Home Page</a></li>
					<li><a href="products.js" >Products</a></li>
					<li><a href="page.html" >About us</a></li>
					<li><a href="contact.html" >Contact</a></li>
                </ul>
					

			</div>
		</div>
	</div>
  );
}

export default NavBar;
