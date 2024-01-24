import React from "react";
import logo from "./logo.png";
import insta from "./insta.png";
import facebook from "./facebook.png";
import x from "./x.png";
import tg from "./tg.png";
import pride from "./prideandprejudice.jpg";
import obscure from "./judetheobscure.jpg";
import hugo from "./lesmiserables.jpg";
import kafka from "./metamorphosis.jpg";
import habits from "./Iliad.jpg";
import hp from "./hp.jpg";
import hesse from "./hesse.jpg";
import chocolate from "./chocolate.jpg";
import ayzek from "./ayzek.jpg";
import  "./App.js";
import './App.css';


function App(great) {
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
				<li><a href="hello.html" >Home Page</a></li>
				<li><a href="products.html" class="active" >Products</a></li>
				<li><a href="page.html" >About us</a></li>
				<li><a href="contact.html" >Contact</a></li>
			</ul>
		</div>
	</div>
</div>

</header>
<main>
	<div class="container">
	<h1 class="new">New realised books</h1>
 <div class="content">
 	 
     <div class="card">
       <div class="photo"><img class="kafka"  src={kafka} alt="kafka"/></div>

      <div class="price">
 <div class="text1"><h4>"The metamorphosis"</h4></div>
       <div class="text2"><h4>Franz Kafka</h4></div>
    <div class="text2"><h4>in Russian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>10$</span>
</a></div>
</div>
</div>

     <div class="card">
       <div class="photo"><img class="cloth"  src={pride} alt="pride"/></div>

      <div class="price">
 <div class="text1"><h4>"Price and Prejudice" </h4></div>
 
       <div class="text2"><h4>Jane Austen</h4></div>
    <div class="text2"><h4>in Armenian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>20$</span>
</a></div>
</div>

</div>

     <div class="card">
       <div class="photo"><img class="hugo"  src={hugo} alt="hugo"/></div>



      <div class="price">
 <div class="text1"><h4>"Les Miserables"
</h4></div>
 
       <div class="text2"><h4>Victor Hugo</h4></div>
    <div class="text2"><h4>In Russian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>20$</span>
</a></div>
</div>
</div>

     <div class="card0">
       <div class="photo"><img class="obscure1"  src={obscure} alt="obscure"/></div>



      <div class="price">
 <div class="text1"><h4>"Jude the Obscure"
</h4></div>
 
       <div class="text2"><h4>Vintage Hardy</h4></div>
       <div class="text2"><h4>In English</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>10$</span>
</a></div>
</div>
</div>

     <div class="cardL">
       <div class="photo"><img class="habits"  src={habits} alt="habits"/></div>



      <div class="price">
<div class="text1"><h4>"Iliad"</h4></div>
 
       <div class="text2"><h4>Homer</h4></div>
       
       <div class="text2"><h4>In Russian</h4></div>

    <div class="y"><a href="single.html"><b>Buy</b>
  <span>20$</span>
</a></div>
</div>

</div>

     <div class="cardL">
       <div class="photo"><img class="harry"  src={hp} alt="hp"/></div>

      <div class="price">
<div class="text1"><h4>"Harry Potter"</h4></div>
 
       <div class="text2"><h4>J.K. Rowling</h4></div>
    <div class="text2"><h4>In English</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>20$</span>
</a></div>
</div>

</div>

     <div class="cardL">
       <div class="photo"><img class="hesse"  src={hesse} alt="hesse"/></div>



      <div class="price">
<div class="text1"><h4>"The glass bead game"</h4></div>
 
       <div class="text2"><h4>Hermann Hesse
</h4> </div>
    <div class="text2"><h4>In Russian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>20$</span>
</a></div>
</div>

</div>

     <div class="cardL">
       <div class="photo"><img class="chocolate"  src={chocolate} alt="chocolate"/></div>


      <div class="price">
<div class="text1"><h4>"Charlie and chocolate factory"</h4></div>
 
       <div class="text2"><h4>Roald Dahl</h4></div>
    <div class="text2"><h4>In Armenian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>10$</span>
</a></div>
</div>


</div>

     <div class="cardL">
       <div class="photo"><img class="ayzek"  src={ayzek} alt="ayzek"/></div>



      <div class="price">
 <div class="text1"><h4>"Foundation and Earth"</h4></div>
 
       <div class="text2"><h4>Ayzek Azimov
</h4></div>
    <div class="text2"><h4>In Russian</h4></div>
    <div class="y"><a href="single.html"><b>Buy</b>
  <span>15$</span>
</a></div>
</div>

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
    );
    
}

export default App;