import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import "./modal.css";

function Modal({categoryData, isOpen}) {
    const [joke, setJoke] = useState();
    const [count, setCount] = useState(0)

    useEffect(() => {
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${categoryData}`)
        .then((res) => {
          setJoke(res.data.value)
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [count]);
  

    if(!joke) return null;

  return (
    <div class="modal-overlay" id="modalOverlay">
    <div class="modal-content">
      <span class="modal-close" id="closeModalBtn" onClick={()=>isOpen(false)}>&times;</span>
      <h2>{categoryData}</h2>
      <div className='joke'>
      <p className='jokeText'>"{joke}"</p>
      <button onClick={()=>{setCount((p)=>p+1)}}>Next</button>
      </div>
     
    </div>
  </div>
  )
}

export default Modal