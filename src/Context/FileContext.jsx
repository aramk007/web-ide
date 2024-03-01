import { createContext, useContext } from "react";
import { useState } from "react";

const FileContext = createContext({});
const FileUpdateContext = createContext({});

const useFiles = () => useContext(FileContext);

const useFileUpdate = () => useContext(FileUpdateContext);

const FileContextProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [newFileName, setNewFileName] = useState();
  const [currentFile, setCurrentFile] = useState();
  const HandleCreateFile = () => {
    const newFile = {
      id: Date.now(),
      name: newFileName,
      content: "",
    };
    setFiles([...files, newFile]);
    setNewFileName("");
  };

  const handleOpenFile = (file) => {
    setCurrentFile(file);
  };

  const handleDelete = (fileId) => {
    const newArr = files.filter((file) => {
      return file.id !== fileId;
    });
    console.log(newArr);
    setFiles(newArr);
  };
  const handleUpdateFileName = (name) => {
    setNewFileName(name);
  };
  return (
    <FileContext.Provider
      value={{
        files,
        newFileName,
      }}
    >
      <FileUpdateContext.Provider
        value={{
          HandleCreateFile,
          handleDelete,
          handleUpdateFileName,
          handleOpenFile,
        }}
      >
        {children}
      </FileUpdateContext.Provider>
    </FileContext.Provider>
  );
};

export { FileContextProvider, useFiles, useFileUpdate };
