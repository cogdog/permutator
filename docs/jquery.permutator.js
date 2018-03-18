 jQuery(document).ready(function() {
	// hide everything
	clear_words();
	
	// dazzle once
	dazzle_words();

	// set delay
	setInterval(dazzle_words, 10000);
	
	function clear_words () {
		jQuery('span.marquee').text(' ');
	}

	function dazzle_words () {    	
		jQuery('span.marquee').fadeOut('3000');
		clear_words();

		// all possible words
		var allwords = [
			['Smallest', 'Simplest', 'Super', 'Serious', 'Smallish', 'Smoothest'],
			['Possible','Probable', 'Portable', 'Painless', 'Perceptive', 'Practical'],
			['Learning', 'Lexical', 'Latest', 'Lightest', 'Lucid'],
			['Open', 'Online', 'Omniscient', 'Opportunistic', 'Outstanding', 'Outrageous'],
			['Tools', 'Technologies', 'Techniques', 'Touchstones', 'Timesavers']
		];
	
		// loop and fade in random word
		for (var i = 0; i < 5; i++) {
			jQuery('span.word' + i).text( allwords[i][Math.floor(Math.random()*allwords[i].length)] + ' ');
			jQuery('span.word' + i).delay(800*i).fadeIn(2200);
		}
	}

});
