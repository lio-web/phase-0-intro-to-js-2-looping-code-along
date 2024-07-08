const names = ["Guadalupe", "Ollie", "Aki"]
const messages = writeCards(names, birthday);
for (const message of messages) {
  console.log(message);
}
function writeCards(names,birthday){
    const thankYouMessage=[];
    for (let i=0; i<names.length; i++){
        const message= `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    thankYouMessage.push(message);
}
return thankYouMessage;
}

function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; 
    }
  } 
