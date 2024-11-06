// Створення об'єкта car1 із методом drive
let car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 120;
car1.tuning = true;
car1["number of accidents"] = 0;
car1.driver = {
    name: "Vadym Martyniuk",
    category: "C",
    "personal limitations": "No driving at night"
};

// Додавання методу drive до car1
car1.drive = function() {
    console.log("I am not driving at night");
};

// Виклик методу drive для car1
car1.drive();

// Створення об'єкта car2 із методом drive, використовуючи літерал об'єкта
let car2 = {
    color: "red",
    maxSpeed: 150,
    tuning: false,
    "number of accidents": 2,
    driver: {
        name: "Vadym Martyniuk",
        category: "B",
        "personal limitations": null
    },
    // Додавання методу drive до car2
    drive: function() {
        console.log("I can drive anytime");
    }
};

// Виклик методу drive для car2
car2.drive();


















// Конструктор для "класу" Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    // Метод trip
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let nightDrivingMessage = this.driver.nightDriving ? "drives at night" : "does not drive at night";
            console.log(`Driver ${this.driver.name} ${nightDrivingMessage} and has ${this.driver.experience} years of experience.`);
        }
    };
}

// Додавання статичного методу AssignDriver до Truck
Truck.AssignDriver = function(truck, name, nightDriving, experience) {
    truck.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

// Створення двох об'єктів truck1 та truck2
let truck1 = new Truck("green", 3000, 90.5, "Ford", "F-150");
let truck2 = new Truck("blue", 4000, 80.5, "Volvo", "FH");

// Додавання водія до truck1, nightDriving = true
Truck.AssignDriver(truck1, "Vadym Martyniuk", true, 5);

// Додавання водія до truck2, nightDriving = false
Truck.AssignDriver(truck2, "Andriy Shevchenko", false, 3);

// Демонстрація роботи методу trip для обох об'єктів
truck1.trip(); // Водій з нічними поїздками
truck2.trip(); // Водій без нічних поїздок

// Перевірка truck3, який не має водія
let truck3 = new Truck("red", 2500, 75.0, "Mercedes", "Actros");
truck3.trip(); // Жодного водія не призначено


















// Клас Square
class Square {
    constructor(a) {
        this.a = a; // Сторона квадрата
    }

    static help() {
        console.log("Square: A square is a quadrilateral with all four sides of equal length and all angles equal to 90 degrees.");
    }

    length() {
        console.log(`Total length of sides: ${4 * this.a}`);
    }

    square() {
        console.log(`Area of the square: ${this.a * this.a}`);
    }

    info() {
        console.log(`Square characteristics:
          Lengths of sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
          Angles: 90°, 90°, 90°, 90°
          Total length of sides: ${4 * this.a}
          Area: ${this.a * this.a}`);
    }
}

// Клас Rectangle, який успадковує Square
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b; // Ширина прямокутника
    }

    static help() {
        console.log("Rectangle: A rectangle is a quadrilateral with opposite sides equal and all angles equal to 90 degrees.");
    }

    length() {
        console.log(`Total length of sides: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Area of the rectangle: ${this.a * this.b}`);
    }

    info() {
        console.log(`Rectangle characteristics:
          Lengths of sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
          Angles: 90°, 90°, 90°, 90°
          Total length of sides: ${2 * (this.a + this.b)}
          Area: ${this.a * this.b}`);
    }
}

// Клас Rhombus, який успадковує Square
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha; // Тупий кут
        this.beta = beta; // Гострий кут
    }

    static help() {
        console.log("Rhombus: A rhombus is a quadrilateral with all sides equal and opposite angles equal.");
    }

    length() {
        console.log(`Total length of sides: ${4 * this.a}`);
    }

    square() {
        // Площа ромба можна обчислити, знаючи сторони та кути
        const area = this.a * this.a * Math.sin(this.alpha * (Math.PI / 180));
        console.log(`Area of the rhombus: ${area}`);
    }

    info() {
        console.log(`Rhombus characteristics:
          Lengths of sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}
          Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
          Total length of sides: ${4 * this.a}
          Area: ${this.a * this.a * Math.sin(this.alpha * (Math.PI / 180))}`);
    }
}

// Клас Parallelogram, який успадковує Rectangle
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha; // Тупий кут
        this.beta = beta; // Гострий кут
    }

    static help() {
        console.log("Parallelogram: A parallelogram is a quadrilateral with opposite sides parallel and equal in length.");
    }

    length() {
        console.log(`Total length of sides: ${2 * (this.a + this.b)}`);
    }

    square() {
        // Площа паралелограма
        const area = this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
        console.log(`Area of the parallelogram: ${area}`);
    }

    info() {
        console.log(`Parallelogram characteristics:
          Lengths of sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}
          Angles: ${this.alpha}°, ${this.beta}°, ${this.alpha}°, ${this.beta}°
          Total length of sides: ${2 * (this.a + this.b)}
          Area: ${this.a * this.b * Math.sin(this.alpha * (Math.PI / 180))}`);
    }
}

// Виклик статичного методу help для кожного з класів
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// Створення об'єктів
const square = new Square(4);
const rectangle = new Rectangle(5, 3);
const rhombus = new Rhombus(6, 60, 120);
const parallelogram = new Parallelogram(5, 3, 30, 150);

// Виклик методу info для кожного об'єкта
square.info();
rectangle.info();
rhombus.info();
parallelogram.info();










//Функція Triangular
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

//Створення та виведення об'єктів за допомогою функції Triangular
const triangle1 = Triangular(); // 
const triangle2 = Triangular(6, 8, 10);
const triangle3 = Triangular(5, 5, 5);

console.log(triangle1); // { a: 3, b: 4, c: 5 }
console.log(triangle2); // { a: 6, b: 8, c: 10 }
console.log(triangle3); // { a: 5, b: 5, c: 5 }








//Функція PiMultiplier
function PiMultiplier(multiplier) {
    return function () {
        return Math.PI * multiplier;
    };
}

//Створення трьох функцій за допомогою PiMultiplier
const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiByTwoThirds = PiMultiplier(2 / 3);
const dividePiBy2 = PiMultiplier(1 / 2); // Пі поділити на 2

console.log(multiplyPiBy2()); // 6.283185307179586 (2 * π)
console.log(multiplyPiByTwoThirds()); // 2.0943951023931957 (2/3 * π)
console.log(dividePiBy2()); // 1.5707963267948966 (π / 2)










// Функція Painter
function Painter(color) {
    return function(obj) {
        if (obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

// Створення функцій PaintBlue, PaintRed та PaintYellow
const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

// Об'єкти з таблиці 12
const object1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

const object2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

const object3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

// Демонстрація роботи функцій на кожному об'єкті
console.log("Painting object1:");
PaintBlue(object1);
PaintRed(object1);
PaintYellow(object1);

console.log("\nPainting object2:");
PaintBlue(object2);
PaintRed(object2);
PaintYellow(object2);

console.log("\nPainting object3:");
PaintBlue(object3);
PaintRed(object3);
PaintYellow(object3);


