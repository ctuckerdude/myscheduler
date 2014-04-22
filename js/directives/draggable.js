angular
   .module("app")
     .directive('draggable', function() {
	   return {
	            // A = attribute, E = Element, C = Class and M = HTML Comment
	            restrict:'A',
	            // The link function is responsible for registering elements as 
	            // draggable
	            link: function(scope, element, attrs) {
         			element.draggable({
         				zIndex: 999,
         				revert: true,     
         				revertDuration: 0 
         			});  
	            }		
	          };
      });

