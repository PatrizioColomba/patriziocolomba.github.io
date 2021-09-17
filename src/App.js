import './App.css';
import Blog from './blog/Blog';
import Dashboard from './dashboard/Dashboard';
import TopBar from './topbar/TopBar';

function App() {
  return (
    <section>
      <TopBar />
      <Dashboard />
      <Blog src="post.md"/>
    </section>
  );
}

export default App;
