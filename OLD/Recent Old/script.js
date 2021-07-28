
console.log("Attachment Studios!");

window.onscroll = function() {myFunction()};

function myFunction() {
	var scrollProgress = Math.floor( ( (document.body.scrollTop / ( document.documentElement.scrollHeight - window.innerHeight ) ) * 100 ) ) + "%";
	document.getElementById("progress-bar").style.paddingLeft = scrollProgress;
}

function redirect(project) {
	var token = "/";
	window.location.href = "https://attachment-studios.github.io" + token + project;
}

function goto(link) {
	window.location.href = link;
}
