const inputdata=document.getElementById("inputfield");
const taskcontainer=document.getElementById("tasklist");
function addtask(){
    if (inputdata.value === ""){
        alert("write something in the box");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputdata.value;
        taskcontainer.appendChild(li);
        let deletetask = document.createElement('button');
        deletetask.innerHTML = "❌";
        deletetask.id="deletetask";
        li.appendChild(deletetask);
    }
    inputdata.value = "";
}

taskcontainer.addEventListener("click",function(e){
    if(e.target.tagname === 'li'){
        e.target.classList.toggle("li.checked");
    }else if(e.target.tagname == 'button'){

    }
})