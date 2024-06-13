const tablePeso = document.getElementById('peso');
const tableAltura  = document.getElementById('altura');
const tableIMC = document.getElementById('imc');
const tableResultado = document.getElementById('resultado');

const telaResult = document.getElementById('tableResult');
const telaList = document.getElementById('tableList');


function pegarValores() {
  //Pegando o valor da Altura
   const Altura = document.getElementById('inputWidht').value;
   //Pegando o valor do peso
   const Peso = document.getElementById('inputPeso').value;

   if(Altura == "" || Peso == ""){
    alert("Preencha todos os campos!!!")
     return
   }
   calcular(Altura, Peso)
   
   const tela = document.querySelector('.sim');
  
  if(tela.classList.contains('open')){
    tela.classList.remove('open')
  }else{
    tela.classList.add('open')
  }
}

   
  function calcular(Altura, Peso){
   //Transformando a string em um number
   const valorAltura = parseFloat(Altura).toFixed(2)
   const valorPeso = parseFloat(Peso)


   //Calculando o IMC
   const IMC = valorPeso / (valorAltura * valorAltura);

   //Pemitindo q somente um numero depois da vírgula apareça
   const valorIMC = IMC.toFixed(2);
   
   pasarValores(valorAltura, valorPeso, valorIMC)
}

function pasarValores(valorPeso, valorAltura, valorIMC){
  console.log(valorIMC)
  
  if(valorIMC <= 17){
    tableResultado.innerHTML = "Muito abaixo do Peso";
  }else if(valorIMC >= 17 && valorIMC <= 18.4){
    tableResultado.innerHTML = "Abaixo do Peso";
  }else if(valorIMC > 18.4 && valorIMC <= 24.9 ){
    tableResultado.innerHTML = "Peso normal";
  }else if(valorIMC > 25 && valorIMC <= 29.5){
    tableResultado.innerHTML = "Acima do peso";
  }else if(valorIMC > 30 && valorIMC <= 34.9){
    tableResultado.innerHTML = "Obesidade grau I";
  }else if(valorIMC > 35 && valorIMC <= 40){
    tableResultado.innerHTML = "Obesidade grau II";
  }else{
    tableResultado.innerHTML = "Obesidade grau III"
  }
    
  

  
  tablePeso.innerHTML = valorPeso
  tableAltura.innerHTML = valorAltura
  tableIMC.innerHTML = valorIMC
  
  telaResult.style.display = "block"
  telaList.style.display = "block"
}