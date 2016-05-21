
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];




// The number of loops to perform (what if the array changes?)
var loopCount = 12;

// Keep track of which color we're on in the loop
var currentColor = "";

// Keep track of which reindeer we're on in the loop
var currentReindeer = "";

// Get a reference to the appropriate DOM element for colors
//var colorElement = document.getElementById("reindeer");

// Get a reference to the appropriate DOM element for reindeer
//var reindeerElement = document.getElementById("reindeer");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

	var currentColor = colors[loopTracker]
	var currentReindeer = reindeer[loopTracker]
 	console.log (currentColor, currentReindeer);
	var hohohoElement = document.getElementById("reindeer");
}
