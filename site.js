
const getCardInfo = index => {

if (index === 0) return {
    "title": "Nike",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#deaf01"
}

if (index === 1) return {
    "title": "Independent",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "color": "#554a33"
}

if (index === 2) return {
    "title": "Michael Kors",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    "color": "#01322f"
}


    const title= "Champion"
    const text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const image = "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg"
    const color = "#6495ED"

    if (index === 3) return {title, text, image, color}
    //cardInfo4 = {title, text}
}
//console.log({cardInfo4})

//having a "hanging curly brace" keeps your code more condensed.
// function bla(text){
//     //if the "bla" function is null, "yum" will be displayed in the console log
//     console.log(text||'yum')
//     return 5
// }

// console.log(bla())

function createCard(card, cardInfo){

    card.style.backgroundImage = `url(${cardInfo.image})`
    card.style.color = cardInfo.color

    const h1 = card.querySelector('h1')
    h1.textContent = cardInfo.title
    
    const p = card.querySelector('p')
    p.textContent = cardInfo.text
}

//saying "take the function, and put it into the 'a' variable"
const a = createCard

//call the function
//'.card' is the class name
const cards = document.querySelectorAll('.card')
//'length' just lets all the cards be shown rather then hard-coding the three cards to be shown.
//will continue to increment until it doesn't
for (let i = 0; i < cards.length; i++){
createCard(cards[i], getCardInfo(i))
}

const greeting = ({name}) => {
    return `Hello ${name}!`
}

console.log(greeting({'name': 'Sade'}))

//put a function into another function
//setTimeout(() => createCard(cards[0], cardInfo1), 3000)

//this is an array
//more than one thing being stored needs the square brackets
const names = ['Aniya', 'Sade', 'Brandy']

//this will display the array of names
console.log(names)

//this will display my name to the console because mine is second
console.log(names[1])

const foods = ['pizza', 'spaghetti', 'almonds']
//this will make 'almonds' display because it is at the end
console.log(foods[foods.length - 1])

const [fav1, fav2, fav3] = foods
console.log({fav1, fav2})

const sentence = 'i love to eat.'
const [first] = sentence.split(' ')

console.log(sentence)