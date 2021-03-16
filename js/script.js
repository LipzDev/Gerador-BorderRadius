// FUNÇÃO PARA MUDAR A FORMA DO QUADRADO

(function(){

  const inputRange = document.querySelectorAll('.radius input[type="range"]');
  let box = document.querySelector('.box');
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
        localStorage.setItem('rangeTopLeft', percent);
      break;

      case 'bottomLeft': 
        box.style.borderBottomLeftRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
        localStorage.setItem('rangeBottomLeft', percent);
      break;

      case 'topRight': 
        box.style.borderTopRightRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
        localStorage.setItem('rangeTopRight', percent);
      break;

      case 'bottomRight': 
        box.style.borderBottomRightRadius = percent+"%";
        showCode.innerText = box.getAttribute('style');
        localStorage.setItem('rangeBottomRight', percent);       
      break;
    }
    
    // SALVANDO NO LOCALSTORAGE

    localStorage.setItem('border', box.getAttribute('style'));      
  }
   
  // PUXANDO INFORMAÇÕES DO LOCALSTORAGE

  box.style = localStorage.getItem('border');
  
})();

// FUNÇÃO PARA MUDAR A COR

(function(){
  const inputColor = document.querySelector('.radius input[type="color"]');

  inputColor.addEventListener('input', function(item){
    let getColor = item.currentTarget.value;      
    localStorage.setItem('color', getColor);
    document.querySelector(':root').style = `--cor-principal: ${getColor}`;
  });

  if(localStorage.getItem('color') !== null){
    document.querySelector(':root').style = `--cor-principal: ${localStorage.getItem('color')}`;
    inputColor.value = localStorage.getItem('color');
  }
  
})();