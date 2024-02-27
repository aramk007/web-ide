import "./App.css";
import File from "./Components/File.jsx";
import FileExplorer from "./Components/FileExplorer.jsx";
import FileMeta from "./Components/FileMeta.jsx";
import { FileContextProvider } from "./Context/FileContext.jsx";

function App() {
  return (
    <div className="app">
      <File name="File" initialcontent="" />
      <FileContextProvider>
        <FileExplorer />
      </FileContextProvider>
      <FileMeta />
    </div>
  );
}

export default App;
