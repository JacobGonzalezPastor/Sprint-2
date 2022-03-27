import React, { useState } from 'react';

const Contador = () => {

  const [contador, setContador] = useState(1);

// suma del contador
  const handleAdd = () => {
    setContador(contador + 1)
  }

  // resta del contador

  const handleRest = () => {
    setContador(contador - 1)
  }

  return <>
    <button onClick={handleRest}> 
    -
    </button>
    <h1>{contador} </h1>
    <button onClick={handleAdd} >
    +
    </button>

  </>;
};

export default Contador;