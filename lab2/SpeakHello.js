// Змінна speakWord не виходить у глобальну область видимості
var speakWord = "Hello";

function speakHello(name) {
    console.log(speakWord + " " + name);
}
