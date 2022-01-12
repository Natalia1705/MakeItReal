/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import "./App.css";
import useQuery from "./useQuery";

function App() {
  const { response } = useQuery(
    axios.get("https://foodish-api.herokuapp.com/api/")
  );

  return (
    <>
      <img style={{ height: 600 }} src={response.image} />
    </>
  );
}

export default App;
