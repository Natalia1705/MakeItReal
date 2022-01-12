/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";

const useQuery = (request) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    request.then((fetchResponse) => {
      setResponse(fetchResponse.data);
    });
  }, []);
  return { response };
};

export default useQuery;
