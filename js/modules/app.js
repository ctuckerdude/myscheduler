angular
   .module('app', ['ui.router', 'ui.calendar', 'ui.bootstrap'])
     .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    	 $urlRouterProvider.otherwise('/');
    	 $stateProvider.state('home', { 
    			 url: '/',
    			 templateUrl: 'templates/calendar.html',
    		     controller: 'calendarCtrl'

    	 });
    	 
    	 $stateProvider.state('about', { 
			 url: '/about',
			 templateUrl: 'templates/about.html'
		 }); 	 
     }]);