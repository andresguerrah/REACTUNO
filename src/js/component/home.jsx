import React from "react";
import Card from "./Card.jsx";
import Cardtitle from "./Cardtitle.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (




<div className="row">
  <div className="col-6 col-md-12"><Cardtitle/></div>
  <div className="col-6 col-md-3"><Card/></div>
  <div className="col-6 col-md-3"><Card/></div>
  <div className="col-6 col-md-3"><Card/></div>
  <div className="col-6 col-md-3"><Card/></div>
</div>
	);
};

export default Home;
