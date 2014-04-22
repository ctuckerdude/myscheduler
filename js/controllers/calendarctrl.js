angular
   .module("app")
       .controller('calendarCtrl', ['$scope', 
                                    'SelectableEvents', 
                                    'ScheduledEvents', 
                                    'BaseConstants', 
                                    function($scope, SelectableEvents, ScheduledEvents, BaseConstants) {
    	    
    	    // Retrieve config params defined in constants
    	    $scope.calendarId = BaseConstants.CALENDAR_ID;
    	    $scope.timezone = BaseConstants.TIMEZONE;
    	    
    	    // Definitions for selectable events
    	    
    	    $scope.newSelectableEvent = "";
    	   
    	    $scope.addSelectableEvent = function() {
    	      $scope.selectableEvents.push($scope.newSelectableEvent);
    	      SelectableEvents.put($scope.selectableEvents);
    	      $scope.newSelectableEvent = "";
    	    };
    	    
    	    $scope.removeSelectableEvent = function(eventIndex) {
    	    	$scope.selectableEvents.splice(eventIndex, 1);
    	    	SelectableEvents.put($scope.selectableEvents);
    	    };
    	    
    	    // Definitions for scheduled events
    	    
    	    $scope.saveScheduledEvents = function() {
      	       ScheduledEvents.put(FullCalendarUtil.getEventsFromFullCalendar(BaseConstants.CALENDAR_ID));	
    	    };
    	    
    	    $scope.selectableEvents = SelectableEvents.get();           
    	    $scope.eventSource = ScheduledEvents.get();   	    
            
    	    // Calendar config
    	    $scope.uiConfig = {
    	      calendar:{
    	        height: 450,
    	        ignoreTimezone: false,
    	        timzone: $scope.timezone,
    	        droppable: true,
    	        editable: true,
    	        header:{
    	        	left: 'prev,next today',
    				center: 'title',
    				right: 'month,agendaWeek,agendaDay'
    	        }, 
    	        eventClick: function(event){
    	            FullCalendarUtil.removeEvent($scope.calendarId, event._id);
    	        }, 
    	        
    	        // This function renders is called when a new event is dropped
    	        drop: function(date, allDay, jsEvent, ui) {
    	        	// Create using JSON, FullCalender doesn't appear to like dropped 
    	        	// event object with id property.
    	        	var newScheduledEvent = {title: ui.helper[0].attributes['title'].value, start: date, allDay: allDay};
    	        	
    			    FullCalendarUtil.addEventToFullCalendar($scope.calendarId, newScheduledEvent);
    	        
    			}
    	      }
    	    };

    	    $scope.eventSources = [$scope.eventSource];
    	    
        }]);
