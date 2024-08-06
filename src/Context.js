import { useState, useEffect } from "react";
import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState(""); // State for search query
  const [nseData, setNseData] = useState([]); // State for NSE data
  const [bseData, setBseData] = useState([]); // State for BSE data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(""); // State for error handling

  const fetchData = async (query) => {
    setLoading(true);
    setError(""); // Reset error state before fetching
    try {
      const [responseNSE, responseBSE] = await Promise.all([
        fetch(`http://localhost:3008/api/employees1?search=${query}`),
        fetch(`http://localhost:3008/api/employees2?search=${query}`)
      ]);

      if (!responseNSE.ok || !responseBSE.ok) {
        throw new Error("Failed to fetch data");
      }

      const dataNSE = await responseNSE.json();
      const dataBSE = await responseBSE.json();
      setNseData(dataNSE);
      console.log(dataNSE)
      setBseData(dataBSE);
      console.log(dataBSE)

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name.trim() !== "") {
        //handling debouncing
       let timerOut= setTimeout(()=>{
            fetchData(name);
        },1000);

        return ()=>clearTimeout(timerOut)
      
      } 
      else {
      setNseData([]);
      setBseData([]);
    }
  }, [name]);


 

  return (
    <AppContext.Provider value={{ name, setName, nseData, bseData, loading, error}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobal = () => useContext(AppContext);

export default AppProvider;
export { useGlobal };