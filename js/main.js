// Array di immagini
const imagesArray = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];

const titleArray = ['Svezia','Svizzera','Gran Bretagna','Germania','Paradise'];

const textArray = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
'Lorem ipsum',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',]


// popolo lo slider grande con le immagini in maniera dinamica

let mainBox = '';

for (let i = 0; i < imagesArray.length; i++) {
    mainBox +=`
    <div class="main-box">
        <img src="${imagesArray[i]}" alt="slider">
    </div>`;
    mainBox += titleArray[i];
    mainBox += textArray [i]; 
}

// popolo lo slider grande con le immagini in maniera dinamica
const sliderMain = document.querySelector('.slider-main');
sliderMain.innerHTML = mainBox;

// seleziono primo elemento
const item = document.querySelector('.main-box');

// do al primo elemento la classe active
item.className = 'main-box active'







