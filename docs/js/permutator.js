 $(document).ready(function() {

	// array holder for data
	var allwords = [];

	// CHECK QUERY PARAMS 
	// Get the URL query parameters for a remote json file
	// h/t ----- http://stackoverflow.com/a/3855394/2418186

	var qs = (function(a) {
		if (a == "") return {};
		var b = {};
		for (var i = 0; i < a.length; ++i)
		{
			var p=a[i].split('=');
			if (p.length != 2) continue;
			b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
		}
		return b;
	})(window.location.search.substr(1).split('&'));
	
	// request local json file
	
	if ( typeof qs['wordsrc'] != 'undefined' )  {
		// build the relative path to the requested json
		json_src = 'wordsrc/' + qs['wordsrc'] + '.json';
		
	} else {
		// none passed, used default
		json_src = 'wordsrc/pdata.json';
	}
	
	// get is some json
	$.getJSON( json_src )

		.done(function( data ) {
			// got data, pass to function to put into motion
			permutate(data) ;   
		})
		.fail(function( jqxhr, textStatus, error ) {
			// aaack says Bill the Cat, error
			var err = textStatus + ", " + error;
			$("#displayed").text( 'Failure trying "' + json_src.substr(8) + '": ' + err );
	});

	
	function permutate(jsondata) {
		
		// backstretch the background
		$.backstretch([jsondata.background]);
		
		// set title
		$("#ptitle").text(jsondata.title);
		
		// set image attribution
		if (jsondata.attribution != null) {
			$("#attribution").html("Image Credits: " + jsondata.attribution);
		}
		
		// update the array of all words to play with
		allwords = jsondata.allwords;
	
		for ( i = 0; i < allwords.length; i++) {
			$("#displayed").append('<span class="marquee word' + i + '"> </span>');
		}
	
		// dazzle once
		dazzle_words();

		// set delay before dazzling again
		setInterval(dazzle_words, 10000);    	
	
	}
	
	function clear_words () {
		$('span.marquee').text(' ');
	}

	function dazzle_words() {  
		// fade and wipe clean 
		$('span.marquee').fadeOut('3000');
		clear_words();  
		
		// loop and fade in random word
		for (var i = 0; i < allwords.length; i++) {
			$('span.word' + i).text( allwords[i]["words"][Math.floor(Math.random()*allwords[i]["words"].length)] + ' ');
			$('span.word' + i).delay(800*i).fadeIn(2200);
		}
	}
});