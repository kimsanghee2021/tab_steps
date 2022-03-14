function MyTab(){
    this.init();
    this.bindingEvent();
}

MyTab.prototype.init = function(){
    this.main = document.querySelector('main');
    this.menu = this.main.querySelectorAll('nav ul li');
    this.cont = this.main.querySelectorAll('section article');
    this.speed = this.speedFun(this.cont[0]);
    this.dubleClick = true;
}
MyTab.prototype.bindingEvent = function(){

    this.menu.forEach(function(el, idx){

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
    
}