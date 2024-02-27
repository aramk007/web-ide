import { createContext, useContext } from "react";
import { useState } from "react";

const FileContext = createContext({});

const useFiles = () => useContext(FileContext);

const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  <FileContext.Provider value={{ files, setFiles }}>
    {children}
  </FileContext.Provider>;
};

export { FileContextProvider, useFiles };
