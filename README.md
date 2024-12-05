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




1.understand the code, then only

2.copy the code, if it is useful then 

3.use it