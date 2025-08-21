// @ts-nocheck
import React, { useState } from "react";
import Title from "./Compontents/Title";
import Form from "./Compontents/Form";
import ListItems from "./Compontents/ListItems";



function App() {
  const [items , setItems] = useState([]);
  const [description,setDescription] = useState("");

  function handelAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  console.log(items);

  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form description={description} setDescription={setDescription} 
           onAddItem={handelAddItem}/>
          <ListItems />
        </div>
      </div>
    </main>
  );
}

export default App;
