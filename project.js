function addTask(){
var Tname=document.getElementById("Tname").value
var Tlist=document.getElementById("Tlist")

if(Tname==""){
    alert("Please enter the task")
    return
}
var listitems=document.createElement('li')
listitems.innerText=Tname
Tlist.appendChild(listitems)


var buttoncontainer=document.createElement('div')
listitems.appendChild(buttoncontainer)
buttoncontainer.className="task-button"


var deletebutton=document.createElement('button')
buttoncontainer.appendChild(deletebutton)
deletebutton.innerText="delete"
deletebutton.onclick=function(){
    Tlist.removeChild(listitems)
}


var confirmbutton=document.createElement('button')
buttoncontainer.appendChild(confirmbutton)
confirmbutton.innerText="confirm"
confirmbutton.onclick=function(){
    listitems.classList.toggle('completed')
}

Tname=""
}