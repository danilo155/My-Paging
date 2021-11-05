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
let text="Welcome to my Pages"
        let textArray=['H','e','l','l','o','w']
        let check=0
        setInterval(function typing() {
                if (check < text.length) {
                    document.getElementById("text").textContent += text[check];
                    check++;
                }
            }, 160);
// let number = ['5', '-3', '10', '-100', '500']
// for (let i = 0; i < number.length; i++ ){
//     if (number[i]<0) {
//        console.log(number[i])
//    } else {
//     console.log('Ничего');
//   }
// }