import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';

function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     <UpdatingPhase/>
    </div>
  );
}

export default App;
