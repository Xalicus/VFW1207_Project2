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
		var petType		= document.getElementById("petType").value;
		var petname		= document.getElementById("petName").value;
		var gender		= document.getElementById("gender").value;
		var favePet		= document.getElementById("favePet").value;
		var yearBought	= document.getElementById("yearBought").value;
		var koolness	= document.getElementById("koolness").value;
		var comments	= document.getElementById("comments").value;
		
		localStorage.setItem("appPetType", petType);
		localStorage.setItem("appPetName", petName);
		localStorage.setItem("appGender", gender);
		localStorage.setItem("appFavePet", favePet);
		localStorage.setItem("appYearBought", yearBought);
		localStorage.setItem("appKoolness", koolness);
		localStorage.setItem("appComments", comments);
		return true;
	};
	
	var getData = function() {
		// hide the form and display the data from the localStorage.
		
		if (localStorage.getItem("appPetType")) {
			var petType = localStorage.getItem("appPetType");
			var petName = localStorage.getItem("appPetName");
			var gender = localStorage.getItem("appGender");
			var favePet = localStorage.getItem("appFavePet");
			var yearBought = localStorage.getItem("appYearBought");
			var koolness = localStorage.getItem("appKoolness");
			var comments = localStorage.getItem("appComments");
				var glist = document.getElementById("glist");
				while (glist.firstChild)
					glist.removeChild(glist.firstChild);
				var newUl = document.createElement("ul");
				var newLi = document.createElement("li");
				newUl.appendChild(newLi);
				var liTxt = document.createTextNode(petType);
				var liTxt = document.createTextNode(petName);
				var liTxt = document.createTextNode(gender);
				var liTxt = document.createTextNode(favePet);
				var liTxt = document.createTextNode(yearBought);
				var liTxt = document.createTextNode(koolness);
				var liTxt = document.createTextNode(comments);
				newLi.appendChild(liTxt);
				glist.appendChild(newUl);
		} else {
			var petName = "Enter a Name for your Kool Pet!";
		}
		document.getElementById("petType").value = petType;
		document.getElementById("petName").value = petName;
		document.getElementById("gender").value = gender;
		document.getElementById("favePet").value = favePet;
		document.getElementById("yearBought").value = yearBought;
		document.getElementById("koolness").value = koolness;
		document.getElementById("comments").value = comments;
		
		return true;
	};
	
	var clearData = function() {
		clear; localStorage.clear();
		return false;
	};
	
	var showArray = function() {
		// Supposed to show something here.
		return true;
	};
	
/*	window.onload = initForm;
	
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
*/	
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

// My Other code

// This would be where I check my code in the console.
say(petLib.submitData());

say(petLib.getData());

say(petLib.clearData());

say(petLib.showArray());

