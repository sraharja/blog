(function() {
	'use strict';

	angular.module('blogs').config(homeRoute);

	function homeRoute($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'page/home/home.html',
			controller: 'HomeCtrl as ctrl'
		});
	}
})();
