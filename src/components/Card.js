import React, { useState, useEffect } from "react";



function Card({data}) {



  return (
    <>
   <div className="two">
    <div>{data.charAt(0).toUpperCase() + data.slice(1)}</div><div className="sub">Unlimited Jokes on {data}</div></div>
   
   </>
  )
}

export default Card