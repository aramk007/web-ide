import React, { useEffect, useState } from "react";

function File({ name, initialcontent }) {
  const [content, setContent] = useState(initialcontent);

  useEffect(() => {
    console.log("useEffect");
  }, [content]);

  // onChange on line 21 called our event handler function handleContentChange
  // we passed it as a parameter so that the event object can be accessed
  // inside the function.
  // Then we updated our useState with our (kind of)"setter" setContent,
  // And we targeted that events .target.value meaning the textareas value.
  const handleContentChange = (eventOnChange) => {
    setContent(eventOnChange.target.value);
    console.log("function");
  };

  return (
    <div className="file">
      <h1>{name}</h1>
      <textarea value={content} onChange={handleContentChange}></textarea>

      <div id="output">
        <p>
          You Said:{content} <br /> Character Length: {content.length}
        </p>
      </div>
    </div>
  );
}

export default File;
