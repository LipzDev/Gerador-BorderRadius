// FUNÇÃO PARA MUDAR A FORMA DO QUADRADO

(function(){

  const inputRange = document.querySelectorAll('.radius input[type="range"]');
  const box = document.querySelector('.box');
  const showCode = document.querySelector('.showCode p');

  inputRange.forEach((item) => {
    item.addEventListener('click', (e) => {
        borderRadius(e.currentTarget, e.currentTarget.value);
    });
  });

  // MUDA A BORDA

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

// FUNÇÃO PARA MUDAR A COR

(function(){
  const inputColor = document.querySelector('.radius input[type="color"]');

  inputColor.addEventListener('input', function(item){
    let getColor = item.currentTarget.value;      
    localStorage.setItem('color', getColor);
    document.querySelector(':root').style = `--cor-principal: ${getColor}`;
  });

  document.querySelector(':root').style = `--cor-principal: ${localStorage.getItem('color')}`;
  inputColor.value = localStorage.getItem('color');
})();