# Cypress login Functionality Test Automation

## Project Overview
This Project automates login functionality testing for the Practice Test Automation website using cypress
https://practicetestautomation.com/practice-test-login/

# Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Setup Instructions
1. Clone the repository
https://github.com/Saniya-Parveen/Cypress-assignment.git
cd Cypress-assignment

2. Install dependencies
npm install

3. Install Cypress
npm install cypress --save-dev

## Running Tests
To run tests in interactive mode:
npx cypress open

To run tests in headless mode:
npx cypress run

## Test Cases
1. **Positive Login Test**: 
   - Validates successful login with correct credentials
   - Verifies successful navigation to dashboard/home page

2. **Negative Login Test**:
   - Validates login failure with incorrect credentials
   - Checks error message display

3. **Exception Login Test**:
   - Validates behavior when no credentials are entered
   - Checks for appropriate error handling