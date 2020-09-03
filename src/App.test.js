import React from 'react';
import { render, screen } from '@testing-library/react';  // to render components in a virtual DOM
import App from './App';  // We need the component we are testing/ rendering

//these 3 are standard import, imported to all testing files
// at some point we will be importing more libraries

//jest global functiosn to write our tests
// - test() // used to run a test

// Jest is going to be our 'test runner'

// test('title', cbToRunTheTest) //global to our entire project here
test('render App component without errors', () => {
    // render the App component
    render(<App />)

    //test will fail if an error is 'thrown' from any function/ component
    //inside the test cb
    // throw new Error('This test ffailed because we manually threw an error')

    breakTheTest(true);
})

// query the virtual dom for an element and make an 'assertion' about that element
test('App renders the form header', () => {
    // Arrange 

    // const container = render(<App />)
    // const {getByText} = render(<App />)
    render(<App />)

    // Act
    // query for the header element
    const header = screen.getByText(/add new animal/i)
    // Assert
    // make an assertion
    expect(header).toBeInTheDocument()
})

const breakTheTest = (someValue) => {
    if (someValue === true) {
    } else {
        throw new Error('This test failed because we manually threw an error')
    }

}

