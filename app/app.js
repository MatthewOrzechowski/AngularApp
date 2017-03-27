'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3', 
  'myApp.view4',
  'myApp.view5',
  'myApp.view6', 
  'myApp.view7',
  'myApp.view8',
  'myApp.version'
]);
myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  	.when('#!/view2', {
  		templateUrl: "view2/view2.html",
  		controller: "View2Ctrl"})
  	.when('#!/view3', {
  		templateUrl: "view3/view3.html",
  		controller: "View3Ctrl"})
  	.when('#!/view3', {
  		templateUrl: "view3/view3.html",
  		controller: "View3Ctrl"})
  	.when('#!/view4', {
  		templateUrl: "view4/view4.html",
  		controller: "View4Ctrl"})
    .when('#!/view5', {
  		templateUrl: "view5/view5.html",
  		controller: "View5Ctrl"})
  	.when('#!/view6', {
  		templateUrl: "view6/view6.html",
  		controller: "View6Ctrl"})
  	.when('#!/view7', {
  		templateUrl: "view7/view7.html",
  		controller: "View7Ctrl"})
  	.when('#!/view8', {
  		templateUrl: "view8/view8.html",
  		controller: "View8Ctrl"})
  	    .when('#!/view9', {
  		templateUrl: "view9/view9.html",
  		controller: "View9Ctrl"})
  	.when('#!/view10', {
  		templateUrl: "view10/view10.html",
  		controller: "View10Ctrl"})
  	.when('#!/view11', {
  		templateUrl: "view11/view11.html",
  		controller: "View11Ctrl"})
  	.otherwise({redirectTo: '/view1'});
}]);

var module1 = angular.module('myApp.view1', ['ngRoute']);

module1.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
});

var module2 = angular.module('myApp.view2', ['ngRoute']);

module2.controller('View2Ctrl', function($scope, $location) {
	$scope.selectedProgram = null;

	$scope.updateShortTerm = function() {
		$scope.selectedProgram = "Short Term Loan"; 
	}

	$scope.updateLongTerm = function() {
		$scope.selectedProgram = "Occupancy Loan";
	}
});

module2.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

var module3 = angular.module('myApp.view3', ['ngRoute']);

module3.controller('View3Ctrl', function($scope, $location) {
	$scope.data = {
		selectedOccupancy: {id: null, name: null},
		options:
		[{id: "1", name: "Primary Residence"},
		 {id: "2", name: "Secondary Residence"},
		 {id: "3", name: "Investment Property"}]	
	};

	$scope.ownershipInterest = "no";

	$scope.checkedYes = function() {
		$scope.ownershipInterest = "yes";
	}

	$scope.checkedNo = function() {
		$scope.ownershipInterest = "no";
	}

	$scope.updateSelectedOccupancy = function(value) {
		$scope.data.selectedOccupany = value;
	}

});

module3.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}]);

var module4 = angular.module('myApp.view4', ['ngRoute']);

module4.controller('View4Ctrl', function($scope, $location) {
	$scope.data = {
		selectedOccupancy: {id: null, name: null},
		options:
		[{id: "1", name: "Single-Family Home"},
		 {id: "2", name: "Attached Planned Unit Development (PUD)"},
		 {id: "3", name: "Detached Planned Unit Development (PUD)"},
		 {id: "4", name: "Duplex"},
		 {id: "5", name: "Triplex"},
		 {id: "6", name: "Four Plex"}, 
		 {id: "7", name: "Condominium"}]	
	};

	$scope.zipcode = "";


});

module4.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}]);

var module5 = angular.module('myApp.view5', ['ngRoute']);

module5.controller('View5Ctrl', function($scope, $location) {
	$scope.ownershipInterest = "";

	$scope.checkedPurchase = function() {
		$scope.ownershipInterest = "purchase";
	}

	$scope.checkedRefinance = function() {
		$scope.ownershipInterest = "refinance";
	}


});

module5.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}]);

var module6 = angular.module('myApp.view6', ['ngRoute']);

module6.controller('View6Ctrl', function($scope, $location) {
	$scope.data = {
		selectedOccupancy: {id: null, name: null},
		options:
		[{id: "1", name: "Primary Residence"},
		 {id: "2", name: "Secondary Resident"},
		 {id: "6", name: "Primary Residence"}]	
	};

	$scope.updateSelectedOccupancy = function(value) {
		$scope.data.selectedOccupany = value;
	}

});

module6.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view6', {
    templateUrl: 'view6/view6.html',
    controller: 'View6Ctrl'
  });
}]);

var module7 = angular.module('myApp.view7', ['ngRoute']);

module7.controller('View7Ctrl', function($scope, $location) {
	$scope.downpayment = 0;
	$scope.askingprice = 0;

	$scope.checkDownPayment = function() {
		if ($scope.askingprice > 20 * $scope.downpayment) {
			document.getElementById("resulterror").style.display = "block";
		} else {
			document.getElementById("resulterror").style.display = "none";
		}
	}


});

module7.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'view7/view7.html',
    controller: 'View7Ctrl'
  });
}]);

var module8 = angular.module('myApp.view8', ['ngRoute']);

module8.controller('View8Ctrl', function($scope, $location) {
	$scope.creditScore = 680;
	

	
});

module8.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view8', {
    templateUrl: 'view8/view8.html',
    controller: 'View8Ctrl'
  });
}]);

