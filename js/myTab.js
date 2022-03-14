//함수 MyTab 제작
function MyTab(){
    this.init();
    this.bindingEvent();
}
//MyTab의 상속을 받는 init - 항상 this를 넣어줘야한다.
MyTab.prototype.init = function(){
    this.main = document.querySelector('main');
    this.menu = this.main.querySelectorAll('nav ul li');
    this.cont = this.main.querySelectorAll('section article');
    this.this. speed = this.speedFun(this.cont[0]);
    this.dubleClick = true;
}

MyTab.prototype.bindingEvent = function(){
    this.menu.forEach(function(el, idx){
        el.addEventListener('click',function(e){
            e.preventDefault();
    
            const isOn = e.currentTarget.classList.contains('on');
            if(isOn) return;

            this.active(this.menu,idx);
            this.active(this.cont,idx);
    
            new Animate(this.main,{
                prop : 'height',
                value : this.matchHT(idx),
                duration : this.speed
            });
        }.bind(this));  //이벤트 문 안쪽의 this값을 인스턴스로 고정
    }.bind(this)); // each문 안쪽의 this값 인스턴스로 고정
}

MyTab.prototype.active = function(target, idx){
    for(let el of target){
        el.classList.remove('on');
        target[idx].classList.add('on');
    }
}
MyTab.prototype.matchHT = function(idx){
    let ht = getComputedStyle(this.cont[idx]).height;
    ht = parseInt(ht);
    return ht;
}
MyTab.prototype.speedFun = function(el){
    let speed = getComputedStyle(el).transitionDuration;
    speed = parseFloat(speed)*1000;
    return speed;
}
