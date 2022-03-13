const main = document.querySelector('main');
const menu = main.querySelectorAll('nav ul li');
const cont = main.querySelectorAll('section article');

//메뉴 클릭시 이벤트를 일어나게 해라.
menu.forEach(function(el, idx){
    el.addEventListener('click',function(e){
        e.preventDefault();
        console.log(el);
    });
});