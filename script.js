let toggleBulb = document.querySelector(".header__btn")
let bulb = document.querySelector(".header__bulb")
let body = document.querySelector("body")
let buttonAdd = document.querySelector(".todo__add")
let input = document.querySelector(".todo__nav input")
let listContainer = document.querySelector(".todo__list")
let tema = "dark"
let counter = 0
let counterElement = document.querySelector(".counter")
let footerText = document.querySelector(".footer__text")


toggleBulb.addEventListener("click", () => {
    if (tema == "dark"){
        tema = "white"
    }else {tema = "dark"}
    console.log(tema)
    toggleBulb.classList.toggle("active__btn")
    bulb.classList.toggle("active__bulb")
    body.classList.toggle("active__body")
    buttonAdd.classList.toggle("active__todo")
    footerText.classList.toggle("active__text")
    let listItem = document.querySelectorAll(".todo__list-item")
   let deletes = document.querySelectorAll(".delete")
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.toggle("active__todo")
        deletes[i].classList.toggle("active__delete")
    }
})



buttonAdd.addEventListener("click", () => {
    if(input.value){
    
    listContainer.innerHTML += ` <div class="${tema == "dark"? "todo__list-item":"todo__list-item active__todo"}">
                                <p>${input.value}</p>
                                <button class="${tema == "dark"?"delete":"delete active__delete"}"></button>
                                </div>`
    input.value = "" 
    counter++
    counterElement.innerHTML = counter
    saveData()
    }else{alert("you must write something")}
})

listContainer.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON"){
    event.target.parentElement.remove()
    counter-- 
    counterElement.innerHTML = counter
    saveData()
    }
})

function saveData(){
    localStorage.setItem("todos", listContainer.innerHTML)
    localStorage.setItem("counter", counter)
}

function getData(){
    let data = localStorage.getItem("todos")
    let dataCounter = localStorage.getItem("counter")
    if (data){
        listContainer.innerHTML = data
        let items = document.querySelectorAll(".todo__list-item")
        let deletes = document.querySelectorAll(".delete")
        for(let i = 0; i < items.length; i++){
            items[i].classList.remove("active__todo")
            deletes[i].classList.remove("active__delete")
        }
    }
    if(dataCounter){
        counter = +dataCounter
        counterElement.innerHTML = counter
    }
}

getData()