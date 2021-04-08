    //COLOR MIXIN
 
document.querySelector('button').onclick = function(){
    let a = (document.querySelector('#ColorOne').value);
    document.querySelector('#blend__input').innerHTML = a;
}

    //CALCULATOR
    
function plus(){
    let num1 = parseFloat(document.querySelector('.calculator__value').value);
    let num2 = parseFloat(document.querySelector('.calculator__value2').value);
        let result = num1 + num2;
        document.querySelector('.calculator__total').innerHTML = +result;
}

function minus(){
    let num1 = parseFloat(document.querySelector('.calculator__value').value);
    let num2 = parseFloat(document.querySelector('.calculator__value2').value);
        let result = num1 - num2;
        document.querySelector('.calculator__total').innerHTML = +result;
}

function multiply(){
    let num1 = parseFloat(document.querySelector('.calculator__value').value);
    let num2 = parseFloat(document.querySelector('.calculator__value2').value);
    let result = num1 * num2;
    document.querySelector('.calculator__total').innerHTML = +result;
}

function share(){
    let num1 = parseFloat(document.querySelector('.calculator__value').value);
    let num2 = parseFloat(document.querySelector('.calculator__value2').value);
        let result = num1 / num2;
        document.querySelector('.calculator__total').innerHTML = +result;  
}

        //SOUND SPEED

       
function speed(){
    let f =  parseFloat(document.querySelector('.speed__input').value);
    let d = f / 370;
    document.querySelector('.speed__total').innerHTML = d + ' секунд';
}


    //CREDIT FORM


let credit2 = parseFloat(document.querySelector('.credit__value2').value);


    document.querySelector('.credit_btn').onclick = function(){

        let credit3 = (document.querySelector('.credit__value3').value);
    document.querySelector('.credit__month').innerHTML = 'месяцев: ' + credit3;  

        let sum = parseInt(document.querySelector('.credit__value1').value);
        let percent = parseInt(document.querySelector('.credit__value2').value);
        let total1 = sum / 100;
        let total2 = total1 * percent;
        let total3 = total2 * credit3
        let AllSum = sum + total3
        
    document.querySelector('.credit__result').innerHTML = 'Переплата: ' + total3;



    document.querySelector('.credit__all').innerHTML = 'Всего: ' + AllSum

    }

    //SLIDER
const prewBtn = document.querySelector('.prew');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.gallery__images img');
let i = 0; 

    function next(){
        images[i].style.display = 'none';
        i++;
        if(i>=images.length){
            i = 0;
        }
        images[i].style.display = 'block'
    }

    function prew(){
        images[i].style.display = 'none';
        i--;
        if(i < 0){
            i = images.length -1;
        }
        images[i].style.display = 'block'
    }


    //MODE

    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
        document.querySelector('.mode').classList.toggle('dark');
    });

    //POPUP

const popupOpen = document.querySelector('.popup__window');
const modal1 = document.querySelector('.modal1');
const popupClose = document.querySelector('.popup__btn');

popupClose.addEventListener('click', () => {
    popupOpen.classList.add('popupNone')
})

modal1.addEventListener('click', () => {
    popupOpen.classList.remove('popupNone')
})

    //RANDOM


document.querySelector('.random__btn').onclick = function(){

    let random = Math.floor(Math.random() * 100 + 1) ;
    document.querySelector('.random__result').innerHTML = random
}

    //BARCODES

