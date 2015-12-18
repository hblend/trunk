[[include Trunk]]
[[include TrunkButton]]

(function(){
	'use strict';

	function TrunkInputButton() {
		this.dom = document.createElement('div');
		
		var tb = trunk.create('Button');
		this.button = tb.dom;
		this.button.innerHTML = '';
		this.dom.appendChild(this.button);

		var border = document.createElement('div');
		border.className = 'input-border';
		this.dom.appendChild(border);

		this.input = document.createElement('input');
		border.appendChild(this.input);

		this.configureEvents();
		this.checkButton();
	};

	TrunkInputButton.prototype.checkButton = function() {
		if (this.input.value == '') {
			this.button.setAttribute('disabled', true);
			this.button.className = '';
		} else {
			this.button.removeAttribute('disabled');
			this.button.className = 'blue';
		}
	};

	TrunkInputButton.prototype.configureEvents = function() {
		var that = this;
		this.input.addEventListener('keyup', function(e) {
			switch (e.keyCode) {
				case 27: // Esc
					that.input.value = '';
					break;
				case 13: // Enter
					'' == that.input.value || that.button.click();
					that.input.value = '';
					break;
			}
			that.checkButton();
		}, true);
	};
	
	trunk.register(TrunkInputButton);
	
})();
