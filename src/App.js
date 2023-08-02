import './App.css';
import TaskList from './components/TaskList';
import TaskListContextProvider from './Context/TaskListContext';
import NewTask from './components/NewTask';

function App() {
  return (
    <TaskListContextProvider>
    <div className="App">
      <NewTask/>
      <TaskList/>
    </div>
    </TaskListContextProvider>
  );
}

export default App;
