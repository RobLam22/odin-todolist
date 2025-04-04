import { projects } from "./projectsManager"
import { populateStorage } from "./storage"

export const newProjectDiv = () => {
    const newProjectDiv = document.createElement('div')

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'projTitle')
    titleLabel.innerText = 'New Project Name:'

    const titleInput = document.createElement('input')
    titleInput.id = 'projTitle'
    titleInput.name = 'projTitle'
    titleInput.type = 'text'

    const descLabel = document.createElement('label')
    descLabel.setAttribute('for', 'projTitle')
    descLabel.innerText = 'Description:'

    const descInput = document.createElement('input')
    descInput.id = 'description'
    descInput.name = 'description'
    descInput.type = 'text'

    const submitBtn = document.createElement('button')
    submitBtn.innerText = 'OK'
    submitBtn.addEventListener('click', e => {
        const projectObj = { title: titleInput.value, description: descInput.value }
        projects.newProject(titleInput.value)
        populateStorage(projectObj.title, JSON.stringify(projectObj))
    })

    newProjectDiv.appendChild(titleLabel)
    newProjectDiv.appendChild(titleInput)
    newProjectDiv.appendChild(descLabel)
    newProjectDiv.appendChild(descInput)
    newProjectDiv.appendChild(submitBtn)

    return newProjectDiv
}