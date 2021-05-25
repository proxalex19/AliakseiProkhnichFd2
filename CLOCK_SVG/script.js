//функция по интервалу , запускается каждую секунду
setInterval(function () {
    //функция расчета градуса поворота для каждой стрелки путем добавления атрибута по id
    function time(elemClock, deg) {
        elemClock.setAttribute('transform', 'rotate(' + deg + ' 50 50)')
    }
    //получаем текущее время и создаем переменную
    var date = new Date()
    //получаем аргумент для функции time 
    time(sec, 6 * date.getSeconds()) //60*6=360 
    time(min, 6 * date.getMinutes())
    time(hour, 30 * (date.getHours() % 12) + date.getMinutes() / 2)
    //360/30 = 12 часа , %12 проводим к стрелочным 
    //+ добавляем мин
}, 1000)


var ciratr = document.querySelector('svg #circl');
var r = +ciratr.attributes[3].value - 10;// получаем радиус окужности часов



for (var i = 0; i < 12; i++) {
    var g = document.querySelector('g');
    var arc = (i * 30) * Math.PI / 180;//радианы
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');

    circle.className = "num";
    circle.setAttribute('r', '5');
    circle.setAttribute("fill", "green");
    circle.setAttribute('cy', r - r * Math.cos(arc) + 15);
    circle.setAttribute('cx', r + r * Math.sin(arc) + 15);
    g.appendChild(circle);
}

for (var i = 1; i < 13; i++) {
    var g = document.querySelector('g');
    var arc = (i * 30) * Math.PI / 180;//радианы
    var txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    txt.setAttribute('y', r - r * Math.cos(arc) + 17);
    txt.setAttribute('x', r + r * Math.sin(arc) + 15);
    txt.setAttribute('text-anchor', 'middle');
    txt.style.fill = "black";
    txt.style.fontSize = '5';
    txt.textContent = +i;
    g.appendChild(txt);

}