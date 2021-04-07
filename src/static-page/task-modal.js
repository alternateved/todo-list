import createDOM from "../helper-functions/dom";

function createModal() {
  const modal = createDOM("div", "task-box", "hidden");

  const taskBoxContainer = createDOM("div", "task-box-container");
  modal.appendChild(taskBoxContainer);

  const title = createDOM("h3", "task-box-title");
  title.textContent = "New Task";
  taskBoxContainer.appendChild(title);

  for (let i = 0; i < 3; i++) {
    const div = createDOM("div", "task-box-input");
    const label = createDOM("label");
    div.appendChild(label);

    switch (i) {
      case 0:
        {
          label.textContent = "Title";
          const input = createDOM("input", "input-element");
          input.id = "task-title";
          input.type = "text";
          input.placeholder = "Task title";
          div.appendChild(input);
        }
        break;
      case 1:
        {
          label.textContent = "Description";
          const textBox = createDOM("textarea");
          textBox.id = "task-description";
          textBox.placeholder = "Full description...";
          div.appendChild(textBox);
        }
        break;
      case 2:
        {
          label.textContent = "Due date";
          const input = createDOM("input", "input-element");
          input.id = "task-date";
          input.type = "date";
          div.appendChild(input);
        }
        break;
    }
    taskBoxContainer.appendChild(div);
  }

  const priorityBox = createDOM("div", "task-box-options");
  taskBoxContainer.appendChild(priorityBox);

  const priorityLabel = createDOM("label");
  priorityLabel.textContent = "Priority";
  priorityBox.appendChild(priorityLabel);

  const prioritySelect = createDOM("select");
  prioritySelect.id = "task-priority";
  priorityBox.appendChild(prioritySelect);

  const firstOption = createDOM("option");
  firstOption.textContent = "Low";
  firstOption.value = "low";
  prioritySelect.appendChild(firstOption);
  const secondOption = createDOM("option");
  secondOption.textContent = "Medium";
  secondOption.value = "medium";
  prioritySelect.appendChild(secondOption);
  const thirdOption = createDOM("option");
  thirdOption.textContent = "High";
  thirdOption.value = "high";
  prioritySelect.appendChild(thirdOption);

  const projectBox = createDOM("div", "task-box-options");
  taskBoxContainer.appendChild(projectBox);

  const projectLabel = createDOM("label");
  projectLabel.textContent = "Project";
  projectBox.appendChild(projectLabel);

  const projectSelect = createDOM("select");
  projectSelect.id = "task-projects";
  projectBox.appendChild(projectSelect);

  const fourthOption = createDOM("option");
  fourthOption.textContent = "First project";
  fourthOption.value = "first";
  projectSelect.appendChild(fourthOption);

  const buttonsDiv = createDOM("div", "task-box-buttons");
  taskBoxContainer.appendChild(buttonsDiv);

  const addButton = createDOM("button");
  addButton.id = "add-task-box";
  addButton.textContent = "Add task";
  buttonsDiv.appendChild(addButton);

  const cancelButton = createDOM("button");
  cancelButton.id = "cancel-task-box";
  cancelButton.textContent = "Cancel";
  buttonsDiv.appendChild(cancelButton);

  return modal;
}

export default createModal;
