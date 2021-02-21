window.addEventListener('DOMContentLoaded', init);

function init() {
    var types = new Array("textarea","input","div","h1","h2","h3","span","p","li","a");    
    var style = document.createElement ("style");
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
                document.head.appendChild (style);
                let textDecision = "roboto";
                // perform the font replace
                addClass();
            }

            else if (textVal == "1"){
                console.log(textVal);
                console.log('changing font to Port Lilgat');
                //load font
                style.textContent = "@font-face { font-family: portLilgat; src: url('" + chrome.extension.getURL ("./fonts/PortLligatSans-Regular.ttf") + "'); }";
                document.head.appendChild (style);
                let textDecision = "portLilgat";
                // perform the font replace
                addClass();
            }

            else if (textVal == "2"){
                console.log(textVal);
                console.log('changing font to Abel');
                //load font
                style.textContent = "@font-face { font-family: abel; src: url('" + chrome.extension.getURL ("./fonts/Abel-Regular.ttf") + "'); }";
                document.head.appendChild (style);
                let textDecision = "abel";
                // perform the font replace
                addClass();
            }

            else{
                console.log("unable to specify font selection");
            }
        }

        function addClass(textDecision) {
            for(var i=0;i<types.length;i++){
              var node = document.getElementsByTagName(types[i]);
              for(var y=0;y<node.length;y++){
                // this make sure that there is text in the element first
                if (node[y].textContent){
                  // this adds the class to the matching elements for font style based off textDecision
                  node[y].classList.add(textDecision);
                }
              }
            }
        }

    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");



    }
