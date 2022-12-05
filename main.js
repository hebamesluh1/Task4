let btn = document.querySelector('button');
let txtColor = document.querySelector('#text-color');
let paint = document.querySelector('#paint-me');

// create random color 
const randomColor =()=>{
    let randomColor = "#"+Math.floor(Math.random() * 16777215).toString(16);
    txtColor.value = paint.style.backgroundColor =randomColor;
}
btn.addEventListener('click',randomColor);


//change color by input box
txtColor.addEventListener('input',()=>{
    paint.style.backgroundColor=txtColor.value;
});


// mouse hover and leave changes color
let Timer;
paint.addEventListener('mouseover',()=>{
    Timer = setInterval(randomColor,(500));
    
});
paint.addEventListener('mouseleave',()=>{
    clearInterval(Timer);
});