import './App.css';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Header } from './Header';
import reactLogo from './assets/react.svg';

function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);

  // todos is going to be an empty list []
  // If I want to change todos, I need to use the setTodos() callback function

  // Build up the UI element for the TODOs
  let listContent = <></>;

  if (todos.length == 0) {
    // If there are no TODOs, tell the user what to do
    listContent = <li key="empty" className="todo-list__empty">No tasks yet. Add your first TODO above.</li>;
  } else {
    // If there are TODOs, render them as li elements
    listContent = todos.map((item, i) => {
      return <li key={"todo-" + i} className="todo-item">
        <input type="checkbox" className="todo-item__checkbox" data-id={i} id={"todo-" + i} />
        <label htmlFor={"todo-" + i} className="todo-item__label">{item.name}</label>
      </li>
    })
  }

  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    // Make new TODO model
    const newTodo = {
      name: titleField
    };

    // We need to make a new list, otherwise React will not update

    // Option 1: Make a new list, iterate over old values, push on new value
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push(newTodo);

    // Option 2: Use a splat / explode operator to make a new list with the new value
    const newTodos = [...todos, newTodo];

    // We call the React hook to update the application state
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="Welcome to kelvin app!" message="Thanks for visiting my site." />

      <main>
        <section>
          <form id="todo-form" action={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">Add</button>
          </form>
        </section>

        <section>
          <h2>My TODOs:</h2>
          <ul className="todo-list" id="todo-list">
            {listContent}
          </ul>
        </section>
      </main>

      <footer>
        <p className="read-the-docs">
          Click on the Vite (the build tool) and React (the frontend framework) logos to learn more
        </p>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  )
}

export default App
