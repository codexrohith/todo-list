let taskList = [];
let input = document.getElementById("input");
let add=document.getElementById("add");
let lot = document.getElementById("lot")
let comp=document.getElementById("comp");
let incomp=document.getElementById("incomp");
let summ=document.getElementById("summ");

function addTask(){
  let task = { title:input.value,completed:false};
  taskList.push(task);
  renderSummary();

}
function renderTask(){
  lot.innerHTML="";
  let i =0;
  for(i=0;i<taskList.length;i++){

    const li = document.createElement("li");

    const cbtn = document.createElement("button");
    cbtn.textContent="Completed";
    cbtn.className="cbtn";
    cbtn.dataset.index=i;
    li.appendChild(cbtn);

    li.style.listStyleType = "none";

    const p = document.createElement("p");
    p.textContent=taskList[i].title;
  
    li.appendChild(p);
    
    const delbtn = document.createElement("button");
    delbtn.textContent="Delete";
    delbtn.className="delbtn";
    delbtn.dataset.index=i;
    const editbtn = document.createElement("button");

    editbtn.textContent="Edit";
    editbtn.className="edtbtn";
    editbtn.dataset.index=i;
    li.appendChild(editbtn);
    
    
    li.dataset.index=i;
    


    cbtn.addEventListener("click",function(){
      let j =li.dataset.index;
      if(taskList[j].completed==false){
        taskList[j].completed=true;
      }
      else{
        taskList[j].completed=false;
      }
      renderTask();
      renderSummary();
})

    delbtn.addEventListener("click",function(e){
      let j =delbtn.dataset.index;
      taskList.splice(j,1);
      e.stopPropagation();
      renderTask();
      renderSummary()
      
  })

  lot.appendChild(li);
  li.appendChild(delbtn);

    editbtn.addEventListener("click",function(events){
      const inpu=document.createElement("input");
      inpu.value=taskList[li.dataset.index].title;
      li.appendChild(inpu);
      inpu.before(editbtn);
      inpu.addEventListener("keydown",function(evv){
      if(evv.key==="Enter"){
        if(inpu.value!=""){
          taskList[li.dataset.index].title=inpu.value;
          renderTask();
          renderSummary();
          }}})
      events.stopPropagation();
      
        })

        if(taskList[i].completed){
            li.style.textDecoration="line-through";
          }
        else{
          li.style.textDecoration="none";
          }

      
  }
  }
  


    
function renderSummary(){
  let countc=0;
  let countinc=0;
  for (let i=0;i<taskList.length;i++){
    if(taskList[i].completed){
      countc++;
    }
    else{
      countinc++;
    }
  }
  comp.textContent="Completed Tasks: "+countc;
  incomp.textContent="Incompleted Tasks:"+countinc;
  if(countinc==0){
    summ.textContent="All tasks are completed";
  }
  else{
    summ.textContent="";
  }

}
input.addEventListener("keydown",function(ev){
  if(ev.key === "Enter"){
    if (input.value!=""){
      addTask();
      renderTask();
      renderSummary();
      input.value="";
      console.log(taskList);
  }
  }
})
add.addEventListener("click",function(){
    if (input.value!=""){
      addTask();
      renderTask();
      renderSummary();
      input.value="";
      console.log(taskList);
  }
})
