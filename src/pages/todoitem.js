// title, description, dueDate, priority

function newTask(titleTxt, descTxt, date, priorityLevel ) {
    const title = titleTxt
    const description = descTxt
    const dateDue = date
    const priority = priorityLevel
    
    return { title, description, dateDue, priority }
}

// test data
export const newTask1 = newTask("testTask", "this is to test that it works", "", "high")

export const taskDiv = () => {
    console.log("todo loaded")

    const taskDiv = document.createElement('div');
    taskDiv.id = "newTask"

    const titleInput = document.createElement('input') 
    titleInput.id = 'title'
    taskDiv.appendChild(titleInput)



    return taskDiv
}