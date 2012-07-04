/*
Author: Kevin Ward
Class: VFW1207
Name: Project 2
Date: 07-02-2012
*/

// Say function only if needed.
var say = function(message) { console.log(message); };

// My Functions Library

var kevPetLib = function() {
	
	var submitData = function() {
		
		return true;
	};
	
	var getData = function() {
		
		return true;
	};
	
	var clearData = function() {
		
		return true;
	};
	
	var showArray = function() {
		
		return true;
	};
	
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
	
	// These are my Public Methods & Properties.
	return {
		"submitData" 		: submitData,
		"getData" 			: getData,
		"clearData" 		: clearData,
		"showArray"			: showArray
	};
	
};

// My Variables

var petLib = new kevPetLib();

// var = onsubmit ();
// var = onreset ();

// My Other code

// This would be where I check my code in the console.
say(petLib.submitData());

say(petLib.getData());

say(petLib.clearData());

say(petLib.showArray());

