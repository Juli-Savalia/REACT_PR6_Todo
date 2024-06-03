import { useState, useEffect } from "react";
import Todo from "./Todo";

function App() {
  const [edit, setEdit] = useState("");
  const [single, setSingle] = useState("");
  const [task, setTask] = useState("");

  let data = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  const [todo, setTodo] = useState(data);

  const handleSubmit = (t) => {
    t.preventDefault();

    if (!task) {
      alert("Pls Enter your Task...");
      return false;
    }
    // const Date = new Date();

    let obj = { id: Date.now(), task };

    // edit task
    if (edit) {
      let newtask = [...todo];
      let updatetask = newtask.map((val) => {
        if (val.id === edit) {
          return {
            ...val,
            task: task,
          };
        }
        return val;
      });
      localStorage.setItem("user", JSON.stringify(updatetask));
      setTodo(updatetask);
      setEdit("");
      setSingle("");
      alert("Task Updated..");
    } else {
      let newfield = [...todo, obj];
      localStorage.setItem("user", JSON.stringify(newfield));
      setTodo(newfield);
      setTask("");
      alert("Task Added Successfully...");
      // console.log(newfield);
    }
    setTask("");
  };

  //edit

  const editTask = (id) => {
    let s = todo.find((val) => val.id == id);
    setEdit(s.id);
    setSingle(s);
  };

  //delete
  const deleteTask = (d) => {
    let deltask = todo.filter((val) => val.id != d);
    setTodo(deltask);
  };

  return (
    <>
      <Todo
        handleSubmit={handleSubmit}
        editTask={editTask}
        todo={todo}
        edit={edit}
        single={single}
        task={task}
        deleteTask={deleteTask}
        setTask={setTask}
      />
    </>
  );
}

export default App;
