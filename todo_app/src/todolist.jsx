import './todolist.css';

export function TodoList({ todos, inputValue, setInputValue, onAdd, onDelete }) {
  return (
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
        <button className="todo-add-button" onClick={onAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="todo-list__empty">No tasks yet.</li>
        ) : (
          todos.map((todo) => (
            <li 
              key={todo.id} 
              className="todo-item" 
              style={{ backgroundColor: todo.color }}  // apply random color
            >
              <span className="todo-text">{todo.text}</span>
              <button 
                className="todo-delete" 
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
