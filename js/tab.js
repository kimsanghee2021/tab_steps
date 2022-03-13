const main = document.querySelector('main');
const menu = main.querySelectorAll('nav ul li');
const cont = main.querySelectorAll('section article');
const speed = speedFun(cont[0]);
let dubleClick = true;
//메뉴 클릭시 이벤트를 일어나게 해라.
menu.forEach(function(el, idx){
    el.addEventListener('click',function(e){
        e.preventDefault();

        const isOn = e.currentTarget.classList.contains('on');
        if(isOn) return;
        active(menu,idx);
        active(cont,idx);

        new Animate(main,{
            prop : 'height',
            value : matchHT(idx),
            duration : speed
        });
    });
});

//기능 실행 함수
function active(target, idx){
    for(let el of target){
        el.classList.remove('on');
        target[idx].classList.add('on');
    }
}
//각 article의 높이값을 순번에 맞춰변환하는 함수 
function matchHT(idx){
    let ht = getComputedStyle(cont[idx]).height;
    ht = parseInt(ht);
    return ht;
}

//css에 설정해 놓은 시간으로 변환할 수 있게 만드는 함수   $speed: 0.5s;
function speedFun(el){
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed)*1000;
    return speed;
    console.log(speed);
}
