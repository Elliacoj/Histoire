let name = ["Luc", "Jack", "Pierre", "Simon", "Paul", "Natacha", "Nathalie"];
let objects = ["une pomme", "un anneau", "une voiture", "un tracteur", "une allumette", "un hélicoptère"];
let temperatures = ["38°", "32°", "34°", "35°", "37°", "30°"];
let places = ["au lac", "à la maison", "chez le médecin", "au magasin", "dans un canyon"];
let verbs = ["a", "est", "fait", "boit", "mange", "saute"];
let button = document.getElementById("button");
let story = document.getElementById("story");

name.push(prompt("Rentrez votre nom"));

function random(num) {
    return Math.trunc(Math.random()* num)
}

button.addEventListener("click", function () {
    let first = name[random(name.length)];
    let second = verbs[random(verbs.length)];
    let third = objects[random(objects.length)];
    let four = places[random(places.length)];
    let five = verbs[random(verbs.length)];
    let six = temperatures[random(temperatures.length)];
    console.log(second);
    test();

    function test() {
        switch (second) {
            case "a":
                if(four === "au lac") {
                    second = verbs[random(verbs.length)];
                    console.log(second);
                    test();
                }
                break;
        }
        return second
    }

    story.innerHTML += first + " " + second + " " + third + " " + four +
    " " + five + " " + six + ". ";
})