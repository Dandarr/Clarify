window.addEventListener('DOMContentLoaded', main);
window.addEventListener('DOMContentLoaded', changeCSS());


var elements = new Array("textarea","input","div","h1","h2","h3","span","p","li","a");
//CSS file definintley arrives at page
//CSS changes will work when called
//text replace definitley parses the correct text input to addClass


//i'm pretty sure this is working but not sure how to verify it
// gets the document url of the currently active chrome tab
function main() {
    console.log("currently selected elements are: " + elements);
    /*
    //create element style
    var style = currentTab.createElement ("style");
    // style.type = "text/css";
    // dont need to add the .type as it is redundant since style only has one type
    */

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
            doStuffWithDom('roboto');
          }

          else if (textVal == "1"){
              console.log(textVal);
              console.log('changing font to Port Lilgat');
              modifyDOM('portLilgat');
          }

          else if (textVal == "2"){
              console.log(textVal);
              console.log('changing font to Abel');
              modifyDOM('abel');
          }

          else{
            //catch all error message
              console.log("unable to specify font selection");
          }
    }

    //init
    document.getElementById('send').addEventListener('click', textReplace);
    console.log("Loaded Main");


/*
// this should select the currently in use chrome tab and set it to currentTab
let currentTab;
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
function(tabs){
getCurrentURL(tabs[0].url);});
function getCurrentURL(tab){
    currentTab = tab;
}

*/
}


// A function to use as callback
function doStuffWithDom(domContent, textDecision) {
    console.log('I received the following DOM content:\n' + domContent);
    for(var i = 0; i < elements.length; i++){
        var node = document.getElementsByTagName(elements[i]);
        for(var y = 0; y < node.length; y++){
             node[y].classList.add(textDecision);
             console.log("font changed");
        }
    }
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
        // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});




// adds the css page to the target webpage and replaces it
// this has been verified as working
function changeCSS(cssLinkIndex) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", chrome.runtime.getURL('/style.css'));
    document.getElementsByTagName("head").item(cssLinkIndex).appendChild(newlink);
    console.log("linked stylesheet");
}