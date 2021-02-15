# cypress-test

## Task 1 – Website end to end tests
Imagine you are the SDET of the renowned note-taking company Evernote (https://evernote.com/), your main role is to develop a test automating framework. Apply the following tests using Cypress with JavaScript using Cucumber.
Login
- Login with correct credentials. Ensure the correct user is logged in.
- Login with incorrect credentials. Ensure correct error message is displayed.
Notes
- Create a note - set note title and body. Make sure that the note just created is displayed in the Notes list.
- Create a note, log out, log in again and make sure that the note is still saved in the Notes list.
Note: Instead of Evernote you can also use Simplenote (https://simplenote.com/).

Login
- Login with correct credentials. Ensure the correct user is logged in.
- Login with incorrect credentials. Ensure correct error message is displayed.
Notes
- Create a note - set note title and body. Make sure that the note just created is displayed in the Notes list.
- Create a note, log out, log in again and make sure that the note is still saved in the Notes list.
# Run test:
Login - LoginPageTest.js
Note - CreateNoteTest.js

## Task 2 – RESTful API tests
Using same Cypress project in Task 1, for this section use the provided API at https://reqres.in/ for all tests. All request payloads and responses are in JSON format.

# Run test:
RestfulTest.js


