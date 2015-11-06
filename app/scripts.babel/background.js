'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});
chrome.browserAction.setBadgeText({text: '1.6.1'});

/* 
//TS: can't seem to get the script to execute on click...
chrome.browserAction.onClicked.addListener(function(){
	
	
	console.log('executing app.js');
	chrome.tabs.executeScript({
	    code: 'document.body.style.backgroundColor="red"'
	  });
	chrome.tabs.executeScript({
		code: 'console.log("executing app.js hopeulflly");'
	});
	chrome.tabs.executeScript(null, {file: 'app.js'});
	chrome.browserAction.setBadgeText({text: '1.6.1'});
});
*/

console.log('Event Page for Browser Action');
