# What is the Meme Generator?
It's a free online image maker that lets you add custom resizable text, images, and much more to templates. People often use the generator to customize established memes, such as those found in Imgflip's collection of Meme Templates. However, you can also upload your own templates or start from scratch with empty templates.

# How can I customize my meme?
* You can move and resize the text boxes by dragging them around. If you're on a mobile device, you may have to first check "enable drag/drop" in the More Options section. You can add as many additional text boxes as you want with the Add Text button.
* You can customize the font color and outline color next to where you type your text.
* You can further customize the font for each text box using the gear icon next to the text input. Imgflip supports all fonts installed on your device including the default Windows, Mac, and web fonts, including bold and italic. Over 1,300 free fonts are also supported for all devices. Any other font you want can be used if you first install it on your device and then type in the font name on Imgflip.
* You can insert popular or custom stickers and other images including scumbag hats, deal-with-it sunglasses, speech bubbles, and more. Opacity and resizing are supported, and you can copy/paste images using CMD/CTRL + C/V for quick creation.
* You can rotate, flip, and crop any templates you upload.
* You can draw, outline, or scribble on your meme using the panel just above the meme preview image.
* You can create "meme chains" of multiple images stacked vertically by adding new images with the "below current image" setting.
* You can add special image effects like posterize, jpeg artifacts, blur, sharpen, and color filters like grayscale, sepia, invert, and brightness.

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

React is just wonderful!!!

