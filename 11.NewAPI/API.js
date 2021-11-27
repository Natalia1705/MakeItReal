const App = () => {
  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return <>{response}</>;
};
