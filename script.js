document.addEventListener("DOMContentLoaded", function(){
	var db = new Firebase("https://lyric-police.firebaseio.com/");
	lyrics = db.child("lyrics");

	lyrics.on("value", function(snapshot){
		// This function fires automatically if the DB has any values stored in it
		var lyricList = Object(snapshot.val());
		// lyric list is the Object form of the information in the DB
		for(var key in lyricList) {
			// checking for keys in the Object form of the DB
			if(lyricList.hasOwnProperty(key)) {
				// checks whether or not the Object form of it's own, rather than just keys inherited due to prototyping
				console.log(key + " => " + lyricList[key].lyric);
			}
		}
	});

	document.getElementById("lyric-submission-form").addEventListener("submit", function(ev){
		ev.preventDefault();
		var submittedLyric = document.getElementById("offending-lyric").value;
		var newLyric = lyrics.push({
			lyric: submittedLyric
		});
		document.getElementById("lyric-submission-form").reset();
	});
});