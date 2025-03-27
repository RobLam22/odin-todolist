// export const varName = ``
// import { projects } from "./projectsManager"

export const home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home';

    const savedProjects = JSON.parse(localStorage.getItem('projects'));

    savedProjects.forEach((project) => {
        const projectData = JSON.parse(localStorage.getItem(project));

        const projectCard = document.createElement('div');
        projectCard.classList.add('card');

        const projectTitle = document.createElement('h1');
        projectTitle.id = 'title';
        projectTitle.innerText = projectData.title;

        const description = document.createElement('p');
        description.innerText = projectData.description;
        description.id = 'description';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', () => {
            console.log(`Deleting ${projectData.title}`);
            // localStorage.removeItem(projectData.title)
            // savedProjects.forEach(title => {
            //     if (title === projectData.title) {
            //         savedProjects.splice()
            //     }
            // })
        });

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(description);
        projectCard.appendChild(deleteBtn);

        homeDiv.appendChild(projectCard);
    });

    return homeDiv;
};
