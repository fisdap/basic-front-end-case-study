
## Create a form

*Note, mine is in another branch!

Welcome to your first (and longest) code task. You may use JQuery or any other framework you feel comfortable with to complete this task.

In order to complete this task:

- we recommend to use a library (jQuery) or a framework (Angular, Ember, React, etc) but the choice is yours
- you should create *at least* on html5 page (index.html) and at least one JavaScript file (index.js)
- please include some basic css styles and feel free to add animations if you feel that they're applicable
- if you decide to use a library or framework, please consider linking to an online version of it (jQuery: https://code.jquery.com/, others: https://cdnjs.com/libraries). We prefer not to have dependency code in our git repository.

Here is a summary of the task

1. Initially the page should show a list of users. The data endpoint for these users is `http://jsonplaceholder.typicode.com/users`. Each user will have a userId. Show as much or as little data about the user as you like.
2. When a user is clicked on, the page should load a form that shows the todo items of the user. The data endpoint for a given user's todos is: `http://jsonplaceholder.typicode.com/user/1/todos` where `1` is the user id of that user. 
3. The form for the selected user should indicate which of the todos are completed and which todos are not (get creative here).
4. When you click on a todo item it should visually toggle between completed and incomplete
5. There should be a (this does not need to make a call to the server).
5. Lastly, there should be a field on the form that allows you to type in a new todo item and a button that when clicked, adds it to the list. (again, this does not need to call to the server, just add it to the existing list)

