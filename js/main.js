const input = document.querySelector('.textIn')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const quadroBranco = document.querySelector('#lateral')


// Criptografar e descriptografar
function cripto() {
    const textIn = input.value;
    const criptografado = textIn
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('a', 'ai')
      .replaceAll('o', 'ober')
      .replaceAll('u', 'ufat');
  
    quadroBranco.innerHTML = '';
  
    const conteudoDiv = document.createElement('div');
    conteudoDiv.innerHTML = criptografado;
    conteudoDiv.classList.add('conteudo');
    quadroBranco.appendChild(conteudoDiv);
  
    const divCopiar = document.createElement('div');
    divCopiar.classList.add('div-copiar');
  
    const btnCopiar = document.createElement('button');
    btnCopiar.innerHTML = 'Copiar';
    btnCopiar.classList.add('btn3');
    btnCopiar.addEventListener('click', () => {
      const range = document.createRange();
      range.selectNodeContents(conteudoDiv);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    });
  
    divCopiar.appendChild(btnCopiar);
    quadroBranco.appendChild(divCopiar);
  
    quadroBranco.classList.add('x');
  }
  

let criptografado = ''

function descripto() {
    const textIn = input.value;
    const descriptografado = textIn
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ai', 'a')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u');
  
    quadroBranco.innerHTML = '';
  
    const conteudoDiv = document.createElement('div');
    conteudoDiv.innerHTML = descriptografado;
    conteudoDiv.classList.add('conteudo');
    quadroBranco.appendChild(conteudoDiv);
  
    const divCopiar = document.createElement('div');
    divCopiar.classList.add('div-copiar');
  
    const btnCopiar = document.createElement('button');
    btnCopiar.innerHTML = 'Copiar';
    btnCopiar.classList.add('btn3');
    btnCopiar.addEventListener('click', () => {
      const range = document.createRange();
      range.selectNodeContents(conteudoDiv);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    });
  
    divCopiar.appendChild(btnCopiar);
    quadroBranco.appendChild(divCopiar);
  
    quadroBranco.classList.add('x');
  }
  

//Eventos botões
button1.addEventListener('click', cripto)
button2.addEventListener('click', descripto)
