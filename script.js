document.addEventListener("DOMContentLoaded", function(){
	var db = new Firebase("https://lyric-police.firebaseio.com/");
	var lyrics = db.child("lyrics");

	document.getElementById("lyric-submission-form").addEventListener("submit", function(ev){
		ev.preventDefault();
		submittedLyric = document.getElementById("offending-lyric").value;
		lyrics.push({
			lyric: submittedLyric
		});
		document.getElementById("lyric-submission-form").reset();
	});
});