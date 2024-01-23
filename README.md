# JavaScript Functions for Student Management

## Overview

This JavaScript project includes a series of functions designed for arithmetic operations and managing student data. The `index.html` file associated with this project is used to invoke these functions, and the results are displayed in the console.

## Features

### Arithmetic Functions

1. **Addition (`add`)**: Adds two numbers, displaying the result in the console. If invalid parameters are provided, it logs "Niepoprawny parametr" (Invalid parameter).
2. **Subtraction (`substract`)**: Subtracts the second number from the first, with results and error handling similar to the addition function.
3. **Multiplication (`multiply`)**: Multiplies two numbers, handling parameters and errors like the addition function.
4. **Division (`divide`)**: Divides the first number by the second, includes error handling for division by zero and other invalid parameters.

### Student Management Functions

1. **Student List (`studentList`)**: An array of objects, each representing a student with fields for first name, last name, PESEL (Polish national identification number), and field of study.

2. **View Students (`viewStudents`)**: This function takes an array of student objects and logs each student's details to the console in a formatted manner.

3. **Add Student (`addStudent`)**: A function to create a new student object with provided details and add it to the `studentList`.

## Implementation in index.html

The `index.html` file contains calls to these JavaScript functions for demonstration purposes. The results of these function calls, including any console logs, can be viewed in the web browser's developer console.

## Usage

- Open the `index.html` file in a web browser.
- Use the browser's developer tools to open the console.
- Observe the results of the function calls made in the `index.html` file.

## Note

This project is for demonstration purposes and does not include a user interface. All interactions and outputs are handled through the console.
