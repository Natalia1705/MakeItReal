import React from "react";
function Ejercicio4() {
  const fetchUrls = (quantity = 10) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const urls = [];
        for (let i = 0; i < quantity; i++) {
          urls.push(`http://${i}`);
        }
        resolve(urls);
      }, 3000);
    })
      .then((fetchUrls) => {
        fetchUrl(fetchUrls);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUrl = (url) => {
    url.map((urls) => {
      const id = urls.replace("http://", "");
      return new Promise((resolve) => {
        setTimeout(() => resolve(`Hola ${id}`), 300);
      })
        .then((e) => console.log(e))
        .catch((err) => console.log(err));
    });
  };

  console.log(fetchUrls());

  return <div></div>;
}

export default Ejercicio4;
