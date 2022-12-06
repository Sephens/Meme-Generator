# State and Props in React
React is the most popular front end JavaScript library today. From startups to big corporations, companies are adopting this widely used technology. Big names like Netflix, Airbnb, The New York Times, and many more are already using it on their websites and mobile applications. React’s popularity grew mainly due to how fast React web applications perform when compared to those developed using Angular. React introduced several concepts that overcame the drawbacks of previous front end frameworks.

* This article will help you get familiar with a very important concept of React, the `state`. React State holds the data for a component. The component, in turn, returns the data contained within the state to the output.

## What Is ‘State’ in ReactJS?
* The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render. 

* A state can be modified based on user action or network changes
* Every time the state of an object changes, React re-renders the component to the browser
* The state object is initialized in the constructor
* The state object can store multiple properties
* `this.setState()` is used to change the value of the state object
* `setState()` function performs a shallow merge between the new and the previous state

### The setState() Method
* State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

* Always use the setState() method to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.

## State vs. Props

| | State | Props |
| :---         |     :---:      |          ---: |
| Use Case	   | State is used to store the data of the components that have to be rendered to the view     | Props are used to pass data and event handlers to the children components    |
| Mutability     | State holds the data and can change over time      | Props are immutable—once set, props cannot be changed     |
|Component  |State can only be used in class components |  Props can be used in both functional and class components|
|Updation  |Event handlers generally update state   |   The parent component sets props for the children components  |

