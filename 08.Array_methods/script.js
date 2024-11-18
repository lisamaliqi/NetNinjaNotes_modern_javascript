//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                            FILTER METHOD
//man kan använda filter method ifall man ex vill filterar ut bara 20 poäng i scores eller mer
//metoden är non-destructive, alltså förstör den inte original-arayn

const scores = [10, 30, 15, 25, 50, 40, 5];
console.log(scores);

//loopar genom hela arrayen
//går igenom den, steg för steg 
//innehåller en callback function som går igenom för varje item i arrayn
const filterdScores = scores.filter((score) => {
    return score > 20; //reutrn true =  behåll item          return false = ta bort item
});

console.log(filterdScores);//nya arrayen med filtrerade värden 


const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];
console.log(users);

//filtrerar baserat på ett värde i objekt 
const premiumUsers = users.filter((user) => {
    return user.premium;//jag vill ta ut alla som har true i sin premium
});

console.log(premiumUsers);

console.log('-----------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MAP METHOD
//tar en array och ger den ett uppdaterat värde
//detta är en non-destructive method, men med en callback function kan man göra den destructive
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
console.log(prices);

//har också en callback function
//här vill jag ta priserna i original-arrayn och halvera dem med 2
const salePrices = prices.map((price) => {
    return price / 2
});

//man kan göra det kortare:
// const salePrices = prices.map(price => return price / 2 );

//här får jag ut det nya beloppet
console.log(salePrices);


const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red hells', price: 50},
];
console.log(products);

//skapa en ny array som visar halva priset på värden över 30, resten ska return som vanligt
const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return {name: product.name, prices:product.price / 2}
    } else {
        return product;
    }
});
console.log(saleProducts);

console.log('-----------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            REDUCE METHOD
// retunerar inte nödvändigtvis en array, kan också retunera ett innehåll i arrayn
// const scores = [10, 30, 15, 25, 50, 40, 5];
console.log(scores);

//jag vill räkna hur många tal som är lika med eller mer än 30 i arrayen scores
const result = scores.reduce((acc, curr) => {//acc = antal tal som är >= 30, curr är current tal vi går igenom
    if (curr >= 30) {//om talet i arrayen vi går igenom är >= 30:
        acc++;       //lägg till +1 i acc
    } 
    return acc; //retunera sedan totala acc
}, 0);//acc = 0         startvärdet på acc är 0

console.log(result);


const playerScores = [
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 60},
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 60},
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 60},
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 60},
    {player: 'shaun', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'yoshi', score: 60},
];
console.log(playerScores);

//få ut totala värdet för de omgångarna yoshi kört
const yoshiTotal = playerScores.reduce((acc, curr) => {
    if(curr.player === 'yoshi'){ //om den som spelar har player värde 'yoshi':
        acc += curr.score; //ska du lägga till scoren på den current item du är inne på till acc
    }
    return acc; //retunera sedan totala acc
}, 0);//startvärde på acc är 0

console.log(yoshiTotal);

console.log('-----------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            FIND METHOD
//find går igenom och hittar den första item som passar callback funktionen
// const scores = [10, 30, 15, 25, 50, 40, 5];
console.log(scores);

//logga ut FÖRSTA värdet i arrayen som har ett värde som är över 25
const firstHighScore = scores.find((score) => {
    return score > 25;
});

//går att göra kortare: 
// const firstHighScore = scores.find(score => score > 25;);

console.log(firstHighScore);

console.log('-----------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

