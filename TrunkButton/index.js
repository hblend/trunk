[[include Trunk]]

// Component TrunkButton 
(function(){
	'use strict';

	function TrunkButton() {
		this.dom = document.createElement('button');
		this.dom.innerHTML = 'TrunkButton';
	};
	
	trunk.register(TrunkButton);
	
})();
