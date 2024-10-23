const input = document.querySelector("input");
const mee = document.querySelector(".mee")
const hat = document.querySelector(".hat")
const container = document.querySelector(".container")
const bus = document.querySelector(".bus")

mee.addEventListener("click", () => {
    if(input.value === ''){
        alert("Add an activity")
    }
    else{
        const content = input.value
        let li = document.createElement("li")
        li.innerHTML = content
        hat.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        
       
        input.value = ''

        saveData();
        myFun()
        addFun()
        herFun()
        broFun()
        mumFun()
        sisFun()
        auntFun()
        uncleFun()

       
    
    }   
   
 })

 function myFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

// we don't want it to affect mobile devices below 1090px

if(screenWidth >= 1090 && screenWidth <= 2400){
  if(countItems.length > 4){
    container.style.height = "100%"
  }
  else{
    container.style.height = ""
  }
}
 
}

function addFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 500 && screenWidth <= 550){
    if(countItems.length > 5){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function herFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 600 && screenWidth <= 780){
    if(countItems.length > 10){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function broFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 800 && screenWidth <= 860){
    if(countItems.length > 13){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function mumFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 360 && screenWidth <= 380){
    if(countItems.length > 6){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function sisFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 390 && screenWidth <= 410){
    if(countItems.length > 7){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function auntFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 412 && screenWidth <= 440){
    if(countItems.length > 8){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}

function uncleFun(){
  const countItems = hat.querySelectorAll("li");
  const screenWidth = window.innerWidth;

  if(screenWidth >= 320 && screenWidth <= 330){
    if(countItems.length > 4){
      container.style.height = "100%"
    }
    else{
      container.style.height = ""
    }
  }
}


 hat.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked")
     saveData();
     myFun()
     addFun()
     herFun()
     broFun()
     mumFun()
     sisFun()
     auntFun()
     uncleFun()
    }
    else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove()
     saveData();
     myFun()
     addFun()
     herFun()
     broFun()
     mumFun()
     sisFun()
     auntFun()
     uncleFun()
    }
  }, false);

  function saveData(){
    localStorage.setItem("data", hat.innerHTML)
    
  }
  
  function showList(){
    hat.innerHTML = localStorage.getItem("data")
    myFun()
    addFun()
    herFun()
    broFun()
    mumFun()
    sisFun()
    auntFun()
    uncleFun()
  }
 
  showList();

  bus.addEventListener("input", () => {
    localStorage.setItem("content", bus.innerHTML)
  })
  if(localStorage.getItem("content")){
    bus.innerHTML = localStorage.getItem("content")
  }