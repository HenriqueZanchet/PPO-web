const main = document.querySelector("main")
const divInfo = main.querySelector("div.info")
const textArea = main.querySelector("textarea")

textArea.addEventListener("keyup", () => {
    if (event.code === "Space") {
        divInfo.innerHTML = `${textArea.value.length} caracteres`
    }
})