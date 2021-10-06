import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, handleCheck }) => {
  return (
    <li className={styles.listitem}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheck}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default Todo;
