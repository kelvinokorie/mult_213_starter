// Sidebar.jsx
import './sidebar.css';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <button className="sidebar__button sidebar__todo">TO DO LIST</button>
      <button className="sidebar__button sidebar__all">ALL LIST</button>
      <button className="sidebar__button sidebar__schedule">SCHEDULE</button>
      <button className="sidebar__button sidebar__settings">SETTINGS</button>
      <button className="sidebar__button sidebar__share">SHARE</button>
    </nav>
  );
}
