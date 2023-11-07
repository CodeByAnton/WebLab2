const validationMessageX = document.getElementById("validation-message-x");
const validationMessageY = document.getElementById("validation-message-y");
const validationMessageR = document.getElementById("validation-message-r");
const submitButton = document.getElementById("submit-button");
const checkboxes = document.querySelectorAll('input[name="Y"]');
const inputX = document.getElementById("X");
const inputR=document.getElementById("R");
const cleanButton=document.getElementById("clean-button")



checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        checkboxes.forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    });
});
let savedRValue=localStorage.getItem("selectedRValue");
if (savedRValue){
    inputR.value=savedRValue;
}


cleanButton.addEventListener("click", function (){
    localStorage.clear();
})
inputX.addEventListener("input",function(){
    const X=inputX.value.replace(",",".");
    if (validateX(X)){
        validationMessageX.textContent='';
    }
    else{
        inputX.value = '';
        validationMessageX.textContent = "Введите корректное значение X";
    }
})
function validateX(par){
    const regex=/^(null|-?\d+(\.\d{0,10})?)?$/;

    return ((regex.test(par) && par<3 && par>-3) || par==='-')

}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const X = inputX.value.replace(",", ".");

    const Y = document.querySelector('input[name="Y"]:checked');

    const R = inputR.value;

    if (X === '' || X ==='-') {
        validationMessageX.textContent = "Введите корректное значение X";
        return;
    } else {
        validationMessageX.textContent = "";
    }

    if (!Y) {
        validationMessageY.textContent = "Укажите значение Y";
        return;
    } else {
        validationMessageY.textContent = "";
    }

    if (!R) {
        validationMessageR.textContent = "Укажите значение R";
        return;
    } else {
        validationMessageR.textContent="";


    }
    //сохраняем данные введенные с клавиатуры в localStorage(значения X, Y)
    const point={x:X, y:Y.value};
    savedPoints.push(point);
    localStorage.setItem('savedPoints',JSON.stringify(savedPoints));




    document.querySelector("form").submit();}
)