const barcodesResult = document.querySelector('.barcodes__result');

    document.querySelector('.barcodes__btn').onclick = function() {
    let barcodesInput = parseInt(document.querySelector('.barcodes__input').value);

    switch(barcodesInput){
        case 482:
            barcodesResult.innerHTML = 'Украина';
        break;

        case 460 || 469:
            barcodesResult.innerHTML = 'Россия';
        break;

        case 930 || 939:
            barcodesResult.innerHTML = 'Австралия';
        break;
        
        case 900 || 919:
            barcodesResult.innerHTML = 'Австрия';
        break;
        
        case 476:
            barcodesResult.innerHTML = 'Азербайджан';
        break;
        
        case 530:
            barcodesResult.innerHTML = 'Албания';
        break;
        
        case 613:
            barcodesResult.innerHTML = 'Алжыр';
        break;
        
        case 779:
            barcodesResult.innerHTML = 'Аргентина';
        break;
        
        case 485:
            barcodesResult.innerHTML = 'Армения';
        break;
        
        case 608:
            barcodesResult.innerHTML = 'Бахрейн';
        break;
        
        case 481:
            barcodesResult.innerHTML = 'Белоруссия';
        break;
        
        case 540 || 549:
            barcodesResult.innerHTML = 'Бельгия';
        break;
        
        case 380:
            barcodesResult.innerHTML = 'Болгария';
        break;
        
        case 777:
            barcodesResult.innerHTML = 'Боливия';
        break;
        
        case 387:
            barcodesResult.innerHTML = 'Босния и Герцеговина';
        break;
        
    default: 'undefined'
    
    }
}

    //CASINO

    let lessBtnWrapper = document.querySelector('.less__btn-wrapper');
    let lessBtn = document.querySelector('.less__btn');
    let moreBtnWrapper = document.querySelector('.more__btn-wrapper');
    let moreBtn = document.querySelector('.more__btn');
    let casinoResult = document.querySelector('.casino__result');
    let casinoData = document.querySelector('.casino__data');
    let casinoScore = document.querySelector('.casino__score').innerHTML;
  
    let casinoSum = 1000;
    let casinoRate = 100;
    let casinoInterest = casinoRate / 10;


    const  CasinoLogic1 = () => {
        let casinoRandom = Math.floor(Math.random() * 100 + 1) ;
        if(lessBtnWrapper){

            if(casinoRandom > 50){
                casinoSum += casinoRate;
                casinoResult.style.color = "#19FE34"
                casinoData.innerHTML += casinoRandom + '<br>'  
                casinoRate += casinoInterest
            }
            else{
                casinoSum -= casinoRate;
                casinoResult.style.color = "#EB0000"
                casinoData.innerHTML += casinoRandom + '<br>'
                casinoRate += casinoInterest
            }
        }
        document.querySelector('.casino__score').innerHTML = casinoSum;
        document.querySelector('.casino__result').innerHTML = casinoRandom;
        document.querySelector('.rate').innerHTML = casinoRate += casinoInterest
    }

    const  CasinoLogic2 = () => {
        let casinoRandom = Math.floor(Math.random() * 100 + 1) ;
        if(moreBtnWrapper){

            if(casinoRandom < 50){
                casinoSum += casinoRate;
                casinoResult.style.color = "#19FE34";
                casinoData.innerHTML += casinoRandom + '<br>';
                casinoRate += casinoInterest
            }
            else{
                casinoSum -= casinoRate;
                casinoResult.style.color = "#EB0000"
                casinoData.innerHTML += casinoRandom + '<br>'
                casinoRate += casinoInterest
            }
        }
        document.querySelector('.casino__score').innerHTML = casinoSum;
        document.querySelector('.casino__result').innerHTML = casinoRandom;
        document.querySelector('.rate').innerHTML = casinoRate += casinoInterest
    };

    moreBtnWrapper.addEventListener("click",CasinoLogic1);
    lessBtnWrapper.addEventListener("click",CasinoLogic2);

    //Open Close

    let openCloseBtn = document.querySelector('#openCloseBtn'); 
    let openCloseText = document.querySelector('.openClose__text');

    openCloseBtn.addEventListener('click',funcOpenClose );

    function funcOpenClose(){

     
    if(openCloseText.classList.contains('openClose__hidden')){
        openCloseBtn.textContent = 'Скрыть';
    }
    else{
        openCloseBtn.textContent = 'Показать';
    }

    openCloseText.classList.toggle('openClose__hidden');
    }

    //ACCORDEON

    const headers = document.querySelectorAll('.accordeon__title');

    headers.forEach(function(item){
        item.addEventListener('click', headerClick)

      
    });

    function headerClick(){
        this.nextElementSibling.classList.toggle('accordeon__block');
    }


    //ACCORDEON 2

 const accordeon = document.querySelectorAll('.accordeon__item');
 const accordeonContent2 = document.querySelectorAll('.accordeon__content2');

for(item of accordeon){
     item.addEventListener('click', function(){
        this.classList.toggle('.accordeon__active');
     })
}
