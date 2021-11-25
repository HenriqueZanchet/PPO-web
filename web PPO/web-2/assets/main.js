// const text = "Lorem ipsum dolor sit amet"
// const para = document.querySelector("main p")

// let word = document.createElement("span")
// word.className = "word"

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//         para.appendChild(word)
//         word = document.createElement("span")    
//         word.className = "word"
//     }

//     const letter = document.createElement("span")
//     letter.className = "letter"
//     letter.innerText = text[i]
//     word.appendChild(letter)
// }

// para.appendChild(word)

const stats = {
    errors: 0,
    corrects: 0,
    time: 0
}

//VER 0.0.2
const text = "Lorem ipsum dolor sit amet"
const para = document.querySelector("main p")

let textElements = []

const createWord = () => {
    const element = document.createElement("span")
    element.className = "word"
    return element
}

const createLetter = (word, letter) => {
    const element = document.createElement("span")
    element.className = "letter"
    element.innerText = letter
    textElements.push(element)
    word.appendChild(element)
}

let element = createWord()

text.split('').forEach(letter => {
    if (letter === " ") {
        para.appendChild(element)
        element = createWord()
    }

    createLetter(element, letter)
})

para.appendChild(element)


//IDETINFICA LETRA DIGITADA
let pos = 0

setInterval(() => { stats.time++ }, 1000)

window.addEventListener("keydown", ev => {
    console.log("sdasd")
    //const estaCorreto = (ev.key === text[pos])
    if (ev.key === text[pos]) {
        textElements[pos].classList.add("correct")
        stats.corrects++
    } else {
        textElements[pos].classList.add("wrong")
        stats.errors++
    }
    pos++
})