class MyTab{
    constructor(){
        this.init();
        this.bindingEvent();
    }
    init(){
        this.main = document.querySelector('main');
        this.menu = this.main.querySelectorAll('nav ul li');
        this.cont = this.main.querySelectorAll('section article');
        this.speed = this.speedFun(this.cont[0]);
        this.dubleClick = true;
    }
    bindingEvent(){
        this.menu.forEach((el, idx)=>{
            el.addEventListener('click',e=>{
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
            }); 
        });
    }
    active(target, idx){
        for(let el of target){
            el.classList.remove('on');
            target[idx].classList.add('on');
        }
    }
    matchHT(idx){
        let ht = getComputedStyle(this.cont[idx]).height;
        ht = parseInt(ht);
        return ht;
    }
    speedFun(el){
        let speed = getComputedStyle(el).transitionDuration;
        speed = parseFloat(speed)*1000;
        return speed;
    }
}