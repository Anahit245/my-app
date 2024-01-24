import React from "react";
import logo from "./logo.png";
import insta from "./insta.png";
import facebook from "./facebook.png";
import x from "./x.png";
import tg from "./tg.png";



import './App.css';

function App(params) {
    return(
        <body>
<header>
	<div class="container">
	<div class="header_items row">
		<div class="header_items-logo">
			<a href="hello.html"><img src={logo} alt="logo"/></a>
		</div>
		<div class="header_items-nav">
			<ul>
				<li><a href="hello.html" >Home</a></li>
				<li><a href="products.html" >Products</a></li>
				<li><a href="page.html" >About us</a></li>
				<li><a href="contact.html" class="active" >Contact</a></li>
			</ul>
		</div>
	</div>
</div>

</header>
<main>
	<div class="h2"><h2>Contact us</h2></div>
	<div class="container">

		<div class="contact row">

			<div class="contact_form">
				<form>
					<div class="form-item">
					<label>Name Surname</label>
					<input type="text" placeholder="name surname"/></div>
  		            <div class="form-item">
					<label>Email*</label>
					<input type="email" placeholder="your email"/></div>
					    <div class="form-item">
					<label>Phone*</label>
					<input type="number" placeholder="+(374) 44-444-44"/></div>
					    <div class="form-item">
					<label>Country</label>
					<select>
						<option>Armenia</option>
						<option>Russia</option>
						<option>USA</option>
						<option>Canada</option>
						<option>Spain</option>

					</select>
					</div>
					<div class="form-item">
						<label>Message*</label>
						<textarea placeholder="Enter your message"></textarea>
					</div>
					<div class="form-btn">
						<input type="submit" value="Send" class="btn"/>
					</div>

				</form>
			</div>
<div class="contact_map">
	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12192.911807573524!2d44.5089554!3d40.1817402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfdada349c1%3A0x84592c40be618845!2z0JHRg9C60LjQvdC40YHRgg!5e0!3m2!1sru!2sam!4v1705755343563!5m2!1sru!2sam" width="600" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	
</div>
		</div>


	</div>
</main>
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
    )
    
}