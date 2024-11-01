function triangle(value1, type1, value2, type2) {
    // Інструкція щодо використання функції
    console.log("Використовуйте функцію таким чином:");
    console.log('triangle(<значення 1>, "<тип 1>", <значення 2>, "<тип 2>");');
    console.log('Можливі типи: "leg", "hypotenuse", "adjacent angle", "opposite angle", "angle".');
    console.log("Величини кутів у градусах.");

    // Перетворення кутів з градусів у радіани
    function toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    // Перетворення кутів з радіан у градуси
    function toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    
    // Перевірка коректності введення
    if (value1 <= 0 || value2 <= 0) {
        console.log("Zero or negative input");
        return "failed";
    }
    const types = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!types.includes(type1) || !types.includes(type2)) {
        console.log("Incorrect type input. Please read the instructions.");
        return "failed";
    }

    // Змінні для результатів
    let a, b, c, alpha, beta;

    // Логіка обчислень для кожного можливого випадку
    try {
        if (type1 === "leg" && type2 === "hypotenuse" || type1 === "hypotenuse" && type2 === "leg") {
            const leg = type1 === "leg" ? value1 : value2;
            const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
            if (leg >= hypotenuse) {
                console.log("Leg cannot be equal to or larger than hypotenuse.");
                return "failed";
            }
            a = leg;
            c = hypotenuse;
            b = Math.sqrt(c * c - a * a);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;

        } else if (type1 === "leg" && type2 === "leg") {
            a = value1;
            b = value2;
            c = Math.sqrt(a * a + b * b);
            alpha = toDegrees(Math.atan(a / b));
            beta = 90 - alpha;

        } else if (type1 === "leg" && type2 === "opposite angle" || type1 === "opposite angle" && type2 === "leg") {
            const leg = type1 === "leg" ? value1 : value2;
            const angle = type1 === "opposite angle" ? value1 : value2;
            if (angle >= 90) {
                console.log("The angle must be acute.");
                return "failed";
            }
            a = leg;
            alpha = angle;
            beta = 90 - alpha;
            c = a / Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);

        } else if (type1 === "leg" && type2 === "adjacent angle" || type1 === "adjacent angle" && type2 === "leg") {
            const leg = type1 === "leg" ? value1 : value2;
            const angle = type1 === "adjacent angle" ? value1 : value2;
            if (angle >= 90) {
                console.log("The angle must be acute.");
                return "failed";
            }
            b = leg;
            beta = angle;
            alpha = 90 - beta;
            c = b / Math.cos(toRadians(beta));
            a = Math.sqrt(c * c - b * b);

        } else if (type1 === "hypotenuse" && type2 === "angle" || type1 === "angle" && type2 === "hypotenuse") {
            const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
            const angle = type1 === "angle" ? value1 : value2;
            if (angle >= 90) {
                console.log("The angle must be acute.");
                return "failed";
            }
            c = hypotenuse;
            alpha = angle;
            beta = 90 - alpha;
            a = c * Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);

        } else {
            console.log("Invalid combination of types. Please read the instructions.");
            return "failed";
        }

        // Виведення результатів
        console.log("a =", a);
        console.log("b =", b);
        console.log("c =", c);
        console.log("alpha =", alpha);
        console.log("beta =", beta);
        return "success";

    } catch (error) {
        console.log("An error occurred during calculation. Please check your input.");
        return "failed";
    }
}

// Приклади запусків
triangle(7, "leg", 8, "hypotenuse");
triangle(60, "opposite angle", 5, "leg");
triangle(43.13, "angle", -2, "hypotenuse");
