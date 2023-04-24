import React from "react";
import { Navbar } from "./navbar.jsx";
import { Card } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<div className="container-fluid m-auto d-flex justify-content-center">
				<div className="m-3 col-10 d-md-flex flex-row justify-content-center ">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
