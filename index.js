var savel = document.getElementById("savel")

var countel = document.getElementById("countel")
var count = 0

function incriment() {

count = count + 1
countel.innerText = count
} 


function save() {
    let countstr = count + " - "
    savel.textContent  += countstr
    countel.textContent = 0
}
