import React, { useState, useEffect } from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";
const TodoTitle = ({ title, as }) => {
  if (as === "h1") return <h1>{title}</h1>;
  else if (as === "h2") return <h2>{title}</h2>;
  else return <p>{title}</p>
}
const TodoItem = ({ todo }) => (
  <li key={todo.id} >
    {todo.content}
    <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
    <button>削除</button>
  </li>
)

const TodoList = ({ todoList }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
)

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

  const inCompletedList = todoList.filter((todo) => !todo.done);
  const completedList = todoList.filter((todo) => todo.done);

  return (
    <>
      <TodoTitle title="TODO 進捗管理" as="h1" />

      <textarea />

      <button>+ TODO を追加</button>

      <TodoTitle title="未完了 TODO リスト" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了 TODO リスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;