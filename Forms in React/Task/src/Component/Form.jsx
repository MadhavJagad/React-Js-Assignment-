import React, { useState } from "react";

export default function Form({ addButtonHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    addButtonHandler(name, email, pass);
    setName("");
    setEmail("");
    setPass("");
  };

  return (
    <>
      <div className="col-4">
        <div className="form-group">
          <label htmlFor="">UserName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
