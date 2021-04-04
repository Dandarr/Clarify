window.onload = function() {
    console.log("Starting page");
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", chrome.runtime.getURL('style.css'));
    // var stylesheet = chrome.extension.getURL("style.css");
    document.getElementsByTagName("head")[0].appendChild(newlink);
}

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("Message received");
    var elements = document.getElementsByTagName("*");
    console.log(elements);
    for(var node of elements){
        console.log(node);
        node.classList.add(msg.classSelect);
    }
    document.documentElement.classList.add(msg.classSelect);
    sendResponse({});
});

/*
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
        */