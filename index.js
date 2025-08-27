// to get id 
function getById (id){
   let getId =  document.getElementById(id)
   return getId;
}


// heart count section 
const heartButtons = document.getElementsByClassName('btn-heart')
console.log(heartButtons)

for(let heartButton of heartButtons){
    heartButton.addEventListener('click',function () {
       const heartCount = getById('heart-count')
       const heartCountInnetText = parseInt(heartCount.innerText)
       const update = heartCountInnetText + 1;
       getById('heart-count').innerText = update
    })
}



// call button functionality 
const callButton = document.getElementsByClassName('btn-call')
console.log(callButton)