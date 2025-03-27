import { populateStorage, retrieveStorage } from './storage';

export const projects = (() => {
    const getProjects = () => {
        return retrieveStorage('projects');
    };

    const newProject = (text) => {
        populateStorage('projects', JSON.stringify(text));
    };

    const deleteProject = () => {};

    return { getProjects, newProject, deleteProject };
})();
