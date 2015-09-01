//Catch the form submit event
Event.observe('<formId>', 'submit', function(event) {
	//Handle event here
});

//Call func on dom:loaded event
(function() {
	document.observe('dom:loaded', function_name);
})();
