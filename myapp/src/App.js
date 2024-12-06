import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';
import FuncLifeCycle from './uiContent/functionalComps/lifecyle';
import CounterFc from './uiContent/functionalComps/counterFc';
function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     {/* <UpdatingPhase color="yellow"/> */}
     {/* <FuncLifeCycle/> */}
     <CounterFc/>
    </div>
  );
}

export default App;
