(function(){

  const inputRange = document.querySelectorAll('.radius input[type="range"]');
  const box = document.querySelector('.box');
  const showCode = document.querySelector('.showCode p');

  inputRange.forEach((item) => {
    item.addEventListener('click', (e) => {
        borderRadius(e.currentTarget, e.currentTarget.value);
    });
  });

  function borderRadius(range, percent){

    switch(range.name){
      case 'topLeft': 
        box.style.borderTopLeftRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
      break;

      case 'bottomLeft': 
        box.style.borderBottomLeftRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
      break;

      case 'topRight': 
        box.style.borderTopRightRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
      break;

      case 'bottomRight': 
        box.style.borderBottomRightRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
      break;

    }
  }

})();