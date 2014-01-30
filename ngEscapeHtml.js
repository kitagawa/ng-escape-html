ngular.module("escapeHtml",[]).directive('escapeHtml', function($compile) {
	    return function(scope, element, attrs) {
	      scope.$watch(
	        function(scope) {
	          return scope.$eval(attrs.escape-html);
	        },
	        function(value) {
	        	if(value){
	        		value = value.toString();
                    value = value.replace(/&amp;/g, '&')
                .replace(/&gt;/g, '>')
                .replace(/&lt;/g, '<');
	        	}
	          element.html(value);
	          $compile(element.contents())(scope);
	        }
	      );
	    };
	  });

