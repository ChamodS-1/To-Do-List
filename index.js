const getInput  = document.querySelector('input');
const countSet  = document.querySelector('.span1');
const listSet  = document.querySelector('.span2');
const button  = document.querySelector('.but');
const clear  = document.querySelector('.but1');
const clearAlllistSet  = document.querySelector('.but3');
let unOrderList  = document.querySelector('ul');

let emptyArray =[];
let count;
let lengthArray;
//let countnew =count.trim();

getInput.addEventListener('input',getcount);
button.addEventListener('click',setLists);
clear.addEventListener('click',clearAll);
clearAlllistSet.addEventListener('click',clearAllLists);

function getcount(event){

count = event.target.value;
let cuntNumber = 50-count.length;
countSet.textContent = cuntNumber;
console.log(count);

}

function setLists(){
    
    clearAlllistSet.style.display='block';

    if(!count){
        console.log('erroe');
        let newList = document.createElement('li');
        newList.textContent ="enter your To Do lists!";
        newList.classList.add('li1');
       unOrderList.append(newList);
        return;

    }
  
    let textContent = getInput.value;
    emptyArray.push(textContent);

    createLists();
       
}

function createLists(){
    lengthArray = emptyArray.length;

    if(lengthArray>4){

        let newList = document.createElement('li');
        newList.textContent ="You have maxinum To dos!";
        newList.classList.add('li1');
       unOrderList.append(newList);
        return;

    }
   

    
    listSet.textContent=lengthArray;
    
    unOrderList.textContent=""
    emptyArray.forEach(function(item){


        if(lengthArray>1){

            let newList = document.createElement('li');
            console.log(item);
            newList.textContent =item;
            newList.classList.add('li');
           unOrderList.append(newList);
           console.log(emptyArray);

        }
        else{

            let newList = document.createElement('li');
            console.log(item);
            newList.textContent =item;
            newList.classList.add('li');
           unOrderList.append(newList);
        }

    })
   
}

function clearAll(){
    getInput.value="";
    countSet.textContent="50";
   
}

function clearAllLists(){

    const allLists = document.querySelectorAll('li');
    for(const key of allLists){

        key.remove();
    }
   
   emptyArray =[];
   listSet.textContent='0';
   getInput.value="";
   countSet.textContent="50";

   clearAlllistSet.style.display='none';
}


