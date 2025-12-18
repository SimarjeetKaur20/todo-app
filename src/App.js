import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 Todo App</h1>
        <p className="subtitle">
          A simple React-based Todo application to manage daily tasks.
        </p>
      </header>

      <main className="app-main">
        <section className="info-section">
          <h2>Why use this Todo App?</h2>
          <ul>
            <li>✔ Helps organize daily tasks</li>
            <li>✔ Built using React functional components</li>
            <li>✔ Clean and simple UI</li>
          </ul>
        </section>

        <section className="todo-section">
          <h2>Your Tasks</h2>
          <TodoList />
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
