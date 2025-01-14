# React Native: Accessing State Before Initialization

This repository demonstrates a common error in React Native: attempting to access a state variable before it's been initialized. This often occurs when dealing with asynchronous operations or within the initial render cycle.

## The Problem

The `bug.js` file showcases the problematic code.  The `useState` hook initializes the `count` variable to 0.  An asynchronous operation (simulated with `setTimeout`) updates the state after a delay. The `console.log(count)` attempts to access the `count` variable before the `useEffect` hook has had time to update it. This might result in `undefined` being logged or an unexpected behavior.

## The Solution

The `bugSolution.js` file presents a solution. Conditional rendering is used to prevent rendering content that depends on `count` until it is available.  Alternatively, the initial state could be set to a default value which may not be undefined to avoid this problem completely.

## How to Run

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` (or `npx react-native run-ios`) to run the app on an Android emulator or iOS simulator.