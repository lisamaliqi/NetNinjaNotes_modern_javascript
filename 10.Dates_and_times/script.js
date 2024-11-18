//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            TIMES

const now = new Date();
//denna uppdateras varje gång man refreshar
//detta säger "we want a NEW object of this Date type"
console.log(typeof now);//-->object

console.log(now);//loggar dag i veckan, mån, dag, år, tidpunkt och tidsposition

//year, month day, tines
console.log('getFullYear: ', now.getFullYear());//-->getFullYear:  2024
console.log('getMonth: ', now.getMonth());//-->getMonth: 10 (tar index av månaden, börjar på 0)
console.log('getDate: ', now.getDate());//-->getDate:  18 (tar vilken dag det är)
console.log('getDay: ', now.getDay());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getHours: ', now.getHours());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getMinutes: ', now.getMinutes());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getSeconds: ', now.getSeconds());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)



//timestamps
console.log('timestamp: ', now.getTime());//sekunder sen 1 jan 1970


//date strings
console.log(now.toDateString());//-->Mon Nov 18 2024
console.log(now.toTimeString());//-->14:41:58 GMT+0100 (centraleuropeisk normaltid)
console.log(now.toLocaleString());//-->2024-11-18 14:42:37

console.log('------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            TIMESTAMPS












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            BUILDING A DIGITAL CLOCK












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            DATE-FNS












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
