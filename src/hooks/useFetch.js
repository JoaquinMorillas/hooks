import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = state;

  const getData = async () => {
    if (!url) return;
    try {
      const res = await fetch(url);
      const data = await res.json();
      
      setState({
        data: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error };
};
