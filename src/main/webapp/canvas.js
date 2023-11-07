const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.height = canvas.width=400;
let w = canvas.width, h = canvas.height;

const hatchWidth = 10 / 2;
const baseHatchGap=40;
let hatchGap = 50;
if (localStorage.getItem("selectedRValue")){
    rValue=localStorage.getItem("selectedRValue");

}
else {
    rValue=1;
}

redrawGraph()

const selectR = document.getElementById("R");
selectR.addEventListener("change", function () {
    rValue=selectR.value;
    redrawGraph();
    if (savedPoints.length > 0) {
        savedPoints.forEach(point => {
            printDotOnGraph(point.x, point.y);
        });
    }
    localStorage.setItem("selectedRValue",rValue);
})
function redrawGraph() {
    ctx.fillStyle = 'rgba(0,36,87,0.33)';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    // y ось
    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 - 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 + 10, 15);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
    ctx.closePath();

    // x ось
    ctx.beginPath();
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 - 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 15, h / 2 + 10);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(0, h / 2);
    ctx.stroke();
    ctx.closePath();

    //рисование меток на графике
    ctx.beginPath();
    ctx.moveTo(w / 2 - hatchWidth, h / 2 - hatchGap);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 - hatchGap);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 - hatchGap * 2);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 - hatchGap * 2);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 + hatchGap);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 + hatchGap);
    ctx.moveTo(w / 2 - hatchWidth, h / 2 + hatchGap * 2);
    ctx.lineTo(w / 2 + hatchWidth, h / 2 + hatchGap * 2);
    ctx.moveTo(w / 2 - hatchGap, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 - hatchGap, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 - hatchGap * 2, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 - hatchGap * 2, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 + hatchGap, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 + hatchGap, h / 2 + hatchWidth);
    ctx.moveTo(w / 2 + hatchGap * 2, h / 2 - hatchWidth);
    ctx.lineTo(w / 2 + hatchGap * 2, h / 2 + hatchWidth);
    ctx.stroke();
    ctx.closePath();

    //рисование четверти круга
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, hatchGap, 0, 1 / 2 * Math.PI, false);
    ctx.lineTo(w/2, h/2+hatchGap);
    ctx.lineTo(w/2,h/2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();




    //рисование прямоугольника
    ctx.beginPath();
    ctx.moveTo(w/2-hatchGap, h/2);
    ctx.lineTo(w/2-hatchGap, h/2-2*hatchGap);
    ctx.lineTo(w/2, h/2-2*hatchGap);
    ctx.lineTo(w/2, h/2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();



    //рисование треугольника
    ctx.beginPath();
    ctx.moveTo(w / 2 - hatchGap, h / 2);
    ctx.lineTo(w / 2, h / 2 + 2 * hatchGap);
    ctx.lineTo(w / 2, h/2);
    ctx.lineTo(w/2, h/2)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();




    const axisFontSize = baseHatchGap/2;
    let fontSize = hatchGap / 3.5;
    if(fontSize<10) fontSize=10;
    ctx.fillStyle = 'black';

    ctx.font = `500 ${axisFontSize * 1.4}px Roboto`;
    ctx.fillText('y', w / 2 - hatchWidth * 6, 15)
    ctx.fillText('x', w - 20, h / 2 - hatchWidth * 2.4)

    let label1, label2;
    label1=rValue/2;
    label2=rValue
    // if (isNaN(rValue)) {
    //     label1 = rValue + '/2'
    //     label2 = rValue
    // } else {
    //     label1 = rValue / 2
    //     label2 = rValue
    // }

    ctx.font = `800 ${fontSize}px Roboto`;
    //подпись 0X
    ctx.fillText(label1, w / 2 + hatchGap +3, h / 2 + hatchWidth * 2.8);
    ctx.fillText(label2, w / 2 + hatchGap * 2 , h / 2 + hatchWidth * 2.8);
    ctx.fillText('-' + label1, w / 2 - hatchGap - 24, h / 2 + hatchWidth * 2.8);
    ctx.fillText('-' + label2, w / 2 - hatchGap * 2 - 15, h / 2 + hatchWidth * 2.8);

    //подпись 0Y
    ctx.fillText(label1, w / 2 + hatchWidth * 2, h / 2 - hatchGap + 3);
    ctx.fillText(label2, w / 2 + hatchWidth * 2, h / 2 - hatchGap * 2 + 3);
    ctx.fillText('-' + label1, w / 2 + hatchWidth * 2, h / 2 + hatchGap + 10);
    ctx.fillText('-' + label2, w / 2 + hatchWidth * 2, h / 2 + hatchGap * 2 + 3);

}
let savedPoints = JSON.parse(localStorage.getItem('savedPoints')) || [];
function printDotOnGraph(xCenter, yCenter) {

    ctx.fillStyle = 'rgb(252,29,239)';
    let x = w / 2 + xCenter * hatchGap * (2 / rValue), y = h / 2 - yCenter * hatchGap * (2 / rValue);
    const radius = hatchGap / 20; // Радиус круга

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

}
function getMousePosition(e) {
    let rect = canvas.getBoundingClientRect();

    let mouseX = e.offsetX * canvas.width / canvas.clientWidth | 0;
    let mouseY = e.offsetY * canvas.height / canvas.clientHeight | 0;
    return {x: mouseX, y: mouseY};
}

canvas.addEventListener('click', (event) => {
    //removeValidation();
    if (!isNaN(rValue)) {
        const x = getMousePosition(event).x;
        const y = getMousePosition(event).y;


        const xCenter = Math.round((x - w / 2) / (hatchGap * (2 / rValue)) * 1000) / 1000,
            yCenter = Math.round((h / 2 - y) / (hatchGap * (2 / rValue)) * 1000) / 1000;


        flag=true;
         if(xCenter>3||xCenter<-3) {
             alert("X должен быть в диапаозне от (-3;3)");
             flag=false;
             return;
         }
         if(yCenter < -3 || yCenter > 5) {
             alert("Y должен быть в диапозоне от [-3;5]");
             flag=false;
             return;
         }
         if (flag) {
             printDotOnGraph(xCenter,yCenter);
             const point = {x: xCenter, y: yCenter};
             savedPoints.push(point);


             // Сохранение массива точек в LocalStorage
             localStorage.setItem('savedPoints', JSON.stringify(savedPoints));
             let data = new URLSearchParams({
                 X: xCenter,
                 Y: yCenter,
                 R: rValue,
                 //mouse: true
             })

             let options = {
                 method: 'POST',
                 body: data,
                 // credential: 'same-origin'
             }

             fetch("controller", options)
                 .then(response => {
                     if (!response.ok) {
                         throw new Error('Ошибка HTTP ' + response.status);
                     }
                     return response.text();
                 })
                 .then(responseText => {
                     // Перенаправление на result_page.jsp
                     window.location.replace("result_page.jsp");
                 })
                 .catch(error => {
                     console.error("Произошла ошибка: " + error);
                 });
         }


    }});
if (savedPoints.length > 0) {
    savedPoints.forEach(point => {
        printDotOnGraph(point.x, point.y);
    });
}