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

		// all possible words, make enough arrays and choices for your own word to permutate
		// here we make words for "cogdog"--
		var allwords = [
			['Caustic', 'Cynical', 'Certified', 'Carpe', 'Coarse', 'Crazy', 'Colorful', 'Cheery'],
			['Open', 'Online', 'Omniscient', 'Odious', 'Official', 'Opportunistic', 'Outstanding', 'Outrageous'],
			['Groovy', 'Graphical', 'Generous', 'Gorgeous', 'Great', 'GIFfing', 'Goofy'],
			['Devilish', 'Darling', 'Dastardly', 'Daring', 'Doppleganger', 'Dingy', 'Dogged'],
			['Outlandish', 'Oracle', 'Orange', 'Ornery', 'Orbiting', 'Outrageous', 'Odorless'],
			['Gigster', 'Giant', 'Godzilla', 'Goop', 'Goofball', 'Gringo', 'Gentleman', 'Giraffe', 'Gaga']
		];
	
		// loop and fade in random word
		for (var i = 0; i < allwords.length; i++) {
			jQuery('span.word' + i).text( allwords[i][Math.floor(Math.random()*allwords[i].length)] + ' ');
			jQuery('span.word' + i).delay(800*i).fadeIn(2200);
		}
	}

});