import React from "react"



function Sidenav() {
    function handleChange() {
      console.log('Button Clicked!')
    }

  return (
    <div>
      <button onClick={handleChange}> CLICK ME!! From the sidenav page </button>
    </div>
  )
}

export default Sidenav;



// import { Link, animateScroll as scroll } from "react-scroll";

// interface ISidenavProps {}

// function Sidenav(props: ISidenavProps)  { 
//   return (
//     <div className="sidenav">
//       <h1>Please select a floor!</h1>
      
//      <Link className="button" type="button" to="box6" smooth={true}duration={1000}> 6 </Link>
//       <Link className="button" type="button" to="box5" smooth={true}duration={2000}> 5 </Link>
//       <Link className="button" type="button" to="box4" smooth={true}duration={3000}> 4 </Link>
//       <Link className="button" type="button" to="box3" smooth={true}duration={4000}> 3 </Link>
//       <Link className="button" type="button" to="box2" smooth={true}duration={5000}> 2 </Link>
//       <Link className="button" type="button" to="box1" smooth={true}duration={6000}> 1 </Link>
//   </div>
//   )
// }