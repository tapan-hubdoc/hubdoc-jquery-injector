'use strict';

function injectJquery(version='1.6.1'){	
	var origin = document.location.origin;
	console.log(origin);

	var script = document.createElement('script');
	var linkWithoutProtocol = '//code.jquery.com/jquery-' + version + '.js';
	if (origin.indexOf('http') !== -1){
		console.log('injecting ' + linkWithoutProtocol);		
		script.src=linkWithoutProtocol;		
	} else {
		console.log('injecting http://' + linkWithoutProtocol);
		script.src='http://' + linkWithoutProtocol;
	}
	document.head.appendChild(script);
	console.log('done injecting!');
}

(function(){ 
	injectJquery();
})();