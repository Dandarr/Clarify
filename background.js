const type = new Array('textarea','input','div','h1','h2','h3','span','p','li','a');

const selectElement = document.querySelector('.typeDrop');

selectElement.addEventListener('change', (event) => { 
  let stylePoint  = document.createElement ('style');
  switch (selectElement) {
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
});
