window.addEventListener('DOMContentLoaded', init);

function init() {

  // this should select the currently in use chrome tab and set it to currentTab
    let currentTab =  chrome.tabs.query({ currentWindow: true, active: true });

    //an array of most commonly used HTML elements
    var types = new Array("textarea","input","div","h1","h2","h3","span","p","li","a");    
    //create element style
    var style = currentTab.createElement ("style");
    // style.type = "text/css";
    // dont need to add the .type as it is redundant since style only has one type


    function textChange() {
        // textSel is the dropdown menu for fonts
        //textVal is the currently selected option from that dropdown
        var textSel = document.getElementById('typeSelect'); 
        var textVal = textSel.value;
        console.log(textVal);
        console.log("Button clicked");
            if (textVal == "0"){
              console.log(textVal);
              console.log('changing font to Roboto');
                //load font
                style.textContent = "@font-face { font-family: roboto; src: url('" + chrome.extension.getURL ("./fonts/Roboto-Regular.ttf") + "'); }";
                //loads font into the target chrome tab
                currentTab.head.appendChild(style);
                // perform the font replace
                addClass("roboto");
            }

            else if (textVal == "1"){
                console.log(textVal);
                console.log('changing font to Port Lilgat');
                //load font
                style.textContent = "@font-face { font-family: portLilgat; src: url('" + chrome.extension.getURL ("./fonts/PortLligatSans-Regular.ttf") + "'); }";
                //loads font into the target chrome tab
// ----THIS NEEDS TO BE REPLACED ONCE EVERYTHING IS WORKING AS IT SHOULD----
                document.head.appendChild(style);
                // perform the font replace
                addClass("portLilgat");
            }

            else if (textVal == "2"){
                console.log(textVal);
                console.log('changing font to Abel');
                //load font
                style.textContent = "@font-face { font-family: abel; src: url('" + chrome.extension.getURL ("./fonts/Abel-Regular.ttf") + "'); }";
// ----THIS NEEDS TO BE REPLACED ONCE EVERYTHING IS WORKING AS IT SHOULD----
                document.head.appendChild(style);
                // perform the font replace
                addClass("abel");
            }

            else{
              //catch all error message
                console.log("unable to specify font selection");
            }
      }

      // this cycles through each element on the target webpage and updates the class of each element to the class selected in the if statement in textchange()

      // this can be used multiple times and for different functionalities as multiple classes can be used for a HTML element
        function addClass(textDecision) {
            for(var i=0;i<types.length;i++){
              var node = currentTab.getElementsByTagName(types[i]);
              console.log("node = " + node);
              for(var p=0;p<node.length;p++){
                // this make sure that there is text in the element first
                if (node[p].textContent){
                  // this adds the class to the matching elements for font style based off textDecision
                  node[p].className.add(textDecision);
                }
              }
            }
        }

      //INIT button
    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");
    
}
