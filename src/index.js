console.log("working")

import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { menu } from './pages/menu.js'

const contentDiv = document.getElementById('content')

const navBtns = Array.from(document.getElementById('navbar').children)
console.log(navBtns)

navBtns.forEach(btn => btn.addEventListener('click', e => loadContent(e.target.id)))

const loadContent = (pageId) => {
    switch (pageId) {
        case 'home':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(home())
            break;
        case 'menu':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(menu())
            break;
        case 'about':
            contentDiv.innerHTML = '';
            contentDiv.appendChild(about())
            break;
    }
}