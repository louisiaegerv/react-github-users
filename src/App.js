import React, { useState, useEffect } from "react";
import List from "./List";

const App = () => {
  return (
    <>
      <div className="container">
        <h3>GitHub Users</h3>
        <p>
          Project illustrating React Hooks (useEffect) and async/await es8 call
          to GitHub API on Component creation
        </p>
        <List />
      </div>
    </>
  );
};

export default App;
