import { useFiles, useFileUpdate } from "../Context/FileContext";

export default function FileExplorer() {
  const { files, newFileName } = useFiles();

  const {
    HandleCreateFile,
    handleDelete,
    handleUpdateFileName,
    handleOpenFile,
  } = useFileUpdate();
  console.log("hi" + handleUpdateFileName);

  return (
    <div>
      <input
        type="text"
        value={newFileName}
        onChange={(event) => handleUpdateFileName(event.target.value)}
        name=""
        id=""
      />
      <p>hi</p>
      <button onClick={HandleCreateFile}>Create File</button>
      <ul>
        {files.map((file, index) => {
          return (
            <>
              <li onClick={() => handleOpenFile(file)} key={index}>
                {file.name}
              </li>
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
