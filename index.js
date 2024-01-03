document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      // Prevent the default form submission behavior
  
      const taskDescriptionInput = document.getElementById("new-task-description");
      const taskDescription = taskDescriptionInput.value;
  
      // Create a new task item
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;
  
      // Attach the new task to the task list
      taskList.appendChild(newTask);
  
      // Clear the input field after adding the task
      taskDescriptionInput.value = "";
    });
  });
  