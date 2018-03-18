<?php

# -----------------------------------------------------------------
# jQuery fancy
# -----------------------------------------------------------------

// add script libary to animate the site description
add_action('wp_enqueue_scripts', 'splot_scripts');

function splot_scripts() {	 
		// custom jquery  to animate the description
		wp_register_script( 'jquery.splot' , get_stylesheet_directory_uri() . '/js/jquery.splot.js', array( 'jquery' ) , '1.0' );
		wp_enqueue_script( 'jquery.splot' );	
}
?>