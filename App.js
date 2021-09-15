import './App.css';
import Blog from './blog/Blog';
import Dashboard from './dashboard/Dashboard';
import TopBar from './topbar/TopBar';

function App() {
  return React.createElement(
    'section',
    null,
    React.createElement(TopBar, null),
    React.createElement(Dashboard, null),
    React.createElement(Blog, null)
  );
}

export default App;