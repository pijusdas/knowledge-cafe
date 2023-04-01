import React from 'react';

const BlogTwo = () => {
    return (
        <div className=' px-5 bg-gray-50 p-5'>
            <div className='my-8'>
                <h1 className=' mb-5 text-center  text-5xl font-bold'>Core Concepts About React Js</h1>
                </div>

            <div className=' bg-gray-300 px-7 mb-8 p-5 rounded-lg shadow-2xl'>
                <h1 className=' font-bold text-3xl mb-5'>Props vs state</h1>
                <p>In React, props and state are both used to manage and control the behavior of components, but they have different purposes and functionalities.
                    <br />
                    <b>Props:</b> (short for "properties") are used to pass data from a parent component to its child components. They are read-only and cannot be modified within the child component. The parent component defines the props and passes them down to the child component as attributes in the JSX element. The child component can access the props using <code>this.props</code>
                    <br /> <br />
                    <b>State:</b> on the other hand, is used to manage and store data within a component. It is mutable and can be modified within the component using <code>setState()</code>. The state data is private to the component and cannot be accessed or modified by its parent or child components.
                </p>
            </div>


            <div className=' bg-gray-300 px-7 mb-8 rounded-lg shadow-2xl p-5'>
                <h1 className=' font-bold text-3xl mb-5'>How does useState work?</h1>

                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                </p>
            </div>


            <div className=' bg-gray-300 px-7 mb-8 rounded-lg shadow-2xl p-5'>
                <h1 className=' font-bold text-3xl mb-5'>Purpose of useEffect other than fetching data</h1>

                <p> useEffect is commonly used for fetching data, it has a broader purpose and can be used for a variety of tasks in React functional components. Here are a few examples:
                    <br />
                    <li><b>Updating the document title:</b> You can use useEffect to update the document title based on the component's state. This is helpful for providing users with relevant and up-to-date information.</li>

                    <li><b>Managing event listeners:</b> useEffect can be used to add or remove event listeners on the component's mount and unmount respectively.</li>
                    <li>
                        <b>Animations and timers:</b> useEffect can be used to initiate animations or set up timers that are triggered based on component state.
                    </li>
                    <li><b>Managing external libraries:</b> useEffect can be used to initialize or clean up external libraries when the component mounts or unmounts.</li>
                </p>
            </div>


            <div className=' bg-gray-300 px-7 mb-8 rounded-lg shadow-2xl p-5'>
                <h1 className=' font-bold text-3xl mb-5'>How Does React work?</h1>
                <p>React is a JavaScript library used for building user interfaces (UIs) in a declarative and efficient way. It works by creating a virtual representation of the UI called the Virtual DOM, which allows React to efficiently update the actual DOM based on changes to the UI.


                    <li><b>Building a component hierarchy:</b> React organizes the UI into a tree of components, each responsible for rendering a part of the UI.</li>

                       <li> <b>Rendering the Virtual DOM:</b> When a component's state or props change, React creates a new Virtual DOM representation of the UI, comparing it with the previous version to determine the minimum number of changes required to update the actual DOM.</li>

                       <li> <b>Updating the actual DOM:</b> Once the changes are determined, React applies them to the actual DOM in an efficient way, minimizing the amount of DOM manipulation required.</li>

                        <li><b>Handling user events:</b> React provides a way to handle user events (such as clicks or keyboard input) in a declarative way, making it easy to keep the UI in sync with the application state.</li>
                </p>
            </div>

        </div>
    )

};

export default BlogTwo;