import './App.css';
import { Header } from './Header';
import { Card } from './card';
import { Footer } from './footer';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    const colors = ['#2c2c2c', '#e16aab', '#ec4c2c', '#d0d00d', '#006699', '#663399', '#990000', '#006600'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      color: randomColor
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header title="TO-DO LIST APP!" message="Thanks for visiting my app." />

      <main>
        <div className="todo-wrapper">
          <section className="todo-section">
            <h2 className="todo-title">TO-DO LIST</h2>

            <div className="todo-form">
              <input
                type="text"
                placeholder="Enter a task..."
                className="todo-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="todo-add-button" onClick={handleAdd}>Add</button>
            </div>

            <div className="card-list">
              {todos.map((todo) => (
                <Card
                  key={todo.id}
                  title={todo.text}
                  subtitle="New Task"
                  content="This task was just added."
                  backgroundColor={todo.color}
                  onDelete={() => handleDelete(todo.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer message="Contact me at contact@mywebsite.com" />
    </>
  );
}

export default App;
