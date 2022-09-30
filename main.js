



// Hämtar in referens till listan
const listan = document.querySelector("#list");

const laggTillBtn = document.querySelector("#laggTillBtn");


const returInfo = document.querySelector("#info");

const avklarat = document.querySelector("#avklarat");
let avklaradeUppgifter = 0;

// Kika på det där med array, både lägga till och ta bort
const todoArray = [];


laggTillBtn.addEventListener("click", function(){

   
    let nyUppgift = document.querySelector("#nyUppgift");
    let nySakAttGora = nyUppgift.value;                         // Tar in det som matats in i fältet
    
    //todoArray.push(nySakAttGora);
    
    if (nySakAttGora.length == 0){
        returInfo.innerHTML = "Vänligen ange en uppgift, mothertrucker :)";
        return;
    } else {
        let sakAttGora = document.createElement('li');
        const sakAttGoraLabel = document.createElement('span');
    
        listan.appendChild(sakAttGora);                             // Lägger till en rad i listan
        sakAttGoraLabel.innerText = nySakAttGora; 
        sakAttGora.appendChild(sakAttGoraLabel);

        // Detta funkar också, men gammal standard?:
        //sakAttGoraLabel.classList.add("completed");


        
        sakAttGoraLabel.addEventListener('click', function(){
        if (sakAttGora.getAttribute('class') == 'completed') {
        sakAttGora.setAttribute('class', '');
        avklaradeUppgifter--;
        }
        else {
        sakAttGora.setAttribute('class', 'completed');
        avklaradeUppgifter++;

        //Hur gör jag överstrykning här?
        //sakAttGoraLabel.innerHTML.strike;
        
        }

        /*// Tillagt 29/9
        const todoObject = {};
        todoObject.todo = nyUppgift;
        //todoObject.status = "ej avklarad";
        todoArray.push(todoObject);*/

        avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`;

        // Lägga till papperskorg:
        // Font Awesome?
        // Emojis, kolla w3schools: &#1F5D1 (papperskorg)
      
    });




        //Tömmer inmatningsfältet och infofältet
        nyUppgift.value = "";
        returInfo.innerHTML = "";
    }


  });

  
 









/*function addToList (){
    
    let nyUppgift = document.getElementById("nyUppgift");
    let newListElement = document.getElementById("list");
    
    newListElement.addToList = nyUppgift;
    newListElement.innerHTML = newListElement;

    //newListElement = document.createElement(nyUppgift);
    //li.appendChild(document.createTextNode("Element 4"));

    
    //document.getElementById("list").innerHTML = "Fakk";
    

}*/