/*
Author: Kevin Ward
Class: VFW1207
Name: Project 2
Date: 07-02-2012
*/

// Say function only if needed.
var say = function(message) { console.log(message); };

// My Variables

// var = onsubmit ();
// var = onreset ();

// My Functions Library

var kevPetLib = function() {
	window.onload = initForm;
	
	var initForm = function() {
		var allTags = document.getElementsByTagName ("*");
		
		for (var i=0; i<allTags.length; i++) {
			if (allTags[i].className.indexOf ("reqd") > -1) {
				allTags[i].onblur = fieldCheck;
			}
		}
	};
	
	var fieldCheck = function() {
		if (this.value == "") {
			this.className += " highlight";
			this.focus();
	} else {
		this.className = "reqd";
		}
	};
};

// My Other code

