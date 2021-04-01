window.addEventListener('DOMContentLoaded', main);


//CSS file definintley arrives at page
//CSS changes will work when called
//text replace definitley parses the correct text input to addClass


//i'm pretty sure this is working but not sure how to verify it
// gets the document url of the currently active chrome tab
function main() {

    //this is definitley working
    function textReplace(){
        //figures out what option is selected
        var textSel = document.getElementById('typeSelect'); 
        var textVal = textSel.value;
        console.log("selected font value is = " + textVal);

        //Action based on dropdown selection
        if (textVal == "0"){
            console.log(textVal);
            console.log('changing font to Roboto');
            sendMessage('roboto');
        }

          else if (textVal == "1"){
              console.log(textVal);
              console.log('changing font to Port Lilgat');
              sendMessage('portLilgat');
          }

          else if (textVal == "2"){
              console.log(textVal);
              console.log('changing font to Abel');
              sendMessage('abel');
          }

          else{
            //catch all error message
              console.log("unable to specify font selection");
          }
    }
    //init
    document.getElementById('send').addEventListener('click', textReplace);
    console.log("Loaded Main");
}


function sendMessage(classy) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			classSelect: classy
		}, function(response) {
			// should be the DOM
			console.log(response);
		});
	});
}

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("Message received in background.js: " + request.DOM);
	sendResponse({
		response: "Message Received",
	});
});