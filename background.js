window.addEventListener('DOMContentLoaded', init);

function init() {
    var types = new Array("textarea","input","div","h1","h2","h3","span","p","li","a");    
    var stylePoint           = document.createElement ("style");
    document.head.appendChild (stylePoint);

    function textChange() {
        var textSel = document.getElementById('typeSelect');
        var textVal = textSel.value;
        console.log(textVal);
        console.log("Button clicked");
            if (textVal == "0"){
                console.log('changing font to arial');
            }
            else if (textVal == "1"){
                console.log('changing font to comic neue');
                stylePoint.textContent = WebFont.load({
                     google: {families: ['Comic Neue', 'cursive']}});
            }
            else if (textVal == "2"){
                console.log('changing font to dyslexi');
            }

            else{
                console.log("unable to specify font selection")
            }
        }

    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");



    }
