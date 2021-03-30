window.addEventListener('DOMContentLoaded', main);
window.addEventListener('DOMContentLoaded', changeCSS());



//CSS file definintley arrives at page
//CSS changes will work when called
//text replace definitley parses the correct text input to addClass


//i'm pretty sure this is working but not sure how to verify it
// gets the document url of the currently active chrome tab
function main() {
    //an array of most commonly used HTML elements
    var elements = document.getElementsByTagName('*');
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
            addClass('roboto');
          }

          else if (textVal == "1"){
              console.log(textVal);
              console.log('changing font to Port Lilgat');
              addClass('portLilgat');
          }

          else if (textVal == "2"){
              console.log(textVal);
              console.log('changing font to Abel');
              addClass('abel');
          }

          else{
            //catch all error message
              console.log("unable to specify font selection");
          }
        
    }


    function addClass(textDecision){
        const rootElement = document.documentElement;
        rootElement.classList.add(textDecision);
    }



    /*
    //this is suspected not to be working
    function addClass(textDecision){
        for(var i=0;i<elements.length;i++){
            var node = document.getElementsByTagName(elements[i]);
            for(var y=0;y<node.length;y++){
                node[y].classList.add(textDecision);
                console.log("font changed");
        }
    }
    }

    // adds the classes i want to the target webpage from my css
    function addClass(textDecision){
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            for (var j = 0; j < element.childNodes.length; j++) {
                var node = element.childNodes[j];
                // this adds the class to the matching elements for font style based off textDecision
                // i need to add into text replace the class that wants adding
                node[j].classList.add(textDecision);
            }
        }
    }
    */


    //init
    document.getElementById('send').addEventListener('click', textReplace);
    console.log("Loaded");
}

// adds the css page to the target webpage and replaces it
// this has been verified as working
function changeCSS(cssLinkIndex) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", chrome.runtime.getURL('/style.css'));
    document.getElementsByTagName("head").item(cssLinkIndex).appendChild(newlink);
}