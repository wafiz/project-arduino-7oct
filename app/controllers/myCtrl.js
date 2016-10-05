(function() {

		var app = angular.module("app", ["ngRoute"]);
	

app.config(function($routeProvider) {
    $routeProvider
		// route for the home page
			.when('/home', {
				templateUrl : 'templates/dashboard.htm',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/charts', {
				templateUrl : 'templates/charts.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/reports', {
				templateUrl : 'templates/report.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.image1='https://confluence.atlassian.com/fisheye/files/298976800/299139803/2/1444173711999/FishEye_Charts_Page04.png'
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
		
	});
	app.controller("searchBox", searchBox);
	function searchBox($scope, $http) {
      
		$scope.appName = "The Movie DB";
		$scope.searchName = '';
	




	}

})();

