angular
   .module("app") // Use this implementation if local storage is required.
     .factory('SelectableEvents', ['$http', function($http) { 
        return {
  	       get: function() { 	
  	          var selectableEventsItem = localStorage.getItem("myschedule_selectable_events");
  	          var selectableEvents = ["Event1", "Event2", "Event3"];
  	   
  	          if(selectableEventsItem != null) {
  		        selectableEvents = JSON.parse(selectableEventsItem);  
  	          } 
  	          
  	          return selectableEvents;      	   
    	   },
    	
    	   put: function(selectableEvents) {
    	     localStorage.setItem("myschedule_selectable_events", JSON.stringify(selectableEvents)); 	
    	   }
        }; 
     }]); 
   
   // Use this implementation if REST end-points are required

     /*  .factory('SelectableEvents', ['$http', function($http) { 
          return {
        	get: function() {
        	   var events = [];
        	   
        	   // $http.get is asynchronous, use ajax sync instead
        	   jQuery.ajax({
        		      url: '/selectable_events',
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
          	
          	put: function(selectableEvents) {
          	  $http.post('/selectable_events', JSON.stringify(selectableEvents)).error(function(data, status, headers, config) {
          		alert("An error occurred when saving selectable events!")
          	  });	
           	}
          }; 
       }]); */
