export const about = () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.id = "about"
    
    const aboutTitle = document.createElement('h1');
    aboutTitle.innerText = `RAVING RAMEN? WHO ARE WE`

    aboutDiv.appendChild(aboutTitle)

    return aboutDiv
}