// Використовуємо IIFE, щоб уникнути глобальної видимості для speakWord
(function (window) {
    var speakWord = "Good Bye";
    var speakGoodbye = function (name) {
        console.log(speakWord + " " + name);
    };
    window.speakGoodbye = speakGoodbye; // Додаємо функцію в глобальний об'єкт window
})(window);
