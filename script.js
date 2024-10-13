var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var plusbutton=document.getElementById("add-popbtn")


plusbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn=document.getElementById("cancel-book")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
      popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbtn=document.getElementById("add-bookbtn")
var booktitleinput=document.getElementById("book-title")
var bookauthorinput=document.getElementById("book-author")
var bookdescriptioninput=document.getElementById("book-description")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebtn(event)">Delete </button>`
    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebtn(event){
    event.target.parentElement.remove()
}