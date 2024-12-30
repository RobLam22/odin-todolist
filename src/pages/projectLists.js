import { populateStorage } from "./storage";

export const projects = (() => {
    let projectsList = [];

    const getProjects = () => {
        populateStorage("projects")
    }

    const newProject = (text) => {
        projectsList.push(text)
        console.log(projectsList)
        populateStorage("projects", JSON.stringify(projectsList))
    }

    const deleteProject = (text) => {
    }

    return { getProjects, newProject, deleteProject }
})();