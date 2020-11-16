import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("post");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>posts</button>
        <button onClick={() => setResource("todos")}>todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
