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
		json_src = qs['wordsrc'] . '?jsoncallback=?';
	} else {
		json_src = "js/pdata.json";
	}
	
	$.getJSON( json_src )
	
	  .done(function( jsondata ) {
    	$("#ptitle").text(jsondata.title);
    	$("#attribution").html("Image Credits: " + jsondata.attribution);
    	$.backstretch([jsondata.background]);

    	allwords = jsondata.allwords;
    	
    	for ( i = 0; i < allwords.length; i++) {
    		$("#displayed").append('<span class="marquee word' + i + '"> </span>');
    	}
    	
		// dazzle once
		dazzle_words();

		// set delay
		setInterval(dazzle_words, 10000);    	
    	
  		})
  		.fail(function( jqxhr, textStatus, error ) {
    		var err = textStatus + ", " + error;
    		$("#displayed").text( "Data request failure: " + err );
	});

	
	function clear_words () {
		$('span.marquee').text(' ');
	}

	function dazzle_words () {  
		clear_words();  	
		$('span.marquee').fadeOut('3000');
		
		// loop and fade in random word
		for (var i = 0; i < allwords.length; i++) {
			$('span.word' + i).text( allwords[i]["words"][Math.floor(Math.random()*allwords[i]["words"].length)] + ' ');
			$('span.word' + i).delay(800*i).fadeIn(2200);
		}
	}
	
	
});