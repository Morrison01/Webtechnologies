// Використаємо IIFE, щоб уникнути глобальної області видимості
(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    // Проходимо по масиву імен
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        
        // Визначаємо, що виводити
        if (firstLetter === 'j') {
            speakGoodbye(names[i]);
        } else {
            speakHello(names[i]);
        }
    }

    // Додатковий функціонал для селекціонування за останньою літерою
    console.log("Фільтрація імен за останньою літерою:");
    var filteredNames = names.filter(name => name.charAt(name.length - 1).toLowerCase() === 'n');
    
    // Виводимо привітання та прощання для відфільтрованих імен
    for (var j = 0; j < filteredNames.length; j++) {
        var firstLetter = filteredNames[j].charAt(0).toLowerCase();
        
        if (firstLetter === 'j') {
            speakGoodbye(filteredNames[j]);
        } else {
            speakHello(filteredNames[j]);
        }
    }
})();
