let width = document.body.clientWidth;
let newWidth = (width - 200).toString() + 'px';

console.log(newWidth)

let i = 0;
document.getElementById("toggle").addEventListener("click", onClickSlide);
document.getElementById("open").addEventListener("click", showForm);
function showForm() {
    document.getElementById("modal").classList.add('show-modal');
}
function onClickSlide() {
    document.body.classList.toggle('show-nav');
    document.body.classList.toggle('width-second-position');
    document.querySelector('header').classList.toggle('border-active');
    if (i == 0) {
        document.querySelector('header').style.width = newWidth;
        document.querySelector('main').style.width = newWidth;
        document.querySelector('body').style.width = newWidth;
        i++;
    } else if (i == 1) {
        document.querySelector('header').style.width = width.toString() + 'px';
        document.querySelector('main').style.width = width.toString() + 'px';
        document.querySelector('body').style.width = width.toString() + 'px';
        i--;
    }
}
// function number(number1,number2,number3) {
//     if (number1 + number2 + number3 ==0) {
//         alert("Сумма дорівнює нулю")
//     } else if (number1 + number2 + number3 > 0) {
//         alert("Сумма більше нуля")
//     } else {
//         alert("Сумма меньше нуля")
//     }
// }
// number(11, 23, -54);