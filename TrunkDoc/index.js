[[include hljs]]

(function() {

	'use strict';

	function ltrim(text, chars) {
		if (Array.isArray(chars)) {
			// All ok
		} else if ('string' == typeof chars) {
			chars = [chars];
		} else {
			return text;
		}

		while (text.length > 0 && chars.indexOf(text[0]) >= 0) {
			text = text.substr(1);
		}

		return text;
	}

	function rtrim(text, chars) {
		if (Array.isArray(chars)) {
			// All ok
		} else if ('string' == typeof chars) {
			chars = [chars];
		} else {
			return text;
		}

		while (text.length > 0 && chars.indexOf(text[text.length-1]) >= 0) {
			text = text.substr(0, text.length-1);
		}

		return text;
	}

	window.addEventListener('load', function(e) {
		var examples = document.querySelectorAll('example');

		for (var i = 0; i < examples.length; i++) {
			var example = examples[i];

			var text = example.innerHTML;
			text = ltrim(text, '\n');
			text = rtrim(text, ['\n', '\t', ' '])

			var code = document.createElement('code');
			code.classList.add('html');
			code.textContent = text;
			example.parentNode.insertBefore(code, example.nextElementSibling);

			hljs.highlightBlock(code, null, false)
			code.classList.remove('hljs');

			var gutter = document.createElement('span');
			gutter.classList.add('gutter');
			var numlines = text.split('\n').length;
			var gutter_numbers = [];
			for (var j=0; j<numlines; j++) {
				gutter_numbers.push(''+j+'');
			}
			gutter.innerHTML = gutter_numbers.join('<br>');
			code.insertBefore(gutter, code.firstChild);
		}

	}, true);

})();