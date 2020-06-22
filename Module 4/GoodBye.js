(function (window){
	var byeSpeaker = {};
	var bye = "Good Bye";
	byeSpeaker.speak = function (name) {
  console.log(bye + " " + name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);