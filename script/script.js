// const header = document.getElementsByClassName('navbar');
window.onscroll = function() {
	var element = document.getElementById("navnav");
	var top = window.scrollY;
	if(top >=100) {
	    element.classList.add("navbarDark");
	}
	else {
	    element.classList.remove("navbarDark");
	}
}