/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//                      WHAT IS ASYNC JAVASCRIPT?
/*
Js är vanligtvis en synkronis kod, detta betyder att js kör en rad kod i taget
nackdel med detta  är att ifall man hämtar data från ett annat ställe, så kan det ta 2-3 sek
men koden som är under denna funktionen till att hämta data körs inte förrens all data är upphämtad
Async = starta något nu och slutför det senare
Medans "recuesten" görs så kan resterande kod köras igenom trotts att den första delen inte är färdig än
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                         ASYNC IN ACTION

console.log(1);
console.log(2);

//async in action
//börjar när man startar programmet, skickas senare 
//detta blockar inte 3 eller 4 pga async, koden fortsätter köras trotts att denna inte är klar 
setTimeout(() => {
    console.log('Callback function fired');
}, 2000);

console.log(3);
console.log(4);
console.log('---------------------------------------------------------------');

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                            WHAT ARE HTTP REQUESTS
//man gör detta för att hämta data från en annan server
//vi gör dessa förfrågningar till api endpoints


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                       MAKING A HTTP REQUEST

//skapa request object
//Detta är vad som kommer skicka en request till browsern
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);  Detta användes för att kolla status på våra requests, från 1-4
    //nu vill vi göra något när vår request är == 4 aka DONE
    if (request.readyState === 4) {
        // console.log(request.responseText);
        //får ut JSON data

        console.log('request1 working!');
        console.log('---------------------------------------------------------------');
    }
});
//request.readeState nummer förklarade:

// 0 == UNSENT
//     Client has been created, open() has not been called yet
// 1 == OPENED
//     open() has been called
// 2 == HEADERS_RECEIVED
//     send() has been called, and headers and status are available
// 3 == LOADING
//     downloading: responseText holds partial data
// 4 == DONE 
//     the operation is completed


//open() tar två argument, 1 är string och berättar vad för TYP av request vi vill göra 
//2:a argumentet är endpoint som vi vill ta data ifrån 
//vad för typ av request och vart vi ska ta detta ifrån 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//detta skapar möjligheten till att göra en request, men inte att man hämtar något
//för att hämta request behöver man göra såhär: 
request.send();

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                        STATUS CODE

//respons status kollar ifall det man försöker hämta är tillgängligt i princip, eller om det är några errors
const request2 = new XMLHttpRequest();

request2.addEventListener('readystatechange', () => {
    //om readystate är 4 och status är success
    if (request2.readyState === 4 && request2.status === 200) {
        console.log('request2 working!');
        console.log('---------------------------------------------------------------');
    
        //om ready state är 4 men status är allt annat än success (aka error)
    } else if (request2.readyState === 4) {
        console.log('could not fetch the data from request2');
        
    }
});

//testa lägg till s i slutet av länken så att det blir fel, du kommer få felkod
request2.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request2.send();


//status 200 == allt gick bra, har kommit tillbaka med data request
//status 404 == kan inte hitta källan vi försöker skicka till

//status inom 100 == infomrationresponses
//status inom 200 == success
//status inom 300 == redirection messages 
//status inom 400 == client error response, error in browser
//status inom 500 == server error resoinse, något fel på servern 

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                         ASYNC CODE CALLBACK

//Lägga detta i en funktion:
const getTodos = (callback) => {
    const request3 = new XMLHttpRequest();
    
    request3.addEventListener('readystatechange', () => {
        if (request3.readyState === 4 && request3.status === 200) {
            //undefined först pga ej error och därmed undefined
            //responseText i andra paramentern pga får in data
            callback(undefined, 'request3 working!');
        } else if (request3.readyState === 4) {
            //string i första pga här är error och därmed är det data i detta
            //undefined i andra eftersom att här saknas data
            callback('Could not fetch data from request3', undefined);
        }
    });
    
    //testa lägg till s i slutet av länken så att det blir fel, du kommer få felkod
    request3.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request3.send();
};

//anropar funktionen med en callback funktion som loggar ifall det är true eller false
getTodos((err, data) => {
    console.log('callback3 fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data, 'hej')
        console.log('---------------------------------------------------------------');
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            JSON Data

//vi vill göra om all data till objekt 
const getTodos2 = (callback) => {
    const request4 = new XMLHttpRequest();
    
    request4.addEventListener('readystatechange', () => {
        if (request4.readyState === 4 && request4.status === 200) {

            //parse tar in JSON strings och gör om det till js objects
            const data = JSON.parse(request4.responseText)
            callback(undefined, data);
        } else if (request4.readyState === 4) {
            callback('Could not fetch data from request3', undefined);
        }
    });

    //skapat en egen JSON fil som heter todos.JSON
    //att hämta data från egen json fil är snabbare än att hämta från en extern (de andra)
    request4.open('GET', 'todos.json');
    request4.send();
};

getTodos2((err, data) => {
    console.log('callback4 fired');
    if (err) {
        console.log(err);
    } else {
        //skickar ut en array med 5 objekt som jag har lagt in i todos.json filen
        console.log(data, 'request4 working!')
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//                      PARENTS, CHILDREN AND SIBLINGS







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENTS AND EVENT LISTENERS









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AND REMOVING ELEMENTS








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENT BUBBLING AND DELEGATION









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MORE EVENTS







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MAKING A POPUP
