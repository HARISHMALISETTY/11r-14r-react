import logo from "./logo.svg";
import "./App.css";
import Mounting from "./uiContent/lifeCycle/mountingPhase";
import UpdatingPhase from "./uiContent/lifeCycle/UpdatingPhase";
import FuncLifeCycle from "./uiContent/functionalComps/lifecyle";
import CounterFc from "./uiContent/functionalComps/counterFc";
import FormComp from "./uiContent/functionalComps/formEvents";
import Counter from "./uiContent/functionalComps/pureComponent/counter";
import UseefctComp from "./uiContent/functionalComps/useefct";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./uiContent/functionalComps/Routingcomps/home";
import Pricing from "./uiContent/functionalComps/Routingcomps/pricing";
import AboutUs from "./uiContent/functionalComps/Routingcomps/about";
import PageNotFound from "./uiContent/functionalComps/Routingcomps/pagenotfound";
import ContactUs from "./uiContent/functionalComps/Routingcomps/contact";
import LoginForm from "./uiContent/functionalComps/loginComp";
import Welcome from "./uiContent/functionalComps/Routingcomps/welcome";
import MovieList from "./uiContent/dynamicrouting/movieList";
import MovieDetails from "./uiContent/dynamicrouting/movieDetails";

function App() {
  return (
    <div className="App">
      {/* <Mounting color="orange"/> */}
      {/* <UpdatingPhase color="yellow"/> */}
      {/* <FuncLifeCycle/> */}
      {/* <CounterFc/> */}
      {/* <Counter/> */}

      {/* <LoginForm/> */}
      {/* <UseefctComp/> */}

      {/* <FormComp/> */}

      {/* <Router>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">home</Link>
          <Link to="/contact">ContactUs</Link>
          <Link to="/about">AboutUs</Link>
        </nav>

        <Routes>
          <Route path="/home" element={<Counter />} />
          <Route path="/contact" element={<FormComp/>}></Route>
          <Route path="/about" element={<FuncLifeCycle/>}/>
          <Route path="*" element={<Mounting/>}/>
        </Routes>
      </Router> */}
{/* 
      <Router>
        <div
          style={{
            backgroundColor: "orange",
            padding: "15px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
            
          }}
        >
          <Link className="links" to="/home">Home</Link>
          <Link className="links" to="/contact">ContactUs</Link>
          <Link className="links" to="/about">AboutUs</Link>
          <Link className="links" to="/price">Pricing</Link>
          <Link className="links" to="/login">Login</Link>
        </div>

        <Routes>
          

          <Route path="*" element={<PageNotFound/>}></Route>          
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/price" element={<Pricing/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>


        </Routes>
      </Router> */}

      <Router>

        <div style={{display:"flex",justifyContent:"space-around"}}>
          
        <Link to="/home">Home</Link>
        <Link to="/movies">Products</Link>
  </div>

        
        <Routes>

          <Route path="/home" element={<Home/>}></Route>
          <Route path="/movies" element={<MovieList/>}></Route>
          <Route path="/movies/:id" element={<MovieDetails/>}></Route>
        </Routes>


      </Router>




    </div>
  );
}

export default App;
