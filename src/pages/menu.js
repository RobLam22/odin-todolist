export const menu = () => {
    const menuDiv = document.createElement('div');
    menuDiv.id = "menu"
    
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = `MENU`

    menuDiv.appendChild(menuTitle)

    return menuDiv
}