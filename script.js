document.addEventListener("DOMContentLoaded", function(){
	var db = new Firebase("https://lyric-police.firebaseio.com/");
	lyrics = db.child("lyrics");

	lyrics.on("value", function(snapshot){
		// This function fires automatically if the DB has any values stored in it
		var dbLyricList = Object(snapshot.val());
		var lyricList = "";
		// lyric list is the Object form of the information in the DB
		for(var key in dbLyricList) {
			// checking for keys in the Object form of the DB
			if(dbLyricList.hasOwnProperty(key)) {
				// checks whether or not the Object form of it's own, rather than just keys inherited due to prototyping
				var lyric = "<li>" + dbLyricList[key].lyric + "</li>";
				lyricList = lyricList + lyric;
			}
		}
		document.getElementById("lyric-container").innerHTML = lyricList;
	});

	document.getElementById("lyric-submission-form").addEventListener("submit", function(ev){
		ev.preventDefault();
		var submittedLyric = document.getElementById("offending-lyric").value;
		if(submittedLyric.length > 0) {
			var newLyric = lyrics.push({
				lyric: submittedLyric
			});
		} else {
			alert("Sorry friend, we have to make sure you actually submit something.");
		}
		document.getElementById("lyric-submission-form").reset();
	});
});