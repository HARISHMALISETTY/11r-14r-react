import logo from './logo.svg';
import './App.css';
import Mounting from './uiContent/lifeCycle/mountingPhase';
import UpdatingPhase from './uiContent/lifeCycle/UpdatingPhase';
import FuncLifeCycle from './uiContent/functionalComps/lifecyle';
import CounterFc from './uiContent/functionalComps/counterFc';
import FormComp from './uiContent/functionalComps/formEvents';
import Counter from './uiContent/functionalComps/pureComponent/counter';
import LoginForm from './uiContent/functionalComps/loginComp';
import UseefctComp from './uiContent/functionalComps/useefct';
function App() {
  return (
    <div className="App">
     {/* <Mounting color="orange"/> */}
     {/* <UpdatingPhase color="yellow"/> */}
     {/* <FuncLifeCycle/> */}
     {/* <CounterFc/> */}
     {/* <Counter/> */}

     {/* <LoginForm/> */}
     <UseefctComp/>
    
     {/* <FormComp/> */}
    </div>
  );
}

export default App;
