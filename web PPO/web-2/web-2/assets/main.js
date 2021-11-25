const text = "Lorem ipsum dolor sit amet"
const para = document.querySelector("main p")

let word = document.createElement("span")
word.className = "word"

for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
        para.appendChild(word)
        word = document.createElement("span")    
        word.className = "word"
    }
    
    const letter = document.createElement("span")
    letter.className = "letter"
    letter.innerText = text[i]
    word.appendChild(letter)
}

para.appendChild(word)