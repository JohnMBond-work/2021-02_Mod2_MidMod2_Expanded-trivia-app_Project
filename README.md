Purpose:
    To help test the knowledge of some SE topics.
Target End User:
    Software Engineering students.
Embedded Link to Publicly Deployed App:
    <pending>


Notes of History and Experience in developing this Project:

2021-01 QuizBee instructional
https://www.youtube.com/watch?v=aq-fCtg_gG4

2021-01-30:

Learned:
    mounting components concept is not unlike mounting hdd's in Linux.  Mount when access is needed and unmount when finished done with it.
    state should always be located at the nearest parent.  This makes it easy to store and debug.

Notes:
    Obtained API from https://quizapi.io/

    Working on the json data with Tiffany, we were both finding it difficult to work with this json's layout.
        This was due to the answers being returned as an object rather than an array.
        We had to iterate over the object and create an array of radio buttons containing the key and the value of that field in the answer's object.  Note, this is only with the oject of answers at this time.  
        Each answers object contains 6 fields with some that are null.  Challenge was to get only the fields with a value other than null to be the only ones to render in the card.  We dont want to display answers that dont exist as an option to pick from.

        Next challenge is to address the correct answer object and compare it to the selected answers.  6 fields to deal with here too, regardless of the answer's null fields.  Some questions have multiple choice, so searching for true will have to contenue through the for loop to capture all true values.

    I am gaining a more clear understanding of the React-Router-Dom due to the need to install and then import them into my App.js file.  Also, the need to insert the proper tags into the jsx of App.js.
    This is so the display on the main page is updated instead of the whole main page itself, such as refreshing the page.

KILLEDs the quizbee project.  Started constructing trivia-app with Tiffany this evening.  Lots learned from doing this from scratch.  Concepts learned from quizbee are becoming more clear going down this path.

Switched to self constructed code using API source:  https://quizapi.io




2021-01-31:

Notes:
    Working in Redux today.  Plan is to have the API call to happen in Redux for all three quiz choices.  Reason is to elimate the lag in loading the quizes and to store the json data in the Redux state instead of the individual component state.

    Started using Yarn for the first time today.  Installed React-Redux via Yarn.

    Tried to move the API calls for all three quiz topics into Redux as a state.  the Reducer was pulling in the data properly but it was not updating the value in Redux state.  Could not figure out why.  Saved that branch for future analysis and learning oportunity.  started a branch from this branch and backtracked to original approach that allows the user to choose which quiz topic to do and thus initializing the API fetch at that time.
    working on switching between questions with a next button that only works when an answer is chosen.

Learned:
    Reducers are the concept of an emutible data.
    UPPERCASE is a sign in the code that something is meant to be a constant value.
    Am much more failiar with Redux state and component props and how they are mapped.
    htmlFor.
    Imutible data that cant be changed directly but can be changed via the reducer through redux.

Tomorrow's goals:
    play with styling.
    review current code and make notes.

Tuesday's goals:
    Work on the score component.
    work on the functionality for checking correct vs incorrect answer and updating their score in Redux accordingly.
    Address the user login as a last option.



2021-02-02:

Notes:
    Completed the score keeping component.  Correct vs Incorrect check completed.  Did some styling.
    User login not done.  Will be a bit more complicated than time will allow for at this time.

Learned:
    Forgot what I learned due to lack of taking notes straight away.  :(



Goals:
    Still need to develop the user login.
    Still need to dress it up more with CSS.
    Still need to add more comments within the code files.
    Still need to deploy to heroku.com
    Expand to include more options for the quiz topics.
    Expand to place quiz options into a nav bar and render quiz container to the right of the nav bar.
    Upgrade with Header, side-bar, Developer, etc...


