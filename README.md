props:
------
in react, props stands for properties which are used to pass from one component(parent) to other component(child) for reusing the component.

we can access props in two ways:

1.directly using props keyword as a parameter
2.children props.-- this can be pass as a nested elements b/w the open tagged comp and closing tagged component.



state:
------
in react, state is an oject which stores the dynamic variables.
they can be userinputs/api response/calculations.
whenver a data changes in a state, then state can be update and then component can be re-render.


jsx rules to be follow:
-----------------------
1.to return the html content,it should wrap inside a parent element/fragment.
2.use curlybraces for writing js logic/code
3.class must be replace with className(because class is a js keyword)
4.attributes in jsx can be written in camelCase(for eg:onClick)
5.component can be call either self-closing or comb of open and close.




human life cycle:
----------------
earth
1.born stage
2.living stage/growing stage/updating
3.expiring stage.

browser/vdom


lifecycle:life cycle of components tells us how elements behaving from components creation to removal from dom

1.mounting state
    1.1.constructor: ----important
            it is used to create and initialize the state in class component.

    1.2 render: ---important
            to insert the jsx  inside the dom,we actually need this method.

    1.3 componentdidmount: ---important
            it is a method where we can perform the side effects.

            side effects:
            1.http calls when page load
            2.dom manipulation when page load
            3.timers trigger when page load
            4.event listenrs when page load

    1.4 getderivedstatesfromprops -----optional
            it changes the state based on the props over the time.

            




2.updating state

2.1 constructor---important
2.2 render ----important
2.2.1 getderivedstatefromprops ----optional
2.3 componentdidupdate :--- important
parameters will be prvsprops and prvsstate
 when ever a component is updated, then this method will executes

2.4 shouldcomponentupdate : ---optional
parameters will be nextprops and nextstate
it will decides whether a component should update or not.
this method will returns boolen value.

2.5 getsnapshotbeforeupdate: --optional
parameters will be prvsprops and prvsstate

it will contains the information of state before updating.


3.unmounting state.


DRAWBACKS OF CLASS COMPONENT IN REACT
------------------------------------
1.more complex in boiler plate of code.
2.this keyword can be confusing
3.need to use different lifecycles to handle tasks
4.code cannot run from top to bottom,methods will invokes as per lifecycle.

till 2018, we were suppose to use class approach

after 2018, introduced functional approach and it been using mostly. from 16.8 version.

hooks can be replace here to handle the lifecycle of a component.

rules to be follow while using hooks:
------------------------------------
1.hooks always should be use in functional comp only.
2.hooks always call at the top of the functional components and should import from react.
3.hooks cannot be used in conditionals,cannot be used in the loops.

examples for the hooks:
-----------------------
1.useState
2.useEffect
3.useRef
4.useMemo
5.useReducer
6.useCallback
7.useContext
8.custom hooks

hook can be replica for the constructor and state/setstate in class bases cmps.

hook()


eg:useState()

it can store/intialise with a num/string/boolean/array/obj/null.

hook will returns always an array.

syntax:
-------
[intialisevalue or currentstate,updatefunction]=useState(value with any data type)

to update the currentstate, we have to use updatefunction.


const[count,setCount]=useState(1)
const[isSubscribe,setIssubscribe]=useState(true);
const[products,setProducts]=useState([]);
const[product,setProduct]=useState({})

statelifting:
-------------
it is a technique in react where moving state from 
child component to a parent component,lifting it up the
component tree.


benifits of state lifting:
-------------------------
1.shared state: multiple child components can 
                access and update the shared state.
                
2.easier state management:parent component manages the state,
                          reducing complexity in child components