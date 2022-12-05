let btn = document.querySelector('button');
let txtColor = document.querySelector('#text-color');
let paint = document.querySelector('#paint-me');

btn.addEventListener('click',()=>{
    let randomColor = "#"+Math.floor(Math.random() * 16777215).toString(16);
    txtColor.value = paint.style.backgroundColor =randomColor;}
    );
txtColor.addEventListener('input',()=>{
    paint.style.backgroundColor=txtColor.value;
});