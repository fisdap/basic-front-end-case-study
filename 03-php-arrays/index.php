<!DOCTYPE html>
<html>
	
<head lang = "en">
	<title>Names and Colors</title>

	<meta charset="UTF-8">

</head>
	 
<body>

	<?php 

		// ok so here are the arrays

		// First I need some names
		$names = array('Abe', 'Agnes', 'Bart', 'Bambi', 'Charles', 'Cassie', 'Dilbert', 'Desire', 'Eustace', 'Engelbert',
			'Emily', 'Fritz', 'Fran', 'Godfrey', 'Ginny', 'Hubert', 'Heather', 'Iggy', 'Isabella', 'Jafar', 'Jacquelyn',
			'Keneth', 'Kim', 'Lorenzo', 'Leia', 'Manifred', 'Mindy', 'Ned', 'Natasha', 'Otis', 'Ophelia', 'Percival', 'Patricia',
			'Quasimodo', 'Quinn', 'Russ', 'Regina', 'Sam', 'Samantha', 'Tosh','Thelma','Ulysses','Uma','Vlad','Velma','Wallace',
			'Whitney','Xavier','Xena','Yakov','Yolanda','Zed','Zabrina'
		);

		// Just need some colors now ...
		$colors = array('Aquamarine','Azure','Beige','Bisque','Chartreuse','Cornsilk','DarkOliveGreen',
			'DodgerBlue','Eminence','Electric Lime','Ferrari Red','Fandango','Goldenrod','Grape','Heliotrope',
			'Hot Pink','Icterine','Imperial Blue','Jasper','Jade','Kobicha','Khaki','Lavender','Light Apricot',
			'Marigold','Mauve','Navy Blue','Nijmegen Red','Olive','Outrageous Orange','Plum','Puce','Quartz',
			'Quick Silver','Rust','Raw Sienna','Shamrock','Sepia','Taupe','Topaz','Umber','Unmellow Yellow','Vermilion',
			'Vivid Mulberry','Viridian','Wine','Watermelon','Xanadu','Xanthic','Yellow Orange','Yellow-green','Zomp','Zucchini'
		);

		// .. Now just use array_combine() to make an array of names and colors
		$names_and_colors = array_combine($names, array_reverse($colors));

		print '<p>First, let\'s select a random name.</p>';

		print '<p>The randomly selected name is: "';
		
		get_random_name($names);

		print '"</p>';

		print '<p>And now for a random name and color.</p>';
		
		get_random_name_and_color($names_and_colors);

		function get_random_name($names) {
			print $names[array_rand($names)];
		}

		// I just print it in sentence form, because just the naem and color by themselves is boring
		function get_random_name_and_color($names_and_colors) {
			$key = array_rand($names_and_colors);
			print '<p>"' . $key . '\'s favorite color is ' . $names_and_colors[$key] . '!"</p>';
		}

		?>
	
</body>
</html>