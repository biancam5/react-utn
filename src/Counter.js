import React, { useState } from 'react'

const Counter  = () =>{ 
    const [counterState,setCounterState] = useState(0)

    function increaseValue() {
        setCounterState(counterState + 1);
    }
    function decreaseValue() {  
      setCounterState(counterState - 1);
  }
  return ( 
  
      <div className="container pt-5">
      <h1>Contador</h1>
      <p>Haz click en el boton para aumentar o restar el valor del contador!</p>
      <label>El valor del contenedor es : {counterState} </label> 
      <br></br>
      <button className="btn btn-success" onClick={increaseValue}>Aumentar el valor</button> <button className="btn btn-success" onClick={decreaseValue}>Disminuir el valor</button>
      </div>  
  )

}

export default Counter ;