import React from "react";

const fetchA = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hola"), 4000);
  });
};

const fetchB = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Mundo"), 4000);
  });
};

function Ejercicio3() {
  // Llamar `fetchA` de forma asincrónica, cuando resuelva llamar `fetchB` e imprimir los dos resultados concatenados separados por espacio
  Promise.all([fetchA(), fetchB()]).then((e) => console.log(e.join(" ")));

  // Refactorizar a async/await

  const ejercicio3 = async () => {
    const primerLlamado = await fetchA();
    const segundoLlamado = await fetchB();
    Promise.all([primerLlamado, segundoLlamado]).then((e) =>
      console.log(e.join(" "))
    );
  };
  ejercicio3();
  return <div></div>;
}

export default Ejercicio3;
