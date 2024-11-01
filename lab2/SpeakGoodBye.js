// Змінна speakWord не виходить у глобальну область видимості
var speakWord = "Good Bye";

function speakGoodbye(name) {
    console.log(speakWord + " " + name);
}
