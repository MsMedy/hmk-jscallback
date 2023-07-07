
//when user click submit, save userinput and start processing

let submit = document.getElementById('form');
form.addEventListener('submit', start);

const oldEl = document.getElementById("textDiv"); //input element location
let positiveHtml = "<div id='positiveMsg'> <h1 id='newMsg'>You are destined for     greatness!</h1> </div>";
let negativeHtml = "<div id='negativeMsg'> <h1 id='newMsg'>Hm..the future is murky..try again</h1> </div>";
let loadMsg = "<div id='removeMe'> <h1 id='newMsg'>Checking your fortune...</h1> </div>";


function start(event){

    event.preventDefault();
   
    if(document.getElementById("positiveMsg")){
        document.getElementById("positiveMsg").remove();
    }
    if(document.getElementById("negativeMsg")){
        document.getElementById("negativeMsg").remove();
    }

    var userInput = document.getElementById('text').value; //value of input
    nameFilter(userInput, timer);
}

//I used a callback to meet the req of the hmk assingment

function nameFilter(name2, callback){ //name2 = userInput and callback = timer(name3)
    // Prints "Checking your fortune...""
    oldEl.insertAdjacentHTML("afterend", loadMsg);
    var removeMeEl = document.getElementById("removeMe");
    callback(name2); // this is where I would call the timer function
}

//finds an M/doesn't find an M
function timer(name3){

    const characters = name3.split('');

    var removeMeEl = document.getElementById("removeMe");
        setTimeout(()=>{

            let limit = characters.length - 1;
                removeMeEl.remove();
            for(let i = 0; i < characters.length; i++){
                if(characters[i] == "m"){
                    //Prints 'You are destined for greatness!'
                    
                    oldEl.insertAdjacentHTML("afterend", positiveHtml);

                    break;
                }
                if(i == limit) {
                // Prints 'Hm..the future is murky..try again'
                oldEl.insertAdjacentHTML("afterend", negativeHtml);

                }
            }       

    }, 5000); // Adds a 5 second delay for drama
    }



