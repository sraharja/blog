(function() {
	'use strict';

	angular.module('blogs').config(routeConfig);

	function routeConfig($locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');

		$urlRouterProvider.otherwise('/');

		$urlMatcherFactoryProvider.strictMode(false);
	}
})();
