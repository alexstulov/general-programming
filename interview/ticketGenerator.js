const questions = {
  html: [
    'What is Semantic HTML and why do we use it?',
    'What is <head> a container for?',
    'How would you use HTML for audio/video placement?',
    'What are global attributes?',
    'How can you use HTML to declare the language of the web page? Why is this important?',
    'How do you embed an image onto a web page?',
    'How would you go about finding if the element and attribute you are using will be supported with the browser for our audience?',
    'BOM'
  ],
  css: [
    'Tell me about an approach you took to decide the layout of a project you worked on. What pushed you to choose one type of layout (Flexbox/Box/Grid) over another?',
    'How does CSS actually work?',
    'Describe pseudo-elements and pseudo-classes, discuss the differences between the two, and what they are used for.',
    'Explain the concept of specificity',
    'What does a preprocessor do and why would it be advantageous to use one?',
    'What is the CSS Box model and what are its elements?',
    'How would you select every paragraph with a class name of about-me that is a child of a div?',
    'What are the different variations of CSS?',
    'How can you integrate CSS on a web page?',
    'What are the advantages of CSS?',
    'What are the limitations of CSS?',
    'What are the CSS frameworks?',
    'What is a CSS selector?',
    'What is RWD?',
    'What are the benefits of CSS sprites?',
    'What is the float property of CSS?',
    'What is the purpose of the z-index and how is it used?',
    'Explain the difference between visibility: hidden and display: none?',
    'CSS2 vs CSS3',
    'Explain the difference between Flexbox and CSS grid.',
    'Explain what are web-safe fonts and fallback fonts.',
    'What is the difference between grouping and nesting?'
  ],
  js: [
    'What is the difference between a forEach loop and the .map() function?',
    'How can you check if an array is empty?',
    'What are default parameters in a function?',
    'What is the difference between synchronous and asynchronous functions?',
    'What are callbacks? Why do we use callbacks?',
    'What is a JavaScript Promise? What are the benefits of using a Promise over a callback?',
    'What are Arrow Functions?',
    'How can you filter values out of an array of objects?',
    'What is functional programming?',
    'What are the data types present in javascript?',
    'To know the type of a JavaScript variable, we can use the typeof operator.',
    'Explain Hoisting in javascript.',
    'Difference between “ == “ and “ === “ operators.',
    'Difference between var and let keyword in javascript.',
    'Differences between declaring variables using var, let and const.',
    'Explain Implicit Type Coercion in javascript.',
    'Is javascript a statically typed or a dynamically typed language?',
    'What is NaN property in JavaScript?',
    'Explain passed by value and passed by reference.',
    'What is an Immediately Invoked Function in JavaScript?',
    'What do you mean by strict mode in javascript and characteristics of javascript strict-mode?',
    'Explain Higher Order Functions in javascript.',
    'Explain “this” keyword.',
    'What do you mean by Self Invoking Functions?',
    'Explain call(), apply() and bind() methods',
    'What is the difference between exec () and test () methods in javascript?',
    'What is currying in JavaScript?',
    'Event loop',
    'Event bubbling',
    'What about using ES6 sets over arrays?',
    'What are the advantages of using ES6 maps over objects?',
    'What is the rest parameter and spread operator?',
    'What is Object Destructuring?',
    'What are iterators?',
    'What is generator?',
    'Explain WeakSet/WeakMap in javascript',
    'What is the role of deferred scripts in JavaScript?',
    'What are object prototypes?',
    'What are classes in javascript?',
    'Difference between prototypal and classical inheritance'
  ],
  react: [
    'What is React, and how is it different from other JavaScript frameworks?',
    'What is JSX?',
    'What is state in React?',
    'What are props in React?',
    'What are phases of a React component’s lifecycle?',
    'What are synthetic events in React?',
    'Where is using a key prop necessary, and why?',
    'What Is the useRefs Hook?',
    'What are Higher-Order Components (HOC)?',
    'What are pure components?',
    'Features of React',
    'Name React advantages',
    'Name React disadvantages',
    'What are React Hooks?',
    'What is the use of the useMemo() Hook?',
    'What is Context in React?',
    'What is React Router?',
    'What is virtual DOM?',
    'When do you use React Context vs Redux?',
    'Why use useCallback?',
    'How to fetch data with React',
    'Explain the use of CSS modules in React.',
    'What is the distinction between client-side and server-side JavaScript?'
  ],
  redux: [
    'What is Redux?',
    'What are the components of Redux?',
    'What is Flux?',
    'What is redux toolkit'
  ]
}

const generateTickets = data => {
  for (const arr in data) {
    console.log(arr, data[arr].length)
  }
  const firstQuestion = [...data.html, ...data.js]
  const secondQuestion = [...data.css, ...data.react, ...data.redux]
  console.log(firstQuestion.length, secondQuestion.length)
  const minLength = Math.min(firstQuestion.length, secondQuestion.length)
  const tickets = []
  let i

  for (i = 0; i < minLength; i++) {
    tickets.push([
      firstQuestion[i],
      secondQuestion[i]
    ])
  }

  const leftOvers = minLength === firstQuestion.length ? secondQuestion : firstQuestion
  for (let j = i + 1; j < leftOvers.length; j += 2) {
    tickets.push([
      leftOvers[j],
      leftOvers[j + 1]
    ])
  }

  return tickets
}

const tickets = generateTickets(questions)

console.log(
  tickets[0],
  tickets[1],
  tickets[2]
)
