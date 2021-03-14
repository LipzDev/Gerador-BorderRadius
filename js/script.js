(function(){

  const inputRange = document.querySelectorAll('.radius input[type="range"]');
  const boxRed = document.querySelector('.box');
  const boxWhite = document.querySelector('.showCode p');

  inputRange.forEach((item) => {
    item.addEventListener('click', (e) => {
        borderRadius(e.currentTarget, e.currentTarget.value);
    });
  });

  function borderRadius(range, percent){

    switch(range.name){
      case 'topLeft': 
        boxRed.style.borderTopLeftRadius = percent+"%";
        boxWhite.innerText = boxRed.getAttribute('style');
      break;

      case 'bottomLeft': 
        boxRed.style.borderBottomLeftRadius = percent+"%";
        boxWhite.innerText = boxRed.getAttribute('style');
      break;

      case 'topRight': 
        boxRed.style.borderTopRightRadius = percent+"%";
        boxWhite.innerText = boxRed.getAttribute('style');
      break;

      case 'bottomRight': 
        boxRed.style.borderBottomRightRadius = percent+"%";
        boxWhite.innerText = boxRed.getAttribute('style');
      break;

    }
  }

})();