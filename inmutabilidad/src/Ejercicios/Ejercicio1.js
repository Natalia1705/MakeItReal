// Crear un nuevo arreglo que retorne nuevos objetos con las mismas propiedades más una nueva propiedad `total`,

import React from "react";

function Ejercicio1() {
  const results = [
    { q1: 1, q2: 2, q3: 3 },
    { q1: 5, q2: 3, q3: 8 },
    { q1: 3, q2: 2, q3: 5 },
  ];

  const newResult = results.map((obj) => {
    const suma = obj.q1 + obj.q2 + obj.q3;
    return { ...obj, q4: suma };
  });
  console.log(newResult);
  return <div></div>;
}

export default Ejercicio1;
