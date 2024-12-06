import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';
import FuncLifeCycle from './uiContent/functionalComps/lifecyle';

function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     {/* <UpdatingPhase color="yellow"/> */}
     <FuncLifeCycle/>
    </div>
  );
}

export default App;
