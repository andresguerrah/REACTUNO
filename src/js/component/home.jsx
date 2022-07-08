import React from "react";
import Card from "./Card.jsx";
import Cardtitle from "./Cardtitle.jsx";
import Nvar from "./Nvar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (


    <div className="row">
  <div className="nvar"><Nvar/></div>
 
  <div className="col-6 col-md-12"><Cardtitle/></div>
  <div className="col-6 col-md-3"><Card p="El sacrificio mas importante." go="Ver +" titulo="Erwin Smith" img="https://nntheblog.b-cdn.net/wp-content/uploads/2022/04/APPEARANCE-Erwin-Smith-Aot.jpg"/></div>
  <div className="col-6 col-md-3"><Card p="El mas fuerte de la humanidad." go="Ver +" titulo="Levi Ackerman" img="https://www.geekmi.news/__export/1646246937054/sites/debate/img/2022/03/02/levi-ackerman-1.jpg_982475294.jpg"/></div>
  <div className="col-6 col-md-3"><Card p="Tiene todo en sus manos." go="Ver +" titulo="Eren Yeager" img="https://depor.com/resizer/X-xln6YiQqyEk2ddaDqZuQw9Ynw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Q7AHXEQYA5C7NMIDBAIN4H57O4.png"/></div>
  <div className="col-6 col-md-3"><Card p="Importante en momentos clave." go="Ver +" titulo="Armin Arlert" img="http://pm1.narvii.com/6553/12c9a778d01c1d1f1bfffac430ab59d2071bde60_00.jpg" /></div>
</div>
	);
};

export default Home;
