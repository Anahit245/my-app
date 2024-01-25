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
import NavBar from "./NavBar";
import Products from "./products";
import NotFound from "./NotFound";
import Contact from "./contact1";
import Page from "./page";


import './App.css';


function App() {

	const showPage = () => {
		if(window.location.pathname==="/") {
			return <Home/>
		} else if (window.location.pathname==="/products") {
			return <Products/>
		} 
		else if (window.location.pathname==="/contact1"){
			return <Contact/>
		}
		else if (window.location.pathname==="/page"){
			return <Page/>
		}
		else {
			return <NotFound/>
		}
	}
  return (
    <body>
	<NavBar/>

	{/* <Router>
		<Home path="/"/>
	</Router> */}

	{showPage()}

  

  <footer>
		<div class="container">
	<div class="footer_items row">
		<div class="footer_items-nav">
			<ul>
				<li><a href="https://www.instagram.com/" target="blank"><img src={insta} alt="insta"/></a></li>
				<li><a href="https://www.facebook.com/"  target="blank"><img src={facebook} alt="face"/></a></li>
				<li><a href="https://twitter.com/?lang=ru" target="blank"><img src={x} alt="x"/></a></li>
				<li><a href="https://telegram.org/" target="blank"><img src={tg} alt="tg"/></a></li>
			</ul>
			</div>
			<div class="footer_items-copyright">
				<a href="https://www.instagram.com/" target="blank">Designed by Anahit Hakobyan</a>
			</div>
	</div>
</div>
</footer>
</body>
  );
}

export default App;
