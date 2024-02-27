import React, { useState } from "react";
import { useFiles, FileContextProvider } from "../Context/FileContext";

export default function FileExplorer() {
  const [newFileName, setNewFileName] = useState();
  const { files, setFiles } = useFiles();

  const HandleCreateFile = () => {
    const newFile = {
      id: Date.now(),
      name: newFileName,
      content: "",
    };
    setFiles([...files, newFile]);
    setNewFileName("");
  };

  const handleDelete = (fileId) => {
    const newArr = files.filter((file) => {
      return file.id !== fileId;
    });
    console.log(newArr);
    setFiles(newArr);
  };
  const testData = "It works!";
  return (
    <div>
      <input
        type="text"
        value={newFileName}
        onChange={(event) => setNewFileName(event.target.value)}
        name=""
        id=""
      />
      <button onClick={HandleCreateFile}>Create File</button>
      <ul>
        {files.map((file, index) => {
          return (
            <>
              <li key={index}>{file.name}</li>
              <button onClick={() => handleDelete(file.id)}>Delete</button>
            </>
          );
        })}
      </ul>
      <ExampleComponent />
    </div>
  );
}

const ExampleComponent = () => {
  return <ExampleComponent1 />;
};

const ExampleComponent1 = () => {
  return <ExampleComponent2 />;
};

const ExampleComponent2 = () => {
  const hi = useFiles();
  console.log(hi);
  return <></>;
};
