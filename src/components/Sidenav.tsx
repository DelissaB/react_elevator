import React from "react"

interface ISidenavProps {}

function Sidenav(props: ISidenavProps)  { 
  return (
    <div>
      <h1>Please select a floor!</h1>
      <button onClick={Sidenav}> 1 </button>
      <button onClick={Sidenav}> 2 </button>
      <button onClick={Sidenav}> 3 </button>
      <button onClick={Sidenav}> 4 </button>
      <button onClick={Sidenav}> 5 </button>
      <button onClick={Sidenav}> 6 </button>
  </div>
  )
}

export default Sidenav;

