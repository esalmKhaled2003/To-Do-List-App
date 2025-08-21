import React from "react";

function Form({ description, setDescription , onAddItem}) {
  function handelSubmit(e){
    e.preventDefault();

    if(description === ""){
      return alert("You Must Add A Value!")
    }
    
    const newItem = {
      id: Date.now(),
      description,
      seleted: false,
    };

    onAddItem(newItem);
  }
  return (
    <form className="form" onSubmit={handelSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add a new task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}

export default Form;
