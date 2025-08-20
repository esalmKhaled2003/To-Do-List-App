import React from "react";
import Title from "./Compontents/Title";
import Form from "./Compontents/Form";
import ListItems from "./Compontents/ListItems";

function App() {
  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form />
          <ListItems />
        </div>
      </div>
    </main>
  );
}

export default App;
