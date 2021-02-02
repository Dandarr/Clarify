window.addEventListener('DOMContentLoaded', init);

function init() {    
    function textChange() {
        console.log("Button clicked");
        alert("It works!");
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
        }


    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");

    var textSel = document.getElementById('typeSelect');
    var textVal = textSel.value;
    }
