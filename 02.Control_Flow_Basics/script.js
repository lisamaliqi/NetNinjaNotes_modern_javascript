//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                FOR LOOPS
/*for loopen är uppdelad i 3 delar i ()
1. let i = 0;
    -initialization variable 
    -vi skapar en variabel som heter i och ger den värdet 0
    -lite som en klocka, bestämmer hur många gånger vi går igenom loopen
2. i < 5;
    -condition
    -om det som visas är true så kommer det som är mellan {} att utföras
    -om i är mindre än 5 så utförs koden mellan {}
3. i++
    -final expression
    -utförs varje gång vid slutet av koden i {}
    -varje gång coden utförs så ska vi ta i och lägga till +1
*/
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);//-->denna kod visar in loop: 0 fram till 4
}
console.log('loop finished');//-->loop finished, denna syns när hela loopen är klar


const names = ['lisa', 'tova', 'fanny'];

for(let i = 0; i < names.length; i++){
    console.log(i);//-->visar 0-2
}

for(let i = 0; i < names.length; i++){
    console.log(names[i]);//-->visar namnen i ordning
}

for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);//--><div>fanny</div> för varje namn, från lisa till fanny
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                               WHILE LOOPS
//while loop liknar for loops, det loopar genom cod ett visst antal gånger. 
//enda skillnaden är egentligen bara hur vi skriver dom

//for loop
for(let i = 0; i < 5; i++){
    console.log('In loop: ', i);
} 

//while loop
let i = 0;
while(i < 5){
    console.log('In loop: ', i);
    i++;
}
/*
Problemet med while är att "i" inte är identifierat i koden, utan det måste ha blivit skapat sedan tidigare
*/

//const names = ['lisa', 'tova', 'fanny'];
i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                DO WHILE LOOPS
//för att låta en kod gå igenom en gång även fast conditions kanske inte är true
i = 5;
do{
    console.log('val of i is: ', i);
    i++;
} while (i < 5);//gör koden över först, om i sedan är mindre än 5 så gör du den igen

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                             IF STATEMENT
const age = 23;
if(age > 20){//om det som finns inne i () stämmer då ska det inom {} utföras
    console.log('You are over 20 years old');//-->You are over 20 years old
}

const ninjas =['lisa', 'tova', 'alicia', 'fanny'];
if(ninjas.length > 4){
    console.log('That is a lot of ninjas');//length är inte mer än 4, därav ser vi ej texten
}

const password = 'pass';
if(password.length >= 8){
    console.log('That password is long enough');//syns ej pga pass är för kort
}

const password1 = 'password';
if(password1.length >= 8){
    console.log('That password is long enough, yaaaay');//syns pga pass är tillräckligt lång
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ELSE AND IF ELSE
const password2 = 'pass';
if(password2.length >= 8){
    console.log('That password is long enough');
} else {
    console.log('That password is too short');//-->detta syns pga mindre än 8 i length
}


const password3 = 'passwofnknrkewsl';
if(password3.length >= 12){
    console.log('That password is mighty strong');//-->visas pga har mer än 12 karaktärer
} else if(password3.length >= 8){
    console.log('That password is long enough');
} else {
    console.log('That password is too short');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                LOGICAL OPERATORS 
//or = || 
//and = &&
const pswrd ='p@ss';

if(pswrd.length >= 12 && pswrd.includes('@')){//innehåller det min 12 karaktärer OCH inkluderas karaktären '@' (båda måste vara true)
    console.log('that password is mighty strong');
} else if(pswrd.length >= 8 || pswrd.includes('@')){//innehåller det min 8 karaktärer ELLER inkluderas karaktären '@' (EN måste vara true)
    console.log('that password is strong enough');
} else {
    console.log('that password is not strong enough');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                LOGICAL NOT (!)
//När vi vill att en kod ska gå ingeom om den är false 
//om jag sätter ! framför true = false, om jag sätter den framför false = true

console.log(true);//-->true
console.log(!false);//-->true


let user = false;

if(!user){ //gör user till true
    console.log('You must be logged in to continue.');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                               BREAK & CONTINUE
const score = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < score.length; i++){
    
    if(score[i] === 0){//om du får 0 så kommer den att "hoppa ut" ur koden och börja om igen, alltså visas inte 0 som ett alternativ
        continue;
    }

    console.log('Your score: ', score[i]);

    if(score[i] === 100){//när du når 100 poaäng så bryts loopen, innan det bryts så visas loggen nedan
        console.log('Congratulations, you got the top score');
        break;
    }
}
/*Hela denna koden visar:
Your score:  50
Your score:  25
Your score:  30
Your score:  100
Congratulations, you got the top score
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                SWITCH STATEMENT
//när man ska kolla flera värden för en variabel
//if statement
//detta är okej, men det kan ibland bli lite för mycket 
/* if(grade === 'A'){

} else if(grade === 'B'){

} else if(grade === 'C'){

} else if(grade === 'D'){

} else if(grade === 'E'){

} else {

} */

const grade = 'D';

//switch
//switch använder strict equalitu, alltså ===, det betyder att string och number är olika 
switch(grade){
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got an B');
        break;
    case 'C':
        console.log('You got an C');
        break;
    case 'D':
        console.log('You got an D');//detta kommer visas upp
        break;//break ska inkluderas, annars kommer all kod efter (allså 'E' och 'default' också att visas)
    case 'E':
        console.log('You got an E');
        break;
    default:
        console.log('Not a valid grade');
        break;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                BLOCK SCOPE
//allt detta gäller för variablarna let OCH const
let agee = 30;//global scope
//alltså om man lägger variabeln i roten av dokumentet, inte i en scope (ex if statement)
//kan användas vart man än vill i dokumentet

if(true){
    // agee = 40; -->detta byter värdet på både inne i code block och utanför code block

    //local scope
    let agee = 40;//detta ändrar värdet i code block men inte utanför code block
    let myName = 'Lisa';

    console.log('Inside 1st code block: ', agee, myName);

    if(true){
        //ny local scope, denna hade inte ändrat värdet på local scope 1, utan bara i local scope 2. 
        // let agee = 50;
        console.log('Inside 2nd code block: ', agee);//--> 40 i agee
        //denna statement är innuti first code block, därav tar den från the local scope
    }
}

console.log('Outside code block: ', agee);//-->myName is not defined
//local scopes är inte tillgängliga utanför code block
