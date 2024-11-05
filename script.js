// axios fetch 

// fetch('http://numbersapi.com/2')
//     .then(response=>response.text())
//     .then(data=>console.log(data))






const Loader = document.querySelector('.lds-spinner')
const Text = document.querySelector('h1')



Loader.style.display = 'none'

const getNumbersData = () => {
    let number = Math.floor(Math.random()*10)
    Loader.style.display = 'block'

    fetch(`http://numbersapi.com/${number}`)
        .then(response=>response.text())
        .then(data=>{
           if(data){
            Text.innerHTML = data;
            Loader.style.display = 'none'
           }
        })
}    
















// 1-qadam 
// fetch ichiga url     

// 2-qadam 
// response to => json || text

// 3-qadam 
// console.log(); chiqarish 