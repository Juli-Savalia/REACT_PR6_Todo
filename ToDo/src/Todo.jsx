import React, { useState, useEffect } from "react";
import "./style.css";

const Todo = ({
  handleSubmit,
  editTask,
  todo,
  edit,
  single,
  task,
  deleteTask,
  setTask,
}) => {
  //edit
  useEffect(() => {
    setTask(single.task);
  }, [single]);

  return (
    <div className="container">
      <div className="p-50">
        <div className="text-center todo p-3">
          <div>
            <h1 className="text-start fw-light pb-4 text-secondary">
              TODO APP
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="bg-lightgreen px-2 py-2 border-0 rounded-2 w-100">
                <input
                  className="bg-transparent w-75 border-0"
                  type="text"
                  placeholder="Add a New Task"
                  onChange={(n) => setTask(n.target.value)}
                  value={task || ""}
                />
                <button className="border-0 bg-success text-white rounded-2 px-3">
                  {edit ? "Edit" : "submit"}
                </button>
              </div>
            </form>
            <div className="p-5">
              <h5 className="text-secondary text-center pb-3">Tasks</h5>
              {todo.map((t) => {
                return (
                  <div className="p-3" key={t.id}>
                    <div className="card py-3 px-3">
                      <div className="card-body text-start">
                        <h3 className="">{t.task}</h3>
                        {/* <h5 className="card-title">{t.date}</h5> */}
                        <div className="text-center py-2">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => editTask(t.id)}
                          >
                            <img
                              src="../public/edit.png"
                              alt="edit"
                              height={20}
                              className="px-3"
                            />
                          </button>
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => deleteTask(t.id)}
                          >
                            <img
                              src="../public/bin.png"
                              alt="edit"
                              height={20}
                              className="px-3"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
