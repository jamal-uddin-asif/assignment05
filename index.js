// to get id 
function getById (id){
   let getId =  document.getElementById(id)
   return getId;
}


// heart count section 
const heartButtons = document.getElementsByClassName('btn-heart')

for(let heartButton of heartButtons){
    heartButton.addEventListener('click',function () {
       const heartCount = getById('heart-count')
       const heartCountInnetText = parseInt(heartCount.innerText)
       const update = heartCountInnetText + 1;
       getById('heart-count').innerText = update
    })
}



// call button functionality 
// const callButtons = document.getElementsByClassName('btn-call')
// for(let button of callButtons){
//     button.addEventListener('click',function(){
//         console.log(button)   
//     })
// }


let data = []



getById('btn-call-energency').addEventListener('click',function(){
      let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }
    const nameNum = {
        name:'National Emergency Number',
        Number:999,
    }
    
   data.push(nameNum)
     for(let val of data){
        
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)
        
        data.shift()

        return
    }
   
})
getById('btn-call-police').addEventListener('click',function(){
    
    let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }
    const nameNum = {
        name:'Police Helpline Number',
        Number:999,
    }
    data.push(nameNum)
    for(let val of data){
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)
         data.shift()
        return
    }


})
getById('btn-call-fire-ser').addEventListener('click',function(){
      let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }
    const nameNum = {
        name:'Fire Service Number',
        Number:999,
    }
    data.push(nameNum)
    for(let val of data){
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)

        data.shift()
        return
    }
})
getById('btn-call-ambulance').addEventListener('click',function(){
      let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }
     const nameNum = {
        name:'Ambulance Service',
        Number:'1994-999999',
    }
    data.push(nameNum)
     for(let val of data){
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)

        data.shift()
        return
    }
})
getById('btn-call-brac-help').addEventListener('click',function(){
      let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }
     const nameNum = {
        name:'Brac Helpline',
        Number:16445,
    }
    data.push(nameNum)
     for(let val of data){
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)

        data.shift()
        return
    }
})
getById('btn-call-BD-railway').addEventListener('click',function(){
      let availavalCoin = parseInt(getById('coin-count').innerText)
    if(availavalCoin <= 0){
        alert("❌You don't have enough coins.You will need at least 20 coins to make the call.")
        return
    }

    const nameNum = {
        name:'Bangladesh Railway Helpline',
        Number:163,
    }
    data.push(nameNum)
     for(let val of data){
        alert(`📞Calling ${val.name} ${val.Number}`)
        let availavalCoin = parseInt(getById('coin-count').innerText)
        let update = availavalCoin - 20;
        getById('coin-count').innerText = update

        const div = document.createElement('div')
       
        div.innerHTML = `
        <div class="flex justify-between items-center mb-2 p-3 bg-[#fafafa] rounded-lg ">
          <div>
            <h2 class="font-bold"> ${val.name} </h2>
            <p>${val.Number}</p>
          </div>

          <p>${new Date().toLocaleTimeString()}</p>
        </div>
        `

        let callHistoryCard = document.getElementById('call-history-card')
        callHistoryCard.appendChild(div)

        

        data.shift()
        return
    }

})



// clear button functionality 
getById('btn-clear').addEventListener('click',
    function(){
        console.log('clear btn working')

        getById('call-history-card').innerHTML = ''
    }
)


// Copy count functionality 
const copyButtons = document.getElementsByClassName('copy-buttons')

for(let button of copyButtons){
  button.addEventListener('click',function(){
    let copyCount = getById('count-copy').innerText
    let copyCountNumber = parseInt(copyCount)
    let update = copyCountNumber + 1;
    document.getElementById('count-copy').innerText = update

    // To copy number
    let cards = button.closest('.cards')
    const text = cards.querySelector('.copy-number').innerText
    navigator.clipboard.writeText(text)
    
    // to alert 
    alert('The number has been copied: '+text)

  })
}

