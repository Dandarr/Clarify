
const type = new Array('textarea','input','div','h1','h2','h3','span','p','li','a');

chrome.runtime.onMessage.addListener(textChange, init);
//^^^Uncaught TypeError: This event does not support filters
chrome.browserAction.setBadgeText({text: 'ON'});
chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});

function textChange(request, sender, sendResponse) {
  let stylePoint  = document.createElement ('style');
  switch (typeSelection) {
    case 'Comic Neue':
      console.log('changing font to comic neue');
      stylePoint.textContent = WebFont.load({
        google: {families: ['Comic Neue', 'cursive']}});
      break;
    case 'Dyslexi':
      console.log('changing font to dyslexi');
      break;
    case 'Arial':
      console.log('changing font to arial');
      break;
  }
}

function init(){
  //the button should now be working will have to check though
  typeButton.addEventListener('click', textChange());}
  let typeSelection = chrome.getElementById(typeSelect).value;