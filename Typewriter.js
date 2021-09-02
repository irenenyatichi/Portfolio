function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").Index.HTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
const textDisplay = document.getElementById('text')
const phrases = ["Irene Nyatichi is an upcoming Software Developer.Currently a student at AkiraChix studying Computer Programming Languages;JavaScript, Python, Kotlin. She would like to create interactive websites and applications for people, while ensuring wonderful experiences"]
let i = 0
let j = 0
let currentPhrase = []

function loop() {
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {
        console.log(phrases[i])//this is the outer loop

        if (j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            console.log("add a letter", j)
        }
        setTimeout(loop, 20)
    }
}
loop();