(function (window){
	var helloSpeaker = {};

	var greet = "Hello";
	helloSpeaker.speak = function (name) {
  		console.log(greet + " " + name);
		}
	window.helloSpeaker=helloSpeaker;
})(window);