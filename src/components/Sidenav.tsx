import React from "react"
import { Button } from '@material-ui/core';



function Sidenav() {
    function handleChange() {

      console.log('Button Clicked!')
    }

  return (
    <div className="sidenav">
      <h2> Please select a floor </h2>
      <button><a href="box6" className="button"> 6 </a></button>
      <button><a href="box5" className="button"> 5 </a></button>
      <button><a href="box4" className="button"> 4 </a></button>
      <button><a href="box3" className="button"> 3 </a></button>
      <button><a href="box2" className="button"> 2 </a></button>
      <button><a href="box1" className="button"> 1 </a></button>

      {/* <button>This is coming from the Sidenav page </button> */}
      {/* <Button onClick={() => { alert('handleChange') }}>1</Button>
      <Button onClick={() => { alert('handleChange') }}>2</Button>
      <Button onClick={() => { alert('handleChange') }}>3</Button>
      <Button onClick={() => { alert('handleChange') }}>4</Button>
      <Button onClick={() => { alert('handleChange') }}>5</Button>
      <Button onClick={() => { alert('handleChange') }}>6</Button> */}
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