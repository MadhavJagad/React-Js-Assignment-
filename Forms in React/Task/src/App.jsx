import React, { useState } from "react";
import Title from "./Component/Title";
import Form from "./Component/Form";
import Table from "./Component/Table";

export default function App() {
  const [input, setInput] = useState([]);

  const addButtonHandler = (name, email, pass) => {
    setInput([...input, { name: name, email: email, pass: pass }]);
  };

  const deleteButtonHandler = (name) => {
    setInput(input.filter((user) => user.name !== name));
  };

  return (
    <>
      <div className="container">
        <Title />
        <div className="row">
          <Form addButtonHandler={addButtonHandler} />
          <Table
            input={input}
            deleteButtonHandler={deleteButtonHandler}
          />
        </div>
      </div>
    </>
  );
}
