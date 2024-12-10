import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';
import FuncLifeCycle from './uiContent/functionalComps/lifecyle';
import CounterFc from './uiContent/functionalComps/counterFc';
import FormComp from './uiContent/functionalComps/formEvents';
import Counter from './uiContent/functionalComps/pureComponent/counter';
import LoginForm
 from './uiContent/functionalComps/loginComp';
function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     {/* <UpdatingPhase color="yellow"/> */}
     {/* <FuncLifeCycle/> */}
     {/* <CounterFc/> */}
     {/* <Counter/> */}

     <LoginForm/>
    
     {/* <FormComp/> */}
    </div>
  );
}

export default App;
