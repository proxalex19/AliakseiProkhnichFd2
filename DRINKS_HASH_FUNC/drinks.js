"use strict";

let drinkStorage = new HashStorage();
let name = document.getElementById("name");

name.onclick = function () {
    let key = prompt("Назовите ваш напиток");
    let value = {};

    value.alcohol = confirm("Он алкогольный или нет?");
    value.recipe = prompt("Какие у него ингридиенты?");
    drinkStorage.addValue(key, value);
}

let drinkInfo = document.getElementById("info");

drinkInfo.onclick = function () {
    let drinkInfo = prompt("Какой напиток вы ищете?");
    let desk = document.getElementById("desk");

    let answer = drinkStorage.getValue(drinkInfo);

    if (drinkStorage.getValue(drinkInfo) !== undefined) {
        desk.innerHTML = "напиток: " + drinkInfo +
            "<br>" + "алкогольный: " + (answer.alcohol === true ? "да" : "нет") +
            "<br>" + "Рецепт: " + (answer.recipe ? answer.recipe : "такого рецепта нет");
    } else {
        desk.innerHTML = "такого напитка нет, но вы можете его добавить";
    }
}

let delInfo = document.getElementById("delInfo");

delInfo.onclick = function () {
    let delInfo = prompt("Какой напиток удаляем?");
    let desk = document.getElementById("desk");

    if (drinkStorage.deleteValue(delInfo) === true) {
        desk.innerHTML = "такого напитка больше нет";
    } else {
        desk.innerHTML = "такого напитка нет";
    }

}

let list = document.getElementById("list");

list.onclick = function () {
    let desk = document.getElementById("desk");
    desk.innerHTML = drinkStorage.getKeys();
}