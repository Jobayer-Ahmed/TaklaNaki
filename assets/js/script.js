$(document).ready(function() {
	// Declear All Variable
	var takla = ['cae', 'ame', 'vi', 'tura', 'kata', 
				 'bal', 'kalka', 'bar', 'kotay', 'dasa', 
				 'assa', 'phn', 'kamna', 'sekta', 'koba', 
				 'korta', 'hola', 'naila', 'ni', 'sate', 
				 'keso', 'aktu', 'bal', 'nyc', 'lagca', 
				 'asa', 'hoba', 'haba', 'deta', 'nejar', 
				 'aina', 'jai', 'hoysa', 'dai', 'kana', 
				 'ni', 'sestam', 'jata', 'paita', 'akta', 
				 'gay', 'vagina', 'lyke', 'kamon', 'dela', 
				 'amr', 'kota', 'comand', 'lick', 'kau', 
				 'aidek', 'thaka', 'maja', 'jaita', 'nouka', 
				 'chode', 'cad', 'aci', 'ata', 'ki', 'onak', 
				 'moga', 'takla', 'tome', 'shikhta', 'cai',
				 'bae', 'noocai', 'sora', 'gorbo', 'balo'
				 ];
	var bangla = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 
				  'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 
				  'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 
				  'ত', 'থ', 'দ', 'ধ', 'ন', 
				  'প', 'ফ', 'ব', 'ভ', 'ম', 
				  'য়', 'য', 'র', 'ল', 'শ', 
				  'ষ', 'স', 'হ', 'ঢ়'
				  ];
	var input;
	var banglaInput;
	var taklaInput;
	var found = false;
	var count = 0;

	// Get The User Input Value
	$('.get').click(function() {
		input = $('#input').val();
		if (input !== '') {
			input.toLowerCase();
			mix();
		} else {
			alert('Enter Text');
		}
		
	});

	// Check if input is mixing
	function mix() {
		banglaInput = input.split('');
		for (var i = 0; i < banglaInput.length; i++) {
			if (bangla.indexOf(banglaInput[i]) > -1) {
			    count++;
			    break;
			}
		}
		taklaInput = input.split(' ');
		for (var i = 0; i < taklaInput.length; i++) {
			if (takla.indexOf(taklaInput[i]) > -1) {
			    count++;
			    break;
			}
		}
		if (count === 2) {
			$('.message').text('Takla!!!').css('color', 'red');
			$('.lh').removeClass('hide');
			$('.main').addClass('hide');
		}
		else {
			checkBangla();
		}

	}

	// Check if input is bangla
	function checkBangla() {
		banglaInput = input.split('');
		for (var i = 0; i < banglaInput.length; i++) {
			if (bangla.indexOf(banglaInput[i]) > -1) {
			    found = true;
			    break;
			}
		}
		if (found) {
			$('.message').text('বাংলা!!!').css('color', 'green');
			$('.lh').removeClass('hide');
			$('.main').addClass('hide');
		}
		else {
			checkTakla();
		}
	}

	// Check if input is "Murad Takla"
	function checkTakla() {
		taklaInput = input.split(' ');
		for (var i = 0; i < taklaInput.length; i++) {
			if (takla.indexOf(taklaInput[i]) > -1) {
			    found = true;
			    break;
			}
		}
		if (found) {
			$('.message').text('Takla!!!').css('color', 'red');
			$('.lh').removeClass('hide');
			$('.main').addClass('hide');
		}
		else {
			checkEnglish();
		}
	}

	// Check if input is english
	function checkEnglish() {
		$('.message').text('English!!!').css('color', 'green');
		$('.lh').removeClass('hide');
		$('.main').addClass('hide');
	}

	// Go back function (Currently Unavailable)
	$('.back').click(function() {
		$('.message').text('');
		$('.main').removeClass('hide');
		$('.lh').addClass('hide');
		banglaInput = ' ';
		taklaInput = ' ';
	});
});

