export const accordion_data = [
    {
        id: 1,
        question: 'What is React?',
        answer: 'React is a front-end JavaScript library developed by Facebook in 2011. It follows the component based approach which helps in building reusable UI components. It is used for developing complex and interactive web and mobile UI. Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.',
    },
    {
        id: 2,
        question: 'What are the features of React?',
        answer: 'It uses the virtual DOM instead of the real DOM. It uses server-side rendering. It follows uni-directional data flow or data binding.',
    },
    {
        id: 3,
        question: 'What are the limitations of React?',
        answer: 'React is just a library, not a full-blown framework. Its library is very large and takes time to understand. It can be little difficult for the novice programmers to understand. Coding gets complex as it uses inline templating and JSX',
    },
    {
        id: 4,
        question: 'What do you understand by Virtual DOM? Explain its works.',
        answer: 'A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Web developer course online to learn more about react.',
    },
    {
        id: 5,
        question: 'Why can’t browsers read JSX?',
        answer: 'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.',
    },
    {
        id: 6,
        question: '“In React, everything is a component.” Explain.',
        answer: 'Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.',
    },
    {
        id: 7,
        question: 'What is the purpose of render() in React.',
        answer: 'Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.',
    }
];