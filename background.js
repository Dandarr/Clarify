window.addEventListener('DOMContentLoaded', main);

const textSizes = [8, 10, 12, 16, 24, 32];
const textSpacings = [1, 2, 4, 8]
//CSS file definintley arrives at page
//CSS changes will work when called
//text replace definitley parses the correct text input to addClass

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

    function sizeConfig(size){
        let sizeDecision = textSizes[size]
        let message = 'ts'+ sizeDecision
        console.log('the text size selected was' + message)
        sendMessage(message);
    }

    function spacingConfig(spacing){
        let spaceDecision = textSpacings[spacing]
        let message = 'ts'+ spaceDecision
        console.log('the text size selected was' + message)
        sendMessage(message);
    }

    function backColourConfig(){

    }

    function textColourConfig(){

    }
    //INITs
     //initilasises the displays for the text and parses info to sizeConfig
     const sizeElement = document.getElementById('size');
     sizeElement.addEventListener('change', (event) => {
         const sizeResult = document.getElementById("sizeDisplay");
         sizeResult.textContent = textSizes[event.target.value] + 'px';
         let size = event.target.value;
         spacingConfig(size);
     });
     //initilasises the displays for spacing sliders and parses info to SpacingConfig
     const spacingElement = document.getElementById('spacing');
     spacingElement.addEventListener('change', (event) => {
          const spacingResult = document.getElementById("spacingDisplay");
          spacingResult.textContent = textSpacings[event.target.value] + 'px';
          let spacing = event.target.value;
          spacingConfig(spacing);
     });
     console.log('Displays initialised');
    //initialises functions in main through buttons
    document.getElementById('send').addEventListener('click', textReplace);
    document.getElementById('send').addEventListener('click,', sizeConfig);
    document.getElementById('send').addEventListener('click,', spacingConfig);
    document.getElementById('send').addEventListener('click,', backColourConfig);
    document.getElementById('send').addEventListener('click,', textColourConfig);
    console.log('functions initialised');

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

