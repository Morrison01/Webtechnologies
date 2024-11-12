// Використовуємо IIFE, щоб уникнути глобальної видимості для speakWord
(function (window) {
    var speakWord = "Hello";
    var speakHello = function (name) {
        console.log(speakWord + " " + name);
    };
    window.speakHello = speakHello; // Додаємо функцію в глобальний об'єкт window
})(window);
