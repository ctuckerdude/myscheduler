
/* 
 * Utility methods for adding and retrieving events 
 * from the calendar. 
 */
FullCalendarUtil = {
     addEventToFullCalendar: function(fullCalendarId, newEvent) {
    	 var calendarId = "#" + fullCalendarId; 
    	 $(calendarId).fullCalendar('renderEvent', newEvent, true);  
     },
                             
	 getEventsFromFullCalendar: function(fullCalendarId) {
		 var calendarId = "#" + fullCalendarId;
		 var eventsFromCalendar = $(calendarId).fullCalendar('clientEvents');
	     var events = [];

	     $.each(eventsFromCalendar, function(index,value) {
	       var event =  new ScheduledEvent(value.id, value.title, value.start, value.end, value.allDay);
	    /*   event.id = value.id;            
	       event.start = value.start;
	       event.end = value.end;
	       event.title = value.title;
	       event.allDay = value.allDay; */
	       events.push(event); 
	      }); 
	     
	     return events;
	 },
     
     removeEvent: function(fullCalendarId, eventId) {
    	 var calendarId = "#" + fullCalendarId;
    	 $(calendarId).fullCalendar('removeEvents', eventId);
     }
}
