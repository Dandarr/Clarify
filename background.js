window.addEventListener('DOMContentLoaded', init);

function init() {    
    function textChange() {
        console.log("Button clicked");
        alert("It works!");
    }

    var submit = document.getElementById('send');
    submit.addEventListener('click', textChange);
    console.log("Loaded");
}
