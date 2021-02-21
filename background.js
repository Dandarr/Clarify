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
                console.log('changing font to roboto');
                style.textContent = "@font-face { font-family: Byslexic; src: url('" + chrome.extension.getURL ("./fonts/Roboto-Regular.ttf") + "'); }";
                document.head.appendChild (style);
            }
            else if (textVal == "1"){
                console.log(textVal);
                console.log('changing font to comic neue');
                style.textContent = "@font-face { font-family: Byslexic; src: url('" + chrome.extension.getURL ("./fonts/PortLligatSans-Regular.ttf") + "'); }";
                document.head.appendChild (style);
            }
            else if (textVal == "2"){
                console.log(textVal);
                console.log('changing font to abel');
                style.textContent = "@font-face { font-family: Byslexic; src: url('" + chrome.extension.getURL ("./fonts/Abel-Regular.ttf") + "'); }";
                document.head.appendChild (style);
            }
            else{
                console.log("unable to specify font selection");
            }
        }

    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");



    }
