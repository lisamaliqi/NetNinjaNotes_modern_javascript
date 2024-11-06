//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      INTERACTING WITH A WEB PAGE
/*
Man kan göra massor av saker, ex 
    -Lägga till content på en web page
    -Ändra stil på CSS
    -Reagerar på user events, ex ett klick
    -Coola effekter så som en pop-up
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                         THE QUERY SELECTOR

//bästa sättet att ta ett element från the DOM, alltså the document (html/css)
const para = document.querySelector('p');//går upp till ner i DOM, tar första 
//p-taggen den hittar, alltså den med "hello world"
console.log(para);//--> <p>Hello world</p>

const para2 = document.querySelector('.error');//.=class, tar första element med class=error
console.log(para2);//--> <p class="error">This is an error message</p>

const para3 = document.querySelector('div.error');//letar efter första div med class=error
console.log(para3);//--> <div class="error">This is another error</div>

const para4 = document.querySelector('body > h1');//tar ut första h1 elementet i body
console.log(para4);//--> <h1>The document object method</h1>


const paras = document.querySelectorAll('p');
console.log(paras);//blir en nodeList, ser ut som en array men kan ej användas som en array
console.log(paras[0]);//--> <p>Hello world</p>    tar ut första p i index 0

paras.forEach(para => {
    console.log(para);
});//-->nu visar den alla p elements i consolen

const errors = document.querySelectorAll('.error');
console.log(errors);//-->nodeList för alla element med classen error

console.log('--------------------------------------------');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            OTHER WAYS TO QUERY THE DOM
//get element by ID
const title = document.getElementById('page-title');
console.log(title);//elementet som har id page-title


//get elements by class name
const errors2 = document.getElementsByClassName('error');
console.log(errors2);//får ut de element som har class-name error
//man får ut detta som en HTMLcollection, ganska lik node list men man kan ej använda forEach metoden


//get element by tag name
const allPara = document.getElementsByTagName('p');
console.log(allPara);//får ut de element som har tag name p
console.log(allPara[1]);//får ut elementet som ligger på index 1 i alla paragrafer

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                        ADDING AND CHANGING PAGE CONTENT

// const para = document.querySelector('p');
console.log(para.innerText);//för att få ut innehållet i taggen, alltså "hello world"

para.innerText = 'I am AWESOME';//byter vad som står i webbsidan
para.innerText += ' and you are NOT';//tar det som är i inner text och lägger till (+) det man skriver


// const paras = document.querySelectorAll('p');
paras.forEach(para => { 
    console.log(para.innerText);//loggar allt innehåll i p-taggar 
    para.innerText += ' new text';//lägger till "new text" bakom alla p-taggar i dokumentet
})


const content = document.querySelector('.content');
console.log(content.innerHTML);//se vad för HTML som är inne i class=content 
content.innerHTML = '<h2>Make this a new h2!</h2>';//har ändrat html värdet till h2 

const people = ['Mario', 'Luigi', 'Yoshi'];
people.forEach (person => {
    content.innerHTML += `<p>${person}</p>`;//en lista från arrayn people syns i dokumentet
});

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                        GETTING AND SETTING ATTRIBUTES

const link = document.querySelector('a');

console.log(link.getAttribute('href'));//få tag på en attribut 
link.setAttribute('href', 'https://www.aftonbladet.se/');//1.vilket attribut vill du ändra? 2.Vad vill du ändra den till?
//tar alltså det som är i href och gör om det till en länk till aftonbladet
link.innerText = 'Länk till aftonbladet';//har nu ändrat text till länken


const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));//-->error          får ut classen på den taggen
mssg.setAttribute('class', 'sucess');//byter värdet på classen
console.log(mssg.getAttribute('class'));//-->sucess         får ut classen på den taggen

//skapa en attribut 
mssg.setAttribute('style', 'color: green;');//gör om texten till grön, skapar en ny attribut och ger det ett värde

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ADDING AND REMOVING STYLES

const titleStyle = document.querySelector('h2');
// titleStyle.setAttribute('style', 'margin: 50px');//detta skriver över tidigare style

console.log(titleStyle.style);//tar fram all css styles
console.log(titleStyle.style.color);//ta fram specifikt vilket värde attributen color har 
titleStyle.style.margin = '50px';//detta lägger till en ny property samtidigt som man behåller gamla
titleStyle.style.color = 'red';//ändrar värdet på color propertyn
titleStyle.style.fontSize = '60px';//ändrar fontsize till 60px (måste skriva med camelCase, ej font-size)
titleStyle.style.margin = '';//tar bort margin, sätter man string som empty så tar det bort värdet

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

