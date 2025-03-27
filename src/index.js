console.log('working');

import { getStorage } from './pages/storage.js';
import { newProjectDiv } from './pages/newProject.js';
import { home } from './pages/home.js';

getStorage();

const contentDiv = document.getElementById('content');

const navBtns = Array.from(document.getElementById('navbar').children);
console.log(navBtns);

navBtns.forEach((btn) =>
    btn.addEventListener('click', (e) => loadContent(e.target.id))
);

const loadContent = (pageId) => {
    switch (pageId) {
        case 'home':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(home());
            break;
        case 'new':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(newProjectDiv());
            break;
        case 'settings':
            contentDiv.innerHTML = '';
            contentDiv.appendChild();
            break;
    }
};

// load dummy data into storage
// populateStorage("test", JSON.stringify(newTask1))
const test = localStorage.getItem('test');
console.log(test);
