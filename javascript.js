const taskForm = document.getElementById("task-form");


taskForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const taskName = document.getElementById("task-name").value;
  const taskAssignee = document.getElementById("task-assignee").value;
  const taskDeadline = document.getElementById("task-deadline").value;

  
  if (taskName && taskAssignee && taskDeadline) {
    
    console.log("Task assigned!");
    console.log("Task Name:", taskName);
    console.log("Assignee:", taskAssignee);
    console.log("Deadline:", taskDeadline);

    
    taskForm.reset();
  } else {
    alert("
