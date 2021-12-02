import React from "react";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      ,
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 2,
    name: "Morty Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 3,
    name: "Summer Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 4,
    name: "Beth Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 5,
    name: "Jerry Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    episode: ["https://rickandmortyapi.com/api/episode/27"],
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    episode: [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
    ],
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    episode: ["https://rickandmortyapi.com/api/episode/28"],
  },
  {
    id: 9,
    name: "Agency Director",
    episode: ["https://rickandmortyapi.com/api/episode/24"],
  },
  {
    id: 10,
    name: "Alan Rails",
    episode: ["https://rickandmortyapi.com/api/episode/25"],
  },
];

// Versión mutable: Extraer los id's de los episodios de cada personaje, concatenarlos en un string separados por coma, eliminar la propiedad `episode` de cada personaje y agregar una propiedad `episodesId` que contenga el string con los ids

function Ejercicio2() {
  characters.forEach((chars) => {
    const episodeUrls = chars.episode;
    const promises = episodeUrls.map((url) =>
      fetch(url).then((res) => res.json())
    );

    Promise.all(promises)
      .then((episodes) => {
        delete chars.episode;
        const epId = episodes.map((e) => {
          return e.id;
        });
        chars = { ...chars, episodeId: epId };
        episodes.map((e) => {});
        console.log(chars);
      })
      .catch((err) => console.log(err));
  });

  return <div></div>;
}

export default Ejercicio2;

// Ahora hacer toda la operación inmutable
