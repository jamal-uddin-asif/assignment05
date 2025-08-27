// to get id 
function getById (id){
   let getId =  document.getElementById(id)
   return getId;
}


// heart count section 
const heartButtons = document.getElementsByClassName('btn-heart')
// console.log(heartButtons)

for(let heartButton of heartButtons){
    heartButton.addEventListener('click',function () {
       const heartCount = getById('heart-count')
       const heartCountInnetText = parseInt(heartCount.innerText)
       const update = heartCountInnetText + 1;
       getById('heart-count').innerText = update
    })
}



// call button functionality 
const callButtons = document.getElementsByClassName('btn-call')
// console.log(callButtons)

for(let button of callButtons){
    button.addEventListener('click',function(){
        console.log(button)
       
    })
}


const data = []



getById('btn-call-energency').addEventListener('click',function(){
    const nameNum = {
        name:'National Emergency Number',
        Number:999,
    }
   data.push(nameNum)
    console.log(data)
   
})
getById('btn-call-police').addEventListener('click',function(){
    let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert('you dont have coin')
        return
    }
    const nameNum = {
        name:'Police Helpline Number',
        Number:999,
    }
    data.push(nameNum)
    for(let val of data){
        alert(`calling ${val.name} number is ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        console.log(val)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)

        return
    }


})
getById('btn-call-fire-ser').addEventListener('click',function(){
    const nameNum = {
        name:'Fire Service Number',
        Number:999,
    }
    data.push(nameNum)
    console.log(data)
})
getById('btn-call-ambulance').addEventListener('click',function(){
     const nameNum = {
        name:'Ambulance Service',
        Number:1994-999999,
    }
    data.push(nameNum)
    console.log(data)
})
getById('btn-call-brac-help').addEventListener('click',function(){
     const nameNum = {
        name:'Brac Helpline',
        Number:16445,
    }
    data.push(nameNum)
    console.log(data)
})
getById('btn-call-BD-railway').addEventListener('click',function(){
    const nameNum = {
        name:'Bangladesh Railway Helpline',
        Number:163,
    }
    data.push(nameNum)
    console.log(data)

})