const height = document.getElementById("height")
const age = document.getElementById("age")
const weight = document.getElementById("weight")
const gender = document.getElementById("female")
const activity = document.getElementById("activity")
const grundCal = document.getElementById("grundCal")
const grundJ = document.getElementById("grundJ")
const gesamtCal = document.getElementById("gesamtCal")
const gesamtJ = document.getElementById("gesamtJ")
let grund
let gesamt
function calculate() {
    if (gender.checked) {
        grund = (655.1 + (9.6 * weight.value) + (1.8 * height.value) - (4.7 * age.value)).toFixed(0)
    } else {
        grund = (664.7 + (13.7 * weight.value) + (5 * height.value) - (6.8 * age.value)).toFixed(0)
    }
    if (activity.value == 1) {
        gesamt = (grund * 0.95).toFixed(0)
    } else if (activity.value == 2) {
        gesamt = (grund * 1.2).toFixed(0)
    } else if (activity.value == 3) {
        gesamt = (grund * 1.5).toFixed(0)
    } else if (activity.value == 4) {
        gesamt = (grund * 1.7).toFixed(0)
    } else if (activity.value == 5) {
        gesamt = (grund * 1.9).toFixed(0)
    } else if (activity.value == 6) {
        gesamt = (grund * 2.2).toFixed(0)
    }
    grundCal.innerHTML = grund
    grundJ.innerHTML = (grund * 4.1868).toFixed(0)
    gesamtCal.innerHTML = gesamt
    gesamtJ.innerHTML = (gesamt * 4.1868).toFixed(0)
}