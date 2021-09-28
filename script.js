
//* nav mouseover & reset *//

let navBtns = document.getElementById("navBtns");

// This handler will be executed every time the cursor
// is moved over a different list item

navBtns.addEventListener("mouseover", function( event ) {
// highlight the mouseover target

	event.target.style.color = "pink";
  
// reset the color after a short delay
setTimeout(function() {
	event.target.style.color = "";
}, 500);
}, false);
