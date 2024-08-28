import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async (API_URL) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(API_URL);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useFetch;
