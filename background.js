//init main
window.addEventListener('DOMContentLoaded', main);

//initialises the arrays for text spacing and text sizes functions
const textSizes = ['8', '10', '12', '16', '24', '32'];
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
        //it's litterally the same kind of object as spacing on 53
        console.log(size);
        let sizeDecision = textSizes[size];
        let message = 'ts'+ sizeDecision;
        console.log('the text size selected was: ' + message);
        sendMessage(message);
    }

    //configures the spacing between letters based on a slider
    function spacingConfig(spacing){
        console.log(spacing);
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
         let size = event.target.value;
         sizeConfig(size);
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

