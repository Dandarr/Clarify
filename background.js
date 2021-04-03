window.addEventListener('DOMContentLoaded', main);


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

        //----not currently working but doesn't break anything------
        //clear any exsisting Extension classes from target webpage
        var elements = document.getElementsByTagName("*");
        console.log(elements);
        for(var node of elements){
            console.log(node);
            // add all classes here so that they can be wiped before a new class is applied
            node.classList.remove("roboto", "portLilgat", "abel");
        }
        //--------------------------------------------------------


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


    //initilasises the displays for the text size and spacing slidersS
    const sizeElement = document.getElementById('size');
    sizeElement.addEventListener('change', (event) => {
        const sizeResult = document.getElementById("sizeDisplay");
        sizeResult.textContent = event.target.value + 'px';
    });

     const spacingElement = document.getElementById('spacing');
     spacingElement.addEventListener('change', (event) => {
         const spacingResult = document.getElementById("spacingDisplay");
         spacingResult.textContent = event.target.value + 'px';
    });

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

