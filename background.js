/*
Ok so basically the way this works is:
 - main is initialised on DOM content of the popup loading
 - When submit button is hit it fires all the functions in main
 - each function makes a decision on what class it should send based on it's input method:
    - text replaced based on if statment for dropdown menu
    - size and spacing is figured from a slider which indicates an array value that then constructs the name of the correct class
    - colour scheme is based off of radio buttons and parses that value onwards
- these classnames then get parsed to the sendMessage function which parses the information to the content script where the target webpages DOM has been selected. 
- this then applies the classes to every element and each of its nodes in the target DOM.
*/


//init main
window.addEventListener('DOMContentLoaded', main);

//initialises the arrays for text spacing and text sizes functions
const textSizes = [8, 10, 12, 16, 24, 32];
const textSpacings = ['tight', 'normal', 'wide', 'wider'];

function main() {
    //font replacement function
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

    //configures text size based off of a slider
    function sizeConfig(size){
        //size is going wrong here
        console.log(typeof size);
        let sizeDecision = textSizes[size];
        let message = 'ts'+ sizeDecision;
        console.log('the text size selected was: ' + message);
        sendMessage(message);
    }

    //configures the spacing between letters based on a slider
    function spacingConfig(spacing){
        let spaceDecision = textSpacings[spacing];
        let message = 'ts'+ spaceDecision;
        console.log('the text size selected was: ' + message);
        sendMessage(message);
    }

    //sets background and text colours based off of the radio buttons on the popup
    function colourConfig(){
        let radio = document.querySelectorAll('input[name="colourScheme"]');
        let selectedValue;
        for (const rb of radio) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
        console.log(selectedValue);
        sendMessage(selectedValue);
    }

    //INITs
     //initilasises the displays for the text and parses info to sizeConfig
     const sizeElement = document.getElementById('size');
     sizeElement.addEventListener('change', (event) => {
         const sizeResult = document.getElementById("sizeDisplay");
         sizeResult.textContent = textSizes[event.target.value] + 'px';
         let sizeX = sizeElement.value;
         spacingConfig(sizeX);
     });
     //initilasises the displays for spacing sliders and parses info to SpacingConfig
     const spacingElement = document.getElementById('spacing');
     spacingElement.addEventListener('change', (event) => {
          const spacingResult = document.getElementById("spacingDisplay");
          spacingResult.textContent = textSpacings[event.target.value];
          let spacing = event.target.value;
          spacingConfig(spacing);
     });
     console.log('Displays initialised');

    

    //initialises functions in main through buttons
    document.getElementById('send').addEventListener('click', textReplace);
    document.getElementById('send').addEventListener('click', sizeConfig);
    document.getElementById('send').addEventListener('click', spacingConfig);
    document.getElementById('send').addEventListener('click', colourConfig);
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

