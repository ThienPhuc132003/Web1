
const addBtn=document.querySelector
("#add-btn");
const newTaskInput=document.querySelector
("#wrapper input");
const taskContainer = document.querySelector
("#tasks");
const error=document.getElementById
("error");
const countValue=document.querySelector
(".count-value");
let taskCount=0;
//Task count
const displayCount=(taskCount)=>{
    countValue.innerText=taskCount;
};
//Add task
const addTask=()=>{
    const taskName= newTaskInput.value.trim();
    error.style.display="none";
    if (!taskName){
        setTimeout(()=>{
            error.style.display="block";
        },200);
        return;
    }

const task=`<div class="task">
<input type="checkbox" class="task-check">
<span class="taskname">${taskName}</span>
<button class="edit">
<i class="fa-solid fa-pen-to-square"></i>
</button>
<button class="delete">
<i class="fa-solid fa-square-minus"></i>
</button>
</div>`;

taskContainer.insertAdjacentHTML("beforeend",task);
taskCount++;
displayCount(taskCount);
//Delete task
const deleteButtons=document.querySelectorAll(".delete");
deleteButtons.forEach((button) =>{
    button.onclick=()=>{
        button.parentNode.remove();
        taskCount-=1;
        displayCount(taskCount);
    };
});
//Edit task
const editButtons=document.querySelectorAll(".edit");
editButtons.forEach((editBtn) =>{
    editBtn.onclick=(e)=>{
        let targetElement=e.target;
        if(!(e.target.className=="edit")){
            targetElement=e.target.parentNode;
    }
    newTaskInput.value=targetElement.previousElementSibling?. innerText;
    targetElement.parentNode.remove();
    taskCount -=1;
    displayCount(taskCount);;
}
});
const tasksCheck= document.querySelectorAll(".task-check")
tasksCheck.forEach((checkBox)=>{
    checkbox.onchange=()=>{
        checkbox.nextElementSibling.classList.
        toggle("completed");
        if (checkBox.checked){
            taskCount-=1;
        }
        else{
            taskCount+=1;
        }
        displayCount(taskCount);
    };
});
taskCount +=1;
displayCount(taskContainer);
newTaskInput.value="";
};
addBtn.addEventListener("click",addTask);
addBtn.addEventListener("press")
window.onload=()=>{
    taskCount=0;
    displayCount(taskCount);
    newTaskInput.value="";
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }