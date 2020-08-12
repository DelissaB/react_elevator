import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";




function Sidenav() {
  return (
    <div className="sidenav">
      <h2> Please select a floor </h2>

        <Link to="box6" className="button" type="button"  smooth={true}duration={1000}> 6
        </Link> 

        <Link to="box5" className="button" type="button"  smooth={true}duration={2000}> 5 
        </Link>

        <Link to="box4" className="button" type="button"  smooth={true}duration={3000}> 4 
        </Link> 

        <Link to="box3" className="button" type="button"  smooth={true}duration={4000}> 3 
        </Link> 

        <Link to="box2" className="button" type="button"  smooth={true}duration={5000}> 2 
        </Link> 

        <Link className="button" type="button" to="box1" smooth={true}duration={6000}> 1 
        </Link>

    </div>
   )
}
export default Sidenav;
