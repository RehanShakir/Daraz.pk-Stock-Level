// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	//alert(message[1]);
	//var stk = message.slice();
 if(message[0] === "stock"){
	if (document.getElementById('pagetitle')) {
		document.getElementById('pagetitle').innerHTML = message[1][1];
	}
}
 if(message[2] === "rating"){
	if (document.getElementById('pagetitle1')) {
		document.getElementById('pagetitle1').innerHTML = message[3][1];
	}
}
});
// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'background.js'
	});;
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
});