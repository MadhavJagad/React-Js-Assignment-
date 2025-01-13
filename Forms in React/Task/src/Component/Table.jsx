import React from "react";

export default function Table({ input, deleteButtonHandler }) {
  return (
    <>
      <div className="col-8">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {input.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteButtonHandler(item.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
