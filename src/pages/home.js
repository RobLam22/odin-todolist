// export const varName = ``
import noodles from '../imgs/noodles.jpg'

export const home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.id = "home"
    
    const homeTitle = document.createElement('h1');
    homeTitle.innerText = `RAVING RAMEN`

    const homeImg = document.createElement('img')
    homeImg.src = noodles

    const introPara = document.createElement('p')
    introPara.innerText = 'Welcome to the funkiest ramen joint! Pumping raving tunes to go with your raving ramen! Slurp down some yummy noodles along with some delish refreshments!'

    const reviewDiv = document.createElement('div')
    const reviews = [
        {
            name: "Peter", 
            feedback: "best noods..."
        },
        {
            name: "Jo", 
            feedback: "it was so good I almost threw up from eating too much"
        },
        {
            name: "Paige", 
            feedback: "thumbs up!"
            },
    ]

    reviews.forEach(review => {
        const dotPt = document.createElement('ul')
        dotPt.innerText = `"${review.feedback}" - ${review.name}`
        reviewDiv.appendChild(dotPt)
    })


    homeDiv.appendChild(homeTitle)
    homeDiv.appendChild(homeImg)
    homeDiv.appendChild(introPara)
    homeDiv.appendChild(reviewDiv)

    return homeDiv
}