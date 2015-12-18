[[include Trunk]]

// TrunkBipanel 
(function(){
	'use strict';

	function TrunkBipanel() {
		this.dom = document.createElement('div');

		this.splitter = document.createElement('div');
		this.splitter.classList.add('splitter');
		this.splitter.addEventListener('click', function(e) {
			that.dom.classList.toggle('collapsed');
		}, true);
		this.dom.appendChild(this.splitter);

		this.left = document.createElement('div');
		this.left.classList.add('left');
		this.dom.appendChild(this.left);

		this.right = document.createElement('div');
		this.right.classList.add('right');
		this.dom.appendChild(this.right);

		var that = this;
	};

	TrunkBipanel.prototype.addLeft = function(dom) {
		this.left.appendChild(dom);
	};

	TrunkBipanel.prototype.addRight = function(dom) {
		this.right.appendChild(dom);
	};

	trunk.register(TrunkBipanel);
})();
