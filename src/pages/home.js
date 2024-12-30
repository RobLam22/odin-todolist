// export const varName = ``
import { projects } from "./projectLists"

export const home = () => {
    
    const homeDiv = document.createElement('div');
    homeDiv.id = "home"

    const savedProjects = projects.getProjects()
    console.log(savedProjects)

    

    return homeDiv
}