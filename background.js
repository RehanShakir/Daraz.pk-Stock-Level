var rx = /"stock":(.+?),/gm;
var ry = /"ratingCount":(.+?),/gm;
var arr = [];
arr[0] = "stock";
arr[1] = rx.exec(document.body.parentElement.innerHTML);
arr[2] = "rating";
arr[3] = ry.exec(document.body.parentElement.innerHTML);

var sMessage = '<em>Sorry, unable to find</em>';
if ((arr != null) && (arr.length>0)) {
	sMessage = arr;
	 //arr.entries(arr);

	//console.log(arr[3][1]);
	
}
chrome.runtime.sendMessage(sMessage);