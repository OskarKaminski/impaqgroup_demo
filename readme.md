IMPAQgroup demo
============

This is demo application for recruitment purposes

[Let's see live demo](https://impaqdemo.herokuapp.com/)

Instruction:
Prepare an application that will download from an external file users.json data and displays them in a table on the screen.

Buttons: "edit" and "delete" respectively edit and delete specific users. It should also be possible to edit multiple users at once (by selecting specific checkboxes and press the "Edit selected" button.

Web Services - specification:

remove:
* should be send as POST method
* should take user object as a parameter
* should be sent to the address users.impaqgroup.com/remove/user.id
	
edit:
* should be send as POST method
* should take user object as a parameter
* should be sent to the address users.impaqgroup.com/edit/user.id

findAll:
* should be send as GET method
* should take collection of users id as a parameter
* should be sent to the address users.impaqgroup.com/findall


find:
* should be send as GET method
* should take user id as a parameter
* should be sent to the address users.impaqgroup.com/find

**use angularJS 1.2.x and jasmine test framework**

**mock/stub the database**

**concentrate on proper design and clean code, rather than UI design**
