angular
   .module("app") // Use this implementation if local storage is required.
       .factory('ScheduledEvents', function() { 
          return {
        	get: function() {
        	   var scheduledEventsItem = localStorage.getItem("myschedule_scheduled_events");
        	   var scheduledEvents =  [];
        	   
        	   if(scheduledEventsItem != null) {
        		  scheduledEvents =  JSON.parse(scheduledEventsItem);
        	   }

        	   return scheduledEvents; 
        	},
        	
        	put: function(scheduledEvents) {
        	  localStorage.setItem("myschedule_scheduled_events", JSON.stringify(scheduledEvents));
        	}     
         };  
      });
   
   
   
   // Use this implementation if REST end-points are required

   /*   .factory('ScheduledEvents', ['$http', function($http) { 
          return {
        	get: function() {
        	   var events = [];
        	   
        	   // $http.get is asynchronous, use ajax sync instead
        	   jQuery.ajax({
        		      url: '/scheduled_events',
        		      type: 'GET',
        		      dataType: 'json',
        		      timeout : 10000, //10 secs of timeout 
        		      async: false,
        		      cache: false,
        		      success: function(data) {
        		    	 events = data[0].events;
        		      }
        		}); 		
        	   return events;
        	   
          	},
          	
          	put: function(scheduledEvents) {
          	  $http.post('/scheduled_events', JSON.stringify(scheduledEvents)).error(function(data, status, headers, config) {
          		alert("An error occurred when saving selectable events!")
          	  });	
           	}
          }; 
       }]);  */ 
   