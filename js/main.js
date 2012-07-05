/*
Author: Kevin Ward
Class: VFW1207
Name: Project 2
Date: 07-02-2012
*/

// Say function only if needed.
var say = function(message) { console.log(message); };

// My Functions Library

window.addEventListener("DOMContentLoaded", function(){

	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	// Create select field element and populate with options.
	var makeCats = function() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("petsType"),
			makeSelect = document.createElement("petsType");
			makeSelect.setAttribute("id", "petsType");
		for(var i=0, j=petGroups.length; i<j; i++) {
			var makeOption = document.createElement("option");
			var optTxt = petGroups[i];
			makeOption.setAttribute("value", optTxt);
			makeOption.innerHTML = optTxt;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
	var submitData = function() {
		var id				= Math.floor(Math.random()*1000001);
		// Gather round ye olde form field values, and store in ye olde objects.
		// Object props contain array with the form label and input value.
		var item			= {};
			item.petType	= ["Pet Type:", $("petType").value];
			item.petName	= ["Pet Name:", $("petName").value];
//			item.gender		= ["Gender:", genderValue];
//			item.favepet	= ["Favorite Pet:", faveValue];
			item.yearBought	= ["Year Bought:", $("yearBought").value];
			item.koolness	= ["Koolness:", $("koolness").value];
			item.comments	= ["Comments:", $("comments").value];
		// Save data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pet is saved to the Pokedex!")
		
	};
	
	
	
	var petGroups = ["--Choose A Pet Type--", "Dogs", "Cats", "Rodents", "Birds", "Farm Animals"];
	makeCats();
	
//	var showData = $("showData");
//	showData.addEventListener("click", getData);
//	var clearData = $("clearData");	
//	clearData.addEventListener("click", clearData);
	var save = $("submitData");
	save.addEventListener("click", submitData);
	
	
});
/*
var kevPetLib = function() {
	
	// My Submit Data Function, with random number key:value pairs.
	var submitData = function(key) {
		getSelectedRadio();
		setCheckboxValue();
		var petType		= document.getElementById("petType").value;
		var petname		= document.getElementById("petName").value;
		var gender		= document.getElementById("gender").value;
		var favePet		= document.getElementById("favePet").value;
		var yearBought	= document.getElementById("yearBought").value;
		var koolness	= document.getElementById("koolness").value;
		var comments	= document.getElementById("comments").value;
		
		localStorage.setItem("appPetType", $("petType").value);
		localStorage.setItem("appPetName", $("petName").value);
		localStorage.setItem("appGender", $("gender").value);
		localStorage.setItem("appFavePet", $("favePet").value);
		localStorage.setItem("appYearBought", $("yearBought").value);
		localStorage.setItem("appKoolness", $("koolness").value);
		localStorage.setItem("appComments", $("comments").value);
		
		alert("Pet Saved!");
	};
	
	// My Get Data Function
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
	
	// My Clear Data Function
	var clearData = function() {
		clear; localStorage.clear();
		return false;
	};
	
	// My Show Array Function
	var showArray = function() {
		// Supposed to show something here.
		return true;
	};
*/	
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
/*
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
*/
