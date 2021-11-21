import React, { useState, useEffect } from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  console.log("TODO リスト", todoList);

  return (
    <>
      <h1>TODO 進捗管理</h1>
      <textarea />
      <button>+ TODO を追加</button>

      <h2>TODO リスト</h2>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id} >
            {todo.content}({todo.done ? "完了" : "未完了"});
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;