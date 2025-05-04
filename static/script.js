let inputbox=document.getElementById("inputbox");
let tasklist=document.getElementById("tasklist");
let pending=document.getElementById("pending_tasklist");
let completed=document.getElementById("completed_tasklist");
function addTask() {
    if(inputbox.value!==""){
        let task = inputbox.value;
        let li=document.createElement("li");
        li.innerText=task;
        li.addEventListener("click",checkandunchecktask);
        li.classList.add("uncheck");
        inputbox.value="";
        
        let deletebtn=document.createElement("button");
        deletebtn.classList.add("deletebtn");
        deletebtn.addEventListener("click",deletetask);
        li.appendChild(deletebtn);
        pending.appendChild(li);
        saveData();
    }else{
        alert("enter the task");
    }
}

function deletetask(event){
    event.stopPropagation();
    let button=event.target;
    let li=button.parentNode;
    li.remove();
    saveData();
}   

function checkandunchecktask(event){
    let task=event.target;
    if (task.classList.contains("uncheck")){
        task.classList.remove("uncheck");
        task.classList.add("check");
        completed.append(task);
    }
    else{
        task.classList.remove("check");
        task.classList.add("uncheck");
        pending.append(task);
    }
    saveData();
}

function saveData(){
    let pendingtasks = [];
    pending.querySelectorAll('li').forEach((li)=>{
        pendingtasks.push({
            text:li.innerText,
            state:"uncheck"
        });
    });

    let completedtasks = [];
    completed.querySelectorAll('li').forEach((li)=>{
        completedtasks.push({
            text:li.innerText,
            state:"check"
        })
    })
    localStorage.setItem("pending_tasks",JSON.stringify(pendingtasks));

    localStorage.setItem("completed_tasks",JSON.stringify(completedtasks));
}

function showData(){
    let pending_tasks=JSON.parse(localStorage.getItem("pending_tasks"));
    if(pending_tasks){
        pending_tasks.forEach((task)=>{
            let li=document.createElement("li");
            li.innerText=task.text;
            li.classList.add(task.state);
            li.addEventListener("click",checkandunchecktask);

            let deletebtn=document.createElement("button");
            deletebtn.classList.add("deletebtn");
            deletebtn.onclick=deletetask;
            li.append(deletebtn);

            pending.append(li);
        })
    }

    let completed_tasks=JSON.parse(localStorage.getItem("completed_tasks"));
    if(completed_tasks){
        completed_tasks.forEach((task)=>{
            let li=document.createElement("li");
            li.innerText=task.text;
            li.classList.add(task.state);
            li.addEventListener("click",checkandunchecktask);

            let deletebtn=document.createElement("button");
            deletebtn.classList.add("deletebtn");
            deletebtn.onclick=deletetask;
            li.append(deletebtn);
            
            completed.append(li);
        })
    }
}

showData();