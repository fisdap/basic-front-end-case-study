/*

Unlike the css file, the Javascript isn't that bad. At least to anyone
familiar with Angular. Just a couple routes, a couple basic controllers, a 
really basic service.

The views are loaded via the <script type = "text/ng-template"> sections
in the Html file, otherwise there would be cors problems because there 
is no server just the file system and that causes Cors problems with chrome at least
unless you use that alternate views loading method

*/

var app = angular.module('app', ['ngRoute','ngAnimate']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.	
		when('/users', {
			templateUrl: 'user.htm',
			controller: 'FrontCtrl as fc'
		}).
					
		when('/user/:userName/:userId/todos', {
			templateUrl: 'user-tasks.htm',
			controller: 'UserTasksCtrl as utc'
		}).
							
		otherwise({
			redirectTo: '/users'
		});
}]);

/*
	The parent controller for all the other controllers in the app
	I like to include it but it dosen't really do much in this example
*/
app.controller("ParentCtrl", function($http, $scope) {
	var pc = this;
});

/*
	Controller for the front page. Gets user data and and lists users
*/				 
app.controller('FrontCtrl', function($scope,UserService) {
	var fc = this; // I like to make a controller alias named after the controller for some reason

	// each page has their own class. But gotta use $scope instead
	// of an alias for this one particualr variable because of the way the markup is
	$scope.pageClass = 'front-page'; 

	// so just get the user Infoand put it into a controller variable
	UserService.getUsers().then(function(result) {
		// This result is used to display User information 
		// on the page in an ng-repeat for each of the users in the returned result.data array

		fc.users = result.data; 

	}, function() {
		alert('There was an error!'); // just do an alert because I'm lazy right now
	});
});

/*
	Controller for the user tasks page
*/				 
app.controller('UserTasksCtrl', function($scope, $route, UserService) {
	var utc = this;

	var userId = parseInt($route.current.params.userId); // I realize that this is optimally done with as service
	utc.userName = $route.current.params.userName; // see above comment
	utc.sortOption = 'unsorted'; /// thougt I'd include some options for sorting. THis is default

	utc.deleteTask = deleteTask; // deletes a task from the list. Doesn't save
	utc.submit = submit; // submits the task form

	// each ng-view gets it's own class But beause of the markup situation gotta use the $scope
	$scope.pageClass = 'user-tasks'; 
	
	// Populat the page with the user's tasks.
	UserService.getUserTasks(userId).then(function(result) {

		utc.tasks = result.data; // the page is populated with stuff in this array

	}, function() {
		alert('There was an error!');
	});

	// deletes a task from the list
	function deleteTask(id) {
		// find the task in the array and delet it
		utc.tasks = $.grep(utc.tasks, function(task){ return task.id != id; });
	}

	// happens when you submit the new task form
	// adds a task to utc.tasks. Think I'll unshift it into the array
	function submit() {

		// get a random number or something so new tasks have different dummy Id's
		var rand = Math.floor((Math.random() * 99999) + 1);

		// unshift a new task into the array of tasks
		utc.tasks.unshift({
			userId: userId,
			id: "In real life the server would decide the id " + rand,
			title: utc.taskName,
			completed: false
		});

		// Generate a success message to display when the form is submitted
		var taskNameToDisplay = '';
		if (utc.taskName.length > 70) {
			taskNameToDisplay = utc.taskName.substr(0,60) + ' ... '; // for smallest widths 60 seems to work!
		} else {
			taskNameToDisplay = utc.taskName;
		}

		// This is the success message that gets displayed when the form is succesfully submitted
		utc.successMessage = '"' + taskNameToDisplay + '" has been added to ' + utc.userName + '\'s tasks!';

		// reset form stuff
		$scope.taskForm.$setPristine();
		utc.taskName = '';
		utc.submitSuccess = true; // just used to show a success message
	}
});

/* 
	Service for getting user data and whatnot
	If I were to refactor I would also use this to pass information 
	about a selected user between controllers too

	It's just a couple functions that do $http.get to get information 
	from the endpoints
*/
app.factory( 'UserService', function($http) {

	return {
		getUsers: getUsers,
		getUserTasks: getUserTasks
	};

	// Just sends a request to the users endpoint. Returns a promise to be used in the controller
	function getUsers() {
		return $http.get('http://jsonplaceholder.typicode.com/users');
	}

	// Just sends a request to the Tasks endpoint
	function getUserTasks(id) {
		return $http.get('http://jsonplaceholder.typicode.com/user/'+id+'/todos');
	}
});