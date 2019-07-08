/*

*/


function start(e) {
var name=[
{
    char:'楊',
    big5:'87A8',
    cns:'1-644E',
    unicode:'694A'
},
{
  char:'宗',
    big5:'A976',
    cns:'1-4C78',
    unicode:'5B97'
},
{
  char:'諭',
    big5:'BFD9',
    cns:'1-7243',
    unicode:'8AED'
}
];
var ele=document.getElementById("div1");

for(var i=0;i<3; i++){
 ele.innerHTML  += name[i].char;
 ele.innerHTML  += 'big5'
 ele.innerHTML  += name[i].big5;
 ele.innerHTML  += 'cns';
 ele.innerHTML  += name[i].cns;
 ele.innerHTML  += name[i].unicode;
 ele.innerHTML  += '<br>';

};
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );

