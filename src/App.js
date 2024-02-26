import './App.css';
import TaskList from './components/TaskList';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freecodecamp logo' 
        />
      </div>
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
