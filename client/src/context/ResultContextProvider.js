import { createContext, useContext, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com";

const ResultContext = createContext();
export const ResultContextProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [showSideBar, setShowSideBar] = useState(true);

  const getResults = async (type) => {
    const response = await fetch(`${baseURL}/${type}`);

    const data = await response.json();

    setResult(data);
  };

  return (
    <ResultContext.Provider
      value={{
        result,
        getResults,
        showSideBar,
        setShowSideBar,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
