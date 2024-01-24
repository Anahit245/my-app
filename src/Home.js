import React from "react";
import {Router} from 'react-router-dom';
import logo from "./logo.png";
import insta from "./insta.png";
import facebook from "./facebook.png";
import x from "./x.png";
import tg from "./tg.png";
import pride from "./prideandprejudice.jpg";
import obscure from "./judetheobscure.jpg";
import hugo from "./lesmiserables.jpg";
import kafka from "./metamorphosis.jpg";
import "./App.css";


const Home = () => {
    return (
        <main>
	<div class="container">
	<h1 class="h1">Featured Books</h1>
 <div class="content">
 	
     <div class="card">
       <div class="photo"><img class="cloth"  src={pride} alt="pride"/></div>
      <div class="price">
  <a href="single.html"><b>"Price and Prejudice" Jane Austen</b>
</a>
</div>
<div class="buy"><a href="single.html">See more</a></div>
</div>
</div>

     <div class="card2">
       <div class="photo"><img class="obscure1"  src={obscure} alt="obscure"/></div>



      <div class="price">
  <b>"Jude the Obscure" Vintage Hardy</b></div>
<div class="buy"><a href="products.html">See more</a></div>


</div>

     <div class="card3">
       <div class="photo"><img class="hugo"  src={hugo} alt="hugo"/></div>
  <div class="price">
  <a href="single.html"><b>"Les Miserables" Victor Hugo</b>
</a>
</div>
<div class="buy"><a href="single.html">See more</a></div>


</div>

<div class="card4">
	<div class="photo"><img class="kafka"  src={kafka} alt="kafka"/></div>
<div class="price">
<a href="single.html"><b>"The metamorphosis" Franz Kafka</b>
</a>
</div>
<div class="buy"><a href="single.html">See more</a></div>

</div>
</div>
</main>
    )
}

export default Home;