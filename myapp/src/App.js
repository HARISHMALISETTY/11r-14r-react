import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';
import FuncLifeCycle from './uiContent/functionalComps/lifecyle';
import CounterFc from './uiContent/functionalComps/counterFc';
import FormComp from './uiContent/functionalComps/formEvents';
function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     {/* <UpdatingPhase color="yellow"/> */}
     {/* <FuncLifeCycle/> */}
     <CounterFc/>
     {/* <FormComp/> */}
    </div>
  );
}

export default App;
