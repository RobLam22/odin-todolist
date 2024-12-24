console.log("working")

import { taskDiv } from "./pages/todoitem.js";
// import { menu } from './pages/menu.js'
import { populateStorage } from "./pages/storage.js";
import { getStorage } from "./pages/storage.js";
import { newTask1 } from "./pages/todoitem.js";

getStorage()

const contentDiv = document.getElementById('content')

const navBtns = Array.from(document.getElementById('navbar').children)
console.log(navBtns)

navBtns.forEach(btn => btn.addEventListener('click', e => loadContent(e.target.id)))

const loadContent = (pageId) => {
    switch (pageId) {
        case 'dashboard':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(home())
            break;
        case 'new':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(taskDiv())
            break;
        case 'settings':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(settings())
            break;
    }
}

// load dummy data into storage
// populateStorage("test", JSON.stringify(newTask1))
const test = JSON.parse(localStorage.getItem("test"))
console.log(test)







