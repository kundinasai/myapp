import { useState, useEffect } from "react";
import axios from "axios";

// export const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);
//   return [data];
// };
//////////////

// export const useFetch = (url) => {
//     const [data, setData] = useState([]);

//     const fetchData = async (url) => {
//       const response = await fetch(url);
//       const result = await response.json();
//       setData(result)
//     };

//     useEffect(() => {
//       fetchData(url);
//     }, [url]);
//     return [data];
//   };



//////////////////////

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
      const response = await axios.get(url);
      setData(response.data)
    };

    useEffect(() => {
      fetchData(url);
    }, [url]);
    return [data];
  };