var app = angular.module('blogs', ['ui.router']);
app.controller('MainCtrl', function ($state) {
	if ('' === $state.current.name) {
		$state.transitionTo('home');
	}
})
