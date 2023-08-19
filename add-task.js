
//Main box
let AddTaskBox = document.createElement("div");
AddTaskBox.style.cssText="width:500px;height:100px;background:grey;border-radius:20%;position:relative;margin:10px;";
document.body.appendChild(AddTaskBox);

let TaskName=AddTaskBox.appendChild(document.createElement("input"));
TaskName.type="text";
TaskName.style.cssText = "position:absolute;left:5%;top:22%;width:300px;height:55px;border-radius:20%;";


// create add task button
let but=document.createElement("button");
AddTaskBox.appendChild(but);
but.appendChild(document.createTextNode("add task"));
but.style.cssText = "width:100px;height:55px;background:red;border-radius:20%;position:absolute;right:10%;top:22%;";


let NewTask;
let NewTask_input;
let DeleteTask_button;
let a = [];
let nbrTask = 0;



function DeleteTask(ele)
{
    ele.onclick=function()
    {
   ele.parentElement.parentElement.removeChild(ele.parentElement);
   
    }
}


document.body.style.cssText="display:flex;justify-content:center;align-items:center;flex-direction:column;";
let TasksContainer=document.createElement("div");
TasksContainer.style.cssText="margin-top:20px;display:flex;border-radius:10%;width:600px;height:auto;position:relative;justify-content:center;align-items:center;background:grey;flex-direction:column;";
let i=0;
let error=document.createTextNode("No result");



function addTask()
{
    if (TasksContainer.children.length == 0)
        nbrTask = 0;
    
    NewTask=document.createElement("div");
    NewTask.appendChild(document.createTextNode(`task ${++nbrTask} : `));
    NewTask.style.cssText="position:relative;width:500px;height:100px;background:grey;border-radius:0 20% 20% 20% ;margin:5px;border:2px solid black;";
    
    NewTask_input = NewTask.appendChild(document.createElement("input"));
    NewTask_input.type="text";
    NewTask_input.setAttribute("readonly","");
    NewTask_input.value=TaskName.value;
    TaskName.value="";
    NewTask_input.style.cssText = "position:absolute;left:5%;top:22%;width:300px;height:55px;border-radius:20%;";
    
    DeleteTask_button=NewTask.appendChild(document.createElement("button"));
    DeleteTask_button.appendChild(document.createTextNode("delete task"));
    DeleteTask_button.style.cssText="width:100px;height:55px;background:red;border-radius:20%;position:absolute;right:10%;top:22%";
    TasksContainer.appendChild(NewTask);

    document.body.appendChild(TasksContainer);
    a[i]=DeleteTask_button;
    a.forEach(DeleteTask);
    i++;


    search.oninput=function()
{
    let eq;
    let ex;
    for(let i=0;i<TasksContainer.children.length;i++)
    {
        ex=false;
        eq=true;
        for(let j=0;j<search.value.length;j++)
        {
            if(search.value[j]!=TasksContainer.children[i].children[0].value[j])
            eq=false;
        }
        if(eq==false)
        {
            TasksContainer.children[i].style.display="none";
        }
        if(eq==true)
        {
            TasksContainer.children[i].style.display="block";
        }
    }
    for(let t=0;t<TasksContainer.children.length;t++)
        {
            if(TasksContainer.children[t].style.display=="block")
            ex=true;
        }
    if(ex==false)
    {
        TasksContainer.appendChild(error);
    }
    else
    {
        if(TasksContainer.innerText.split("\n")[TasksContainer.children.length*2]=="No result")
        TasksContainer.removeChild(error);
    }
}
}



let search=document.createElement("input");
search.type="text";
search.placeholder="search a task";
document.body.appendChild(search);

but.onclick = () => {
    if (TaskName.value == '') {
        alert("Write a task first");
        return;
    }
    addTask();
};
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        if (TaskName.value == '') {
            alert("Write a task first");
            return;
        }
        addTask();
    }
})


