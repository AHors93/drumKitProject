
// variables for audio 
const clap = document.getElementById('Clap')
const hihat = document.getElementById('Hihat')
const kick = document.getElementById('Kick')
const openhat = document.getElementById('Openhat')
const ride = document.getElementById('Ride')
const snare = document.getElementById('Snare')
const tom = document.getElementById('Tom')
const boom = document.getElementById('Boom')
const tink = document.getElementById('Tink')


// below plays on keydown 
document.addEventListener("keydown", () => {
    if (event.keyCode === 65) {
        clap.play();
    } else if (event.keyCode === 83) {
        hihat.play();
    } else if (event.keyCode === 68) {
        kick.play();
    } else if (event.keyCode === 70) {
        openhat.play();
    } else if (event.keyCode === 71) {
        ride.play();
    } else if (event.keyCode === 72) {
        snare.play();
    } else if (event.keyCode === 74) {
        tom.play();
    } else if (event.keyCode === 75) {
        boom.play();
    } else if (event.keyCode === 76) {
        tink.play();
    }
})
