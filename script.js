document.addEventListener("DOMContentLoaded", function(){
	var db = new Firebase("https://lyric-police.firebaseio.com/");
	var lyrics = db.child("lyrics");
	lyrics.push({
		lyric: "Getting stabbed in the back"
	});
});